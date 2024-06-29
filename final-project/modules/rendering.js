import * as THREE from "three";
import { displayPaintingInfo, hidePaintingInfo } from "./paintingInfo.js";
import { updateMovement } from "./movement.js";

export const setupRendering = (
  scene,
  camera,
  renderer,
  paintings,
  controls,
  walls,
  tank,
  howitzer,
  pedestal,
  BacHo,
  cylinder,
  sphere,
  FrameGroup
) => {
  const clock = new THREE.Clock();

  let render = function () {
    const delta = clock.getDelta();

    updateMovement(delta, controls, camera, walls, tank, howitzer, pedestal, BacHo, cylinder, sphere, FrameGroup);

    const distanceThreshold = 3.5;

    let objectToShow = null;
    let infoToShow = null;

    // Check paintings
    paintings.forEach((painting) => {
      const distanceToPainting = camera.position.distanceTo(painting.position);
      if (distanceToPainting < distanceThreshold) {
        objectToShow = painting;
        infoToShow = painting.userData.info;
      }
    });

    // Check tank
    const tankBoundingBox = new THREE.Box3().setFromObject(tank);
    const distanceToTank = tankBoundingBox.distanceToPoint(camera.position);
    if (distanceToTank < distanceThreshold) {
      objectToShow = tank;
      infoToShow = tank; // Replace this with the actual info you want to show for the tank
    }

    // Check howitzer
    const howitzerBoundingBox = new THREE.Box3().setFromObject(howitzer);
    const distanceToHowitzer = howitzerBoundingBox.distanceToPoint(camera.position);
    if (distanceToHowitzer < distanceThreshold) {
      objectToShow = howitzer;
      infoToShow = howitzer; // Replace this with the actual info you want to show for the tank
    }

    // Check pedestal
    const pedestalBoundingBox = new THREE.Box3().setFromObject(pedestal);
    const distanceToPedestal = pedestalBoundingBox .distanceToPoint(camera.position);
    if (distanceToPedestal < distanceThreshold) {
      objectToShow = pedestal;
      infoToShow = pedestal; // Replace this with the actual info you want to show for the tank
    }

    // Check sphere
    const sphereBoundingBox = new THREE.Box3().setFromObject(sphere);
    const distanceToSphere = sphereBoundingBox.distanceToPoint(camera.position);
    if (distanceToSphere < distanceThreshold) {
      objectToShow = sphere;
      infoToShow = sphere // Replace this with the actual info you want to show for the sphere
    }

    if (objectToShow) {
      displayPaintingInfo(infoToShow);
    } else {
      hidePaintingInfo();
    }
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };

  render();
};
