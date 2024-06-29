// Pedestal.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const loadPedestalModel = (scene) => {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      "../public/models/pedestal/scene.gltf",
      (gltf) => {
        const pedestal = gltf.scene;

        // Position the pedestal at the center of the floor
        pedestal.position.set(0, -1, -35);

        // Scale if necessary
        pedestal.scale.set(0.006, 0.006, 0.006);

        // Iterate through all the meshes in the pedestal and update their materials
        pedestal.traverse((child) => {
          if (child.isMesh) {
            map: child.material.map,
              // Modify child.material here to improve appearance
              (child.material.metalness = 0.0),
              (child.material.roughness = 0.2),
              // Cast shadow
              (child.castShadow = true);
  

          }
        });

        // Add the pedestal to the scene
        pedestal.link = "/3D-art-gallery/Info_painting/Pedestal_BacHo.html";
        pedestal.title = 'Chủ tịch Hồ Chí Minh'
        scene.add(pedestal);
        // Optionally, you can perform any additional manipulation or processing here
        pedestal.BoundingBox = new THREE.Box3().setFromObject(pedestal);
        // const boxHelper = new THREE.BoxHelper(pedestal, 0xffff00); // Màu vàng
        // scene.add(boxHelper); // Thêm BoxHelper vào cảnh
    
        // // Lưu trữ BoxHelper trong đối tượng để có thể cập nhật sau này nếu cần
        // pedestal.BoxHelper = boxHelper;
        // Resolve the promise with pedestal
        resolve(pedestal);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model.", error);
        reject(error);
      }
    );
  });
};