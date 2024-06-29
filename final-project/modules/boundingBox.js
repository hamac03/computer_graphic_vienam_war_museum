import * as THREE from 'three';

// check if objects is an array. If it's not, we assume it's a THREE.Group and set objects to objects.children. We then use forEach to loop over each object in objects and add a bounding box to it
export const createBoundingBoxes = (objects, scene) => {
  // objects will be either paintings or walls that we pass in from main.js
  if (!Array.isArray(objects) ) {
    objects = objects.children;
  }
  objects.forEach((object) => {
    object.BoundingBox = new THREE.Box3(); // create a new bounding box for each object
    object.BoundingBox.setFromObject(object); // set the bounding box to the object (painting or wall)
    // const boxHelper = new THREE.BoxHelper(object, 0xffff00); // Màu vàng
    // scene.add(boxHelper); // Thêm BoxHelper vào cảnh

    // // Lưu trữ BoxHelper trong đối tượng để có thể cập nhật sau này nếu cần
    // object.BoxHelper = boxHelper;
  });
};


