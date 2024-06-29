// howitzer.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { GUI } from "lil-gui";



export const loadHowitzerModel = (scene) => {
  return new Promise((resolve, reject) => {
      const loader = new GLTFLoader();

      // Load GLTF model
      loader.load(
          "../public/models/howitzer/scene.gltf",
          function (gltf) {
              const howitzer = gltf.scene;

              // Position the howitzer at the center of the floor
              howitzer.position.set(-23, 3.1, 19);

              // Scale if necessary
              howitzer.scale.set(1.8, 1.8, 1.8);

              // Rotate if necessary
              // howitzer.rotation.y = - Math.PI/6 - Math.PI;
              howitzer.rotation.y = -Math.PI/18 + Math.PI;

              howitzer.traverse((child) => {
                if (child.isMesh) {
                  map: child.material.map,
                    // Modify child.material here to improve appearance
                    (child.material.metalness = 0.0),
                    (child.material.roughness = 0.2),
                    // Cast shadow
                    (child.castShadow = true);
        
                  // console.log("tank Material:", child.material);
                }
              });

              // Add the model to the scene
              scene.add(howitzer);
              howitzer.link = "/final-project/Info_painting/DaiBac.html";
              howitzer.title = "Hệ thống pháo lựu 2A65 MTSA 152 mm";
              howitzer.BoundingBox = new THREE.Box3().setFromObject(howitzer);
              // const boxHelper = new THREE.BoxHelper(howitzer, 0xffff00); // Màu vàng
              // scene.add(boxHelper); // Thêm BoxHelper vào cảnh
          
              // // Lưu trữ BoxHelper trong đối tượng để có thể cập nhật sau này nếu cần
              // howitzer.BoxHelper = boxHelper;
              resolve(howitzer);
          },
          undefined,
          function (error) {
              console.error('Error loading GLTF model', error);
              reject(error);
          }
      );
  });
};