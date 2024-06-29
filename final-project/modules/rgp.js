// rpg.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { GUI } from "lil-gui";

export const loadRpgModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../public/models/rpg/scene.gltf",
    (gltf) => {
      const rpg = gltf.scene;
      rpg.position.set(0, 4.8, -12);
      rpg.scale.set(5, 5, 5);
      rpg.traverse((child) => {
        if (child.isMesh) {
          map: child.material.map,
            // Modify child.material here to improve appearance
            (child.material.metalness = 0.1),
            (child.material.roughness = 0.2),
            // Cast shadow
            (child.castShadow = true);

          // console.log("rpg Material:", child.material);
        }
      });

      // Add the rpg to the scene
      rpg.title = 'Súng phóng lựu RPG-7'
      scene.add(rpg);

      animate(rpg);
    },
    undefined,
    (error) => {
      console.error("An error occurred while loading the model.", error);
    }
  );
};


function animate(model) {
  // Yêu cầu một khung hình tiếp theo
  requestAnimationFrame(() => animate(model));
  model.rotation.y += 0.01;
}