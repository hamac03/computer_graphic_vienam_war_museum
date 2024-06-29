import * as THREE from 'three';

const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const distanceThreshold = 7; // Define the distance threshold

function clickHandling(renderer, camera, paintings, tankModel, HowitzerModel, PedestalModel, BacHoModel, cylinderModel, sphereModel) {
  renderer.domElement.addEventListener(
    'click',
    (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      onClick(camera, paintings, tankModel, HowitzerModel, PedestalModel, BacHoModel, cylinderModel, sphereModel);
    },
    false
  );
}

function onClick(camera, paintings, TankModel, HowitzerModel, PedestalModel, BacHoModel, cylinderModel, sphereModel) {
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(paintings);
  
  if (intersects.length > 0) {
    const painting = intersects[0].object;
    const distance = camera.position.distanceTo(painting.position);

    if (distance <= distanceThreshold) {
      // Perform the desired action, e.g., open a modal or redirect to another page
      console.log('Clicked painting:', painting.userData.info.title);
      window.open(painting.userData.info.link, '_blank');
      return;
    }
  }

  // Check intersection and distance for each model
  if (checkBoundingBoxIntersection(camera, TankModel)) {
    console.log('Clicked tank model');
    window.open(TankModel.link, '_blank');
    return;
  }

  if (checkBoundingBoxIntersection(camera, HowitzerModel)) {
    console.log('Clicked Howitzer model');
    window.open(HowitzerModel.link, '_blank');
    return;
  }

  if (checkBoundingBoxIntersection(camera, PedestalModel)) {
    console.log('Clicked Pedestal model');
    window.open(PedestalModel.link, '_blank');
    return;
  }

  if (checkBoundingBoxIntersection(camera, BacHoModel)) {
    console.log('Clicked BacHo model');
    window.open(BacHoModel.link, '_blank');
    return;
  }

  if (checkBoundingBoxIntersection(camera, cylinderModel)) {
    console.log('Clicked cylinder model');
    window.open(cylinderModel.link, '_blank');
    return;
  }

  if (checkBoundingBoxIntersection(camera, sphereModel)) {
    console.log('Clicked sphere model');
    window.open(sphereModel.link, '_blank');
    return;
  }
}

function checkBoundingBoxIntersection(camera, model) {
  const boundingBox = new THREE.Box3().setFromObject(model);
  if (raycaster.ray.intersectsBox(boundingBox)) {
    const distance = boundingBox.distanceToPoint(camera.position);
    if (distance <= distanceThreshold) {
      return true;
    }
  }
  return false;
}

export { clickHandling };