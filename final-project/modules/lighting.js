import * as THREE from "three";
import { GUI } from "lil-gui";

export const setupLighting = (scene, paintings) => {
  // Initialize GUI
  // const gui = new GUI();
  // Ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  function createSpotlight(x, y, z, intensity, targetPosition) {
    const spotlight = new THREE.SpotLight(0xffffff, intensity);
    spotlight.position.set(x, y, z);
    spotlight.target.position.copy(targetPosition);
    spotlight.castShadow = true;
    spotlight.angle = 1;
    spotlight.penumbra = 0.2;
    spotlight.decay = 0.8;
    spotlight.distance = 40;
    spotlight.shadow.mapSize.width = 1024;
    spotlight.shadow.mapSize.height = 1024;

    // Add spotlight and its target to the scene
    scene.add(spotlight);
    scene.add(spotlight.target);

    return spotlight;
}

  const frontWallSpotlight1 = createSpotlight(
    10,
    14, 
    -43.8,
    0.7,
    new THREE.Vector3(10, 0, -20)
  );

  const frontWallSpotlight2 = createSpotlight(
    -10,
    14, 
    -43.8,
    0.7,
    new THREE.Vector3(-10, 0, -20)
  );

  const backWallSpotlight = createSpotlight(
    0, 
    14, 
    43.8,
    0.9,
    new THREE.Vector3(0, 0, 20)
  );

  const leftWallSpotlight = createSpotlight(
    -33.8, 
    14,
    0,
    0.9,
    new THREE.Vector3(-20, 0, 0)
  );

  const rightWallSpotlight = createSpotlight(
    33.8,
    14,
    0,
    0.9,
    new THREE.Vector3(20, 0, 0)
  );

  const statueSpotlight = createSpotlight(
    0.45,
    10, 
    -29,
    0.3,
    new THREE.Vector3(0.45, 5.2, -32)
  ); // Spotlight for the statue
  statueSpotlight.angle = 0.75084;
  statueSpotlight.decay = 1;
  statueSpotlight.penumbra = 1;
  statueSpotlight.distance = 0;


};
