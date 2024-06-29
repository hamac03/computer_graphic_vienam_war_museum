// BacHo.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { GUI } from "lil-gui";

export const loadBacHoModel = (scene) => {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      "../public/models/bac_ho/scene.gltf",
      (gltf) => {
        const BacHo = gltf.scene;

        // Position the BacHo at the center of the floor
        BacHo.position.set(0.45, 5.2, -32);

        // Scale if necessary
        BacHo.scale.set(0.15, 0.15, 0.15);

        // Iterate through all the meshes in the BacHo and update their materials
        BacHo.traverse((child) => {
          if (child.isMesh) {
            // Modify child.material here to improve appearance
            child.material.metalness = 0.2;
            child.material.roughness = 0.2;
            // Cast shadow
            child.castShadow = true;

            // console.log("BacHo Material:", child.material);
          }
        });

        // Add the BacHo to the scene
        BacHo.link = "/final-project/Info_painting/Pedestal_BacHo.html";
        scene.add(BacHo);

        // Add bounding box
        BacHo.BoundingBox = new THREE.Box3().setFromObject(BacHo);
        resolve(BacHo);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model.", error);
        reject(error);
      }
    );
  });
};