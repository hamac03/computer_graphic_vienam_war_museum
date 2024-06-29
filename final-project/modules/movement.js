import * as THREE from 'three';
import { scene } from './scene';

// object to hold the keys pressed
export const keysPressed = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  w: false,
  a: false,
  s: false,
  d: false,
};

// parameters we get from setupRendering where updateMovement is called. setupRendering gets the parameters from main.jsss
export const updateMovement = (delta, controls, camera, walls, tank, howitzer, pedestal, BacHo, cylinder, sphere, FrameGroup) => {
  const moveSpeed = 12 * delta; // moveSpeed is the distance the camera will move in one second. We multiply by delta to make the movement framerate independent. This means that the movement will be the same regardless of the framerate. This is important because if the framerate is low, the movement will be slow and if the framerate is high, the movement will be fast. This is not what we want. We want the movement to be the same regardless of the framerate.

  const previousPosition = camera.position.clone(); // clone the camera position and store it in previousPosition. We will use this to reset the camera position if there is a collision

  // cose self-explanatory
  if (keysPressed.ArrowRight || keysPressed.d) {
    controls.moveRight(moveSpeed);
  }
  if (keysPressed.ArrowLeft || keysPressed.a) {
    controls.moveRight(-moveSpeed);
  }
  if (keysPressed.ArrowUp || keysPressed.w) {
    controls.moveForward(moveSpeed);
  }
  if (keysPressed.ArrowDown || keysPressed.s) {
    controls.moveForward(-moveSpeed);
  }

  // After the movement is applied, we check for collisions by calling the checkCollision function. If a collision is detected, we revert the camera's position to its previous position, effectively preventing the player from moving through walls.
  if (checkCollision(camera, walls, tank, howitzer, pedestal, BacHo, cylinder, sphere, FrameGroup)) {
    camera.position.copy(previousPosition); // reset the camera position to the previous position. The `previousPosition` variable is a clone of the camera position before the movement. We use `copy` instead of `set` because `set` will set the position to the same object, so if we change the previousPosition, the camera position will also change. `copy` creates a new object with the same values as the previousPosition.
  }
};


export const checkCollision = (camera, walls, tank, howitzer, pedestal, BacHo, cylinder, sphere, FrameGroup) => {
  const playerBoundingBox = new THREE.Box3();
  const cameraWorldPosition = new THREE.Vector3();
  camera.getWorldPosition(cameraWorldPosition);
  playerBoundingBox.setFromCenterAndSize(
      cameraWorldPosition,
      new THREE.Vector3(1, 1, 1)
  );

  // Check collision with walls
  for (let i = 0; i < walls.children.length; i++) {
      const wall = walls.children[i];
      if (wall.BoundingBox && playerBoundingBox.intersectsBox(wall.BoundingBox)) {
          return true;
      }
  }

  // Check collision with Frame of Painting
  if (FrameGroup){
    for (let i = 0; i < FrameGroup.children.length; i++) {
      const Each_Group = FrameGroup.children[i];
      for (let j = 0; j < Each_Group.children.length; j++){
        const frame = Each_Group.children[j];
        if (frame && frame.BoundingBox && playerBoundingBox.intersectsBox(frame.BoundingBox)) {
            return true;
        }
      }
    }
  }

  // Check collision with orther models
  const models = [tank, howitzer, pedestal, BacHo, cylinder, sphere];
  for (const model of models) {
    if (model && model.BoundingBox && playerBoundingBox.intersectsBox(model.BoundingBox)) {
      return true;
    }
  }
  return false;
};
