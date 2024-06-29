// tank.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { GUI } from "lil-gui";

export const loadTankModel_new = (scene) => {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
  
        // Load GLTF model
        loader.load(
            "../public/models/tank/scene.gltf",
            function (gltf) {
                const tank = gltf.scene;
  
                tank.position.set(19, 2.9, 26);

                // Scale if necessary
                tank.scale.set(3, 3, 3);
  
                // Rotate if necessary
                // tank.rotation.y = - Math.PI/6 - Math.PI;
                tank.rotation.y = -Math.PI/18 + Math.PI;
  
                tank.traverse((child) => {
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
                scene.add(tank);
  
                // Optionally, you can perform any additional manipulation or processing here
                tank.BoundingBox = new THREE.Box3().setFromObject(tank);
                const boxHelper = new THREE.BoxHelper(tank, 0xffff00); // Màu vàng
                scene.add(boxHelper); // Thêm BoxHelper vào cảnh
            
                // Lưu trữ BoxHelper trong đối tượng để có thể cập nhật sau này nếu cần
                tank.BoxHelper = boxHelper;
                // Resolve the promise with tank and its position
                resolve(tank);
            },
            undefined,
            function (error) {
                console.error('Error loading GLTF model', error);
                reject(error);
            }
        );
    });
  };