// barrier.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { GUI } from "lil-gui";

export const loadbarrierModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../public/models/barrier/scene.gltf",
    (gltf) => {
      const barrier = gltf.scene;

      // Position the barrier at the center of the floor
      barrier.position.set(19.9, 0, 2.3);

      // Scale if necessary
      barrier.scale.set(5, 5, 5);
    //   barrier.rotation.y = Math.PI/6 + Math.PI;
      // Iterate through all the meshes in the barrier and update their materials
      barrier.traverse((child) => {
        if (child.isMesh) {
          map: child.material.map,
            // Modify child.material here to improve appearance
            (child.material.metalness = 0.0),
            (child.material.roughness = 0.2),
            // Cast shadow
            (child.castShadow = true);

          // console.log("barrier Material:", child.material);
        }
      });

      // Add the barrier to the scene
      scene.add(barrier);
   

      const barrierClone1 = barrier.clone();
      barrierClone1.position.set(11.4, 0, 2.3); // Set position for the first clone
      scene.add(barrierClone1);
  
      // Create the second clone of the barrier
      const barrierClone2 = barrier.clone();
      barrierClone2.rotation.y = Math.PI/2;
      barrierClone2.position.set(8.2, 0, 6.9); // Set position for the second clone
      scene.add(barrierClone2);
  
      const barrierClone3 = barrier.clone();
      barrierClone3.rotation.y = Math.PI / 2;
      barrierClone3.position.set(8.2, 0, 14.5); // Set position for the third clone
      scene.add(barrierClone3);
  
      // Create the fourth clone of the barrier
      const barrierClone4 = barrier.clone();
      barrierClone4.rotation.y = Math.PI/2;
      barrierClone4.position.set(8.2, 0, 22.1); // Set position for the fourth clone
      scene.add(barrierClone4);
  
      // Create the fifth clone of the barrier
      const barrierClone5 = barrier.clone();
      barrierClone5.rotation.y = Math.PI/2;
      barrierClone5.position.set(8.2, 0, 29.7); // Set position for the fifth clone
      scene.add(barrierClone5);


      const barrierClone6 = barrier.clone();
      barrierClone6.rotation.y = Math.PI / 2;
      barrierClone6.position.set(22.7, 0, 6.9); // Set position for the sixth clone
      scene.add(barrierClone6);
  
      // Create the seventh clone of the barrier
      const barrierClone7 = barrier.clone();
      barrierClone7.rotation.y = Math.PI / 2;
      barrierClone7.position.set(22.7, 0, 14.5); // Set position for the seventh clone
      scene.add(barrierClone7);
  
      // Create the eighth clone of the barrier
      const barrierClone8 = barrier.clone();
      barrierClone8.rotation.y = Math.PI / 2;
      barrierClone8.position.set(22.7, 0, 22.1); // Set position for the eighth clone
      scene.add(barrierClone8);

  
      // Create the ninth clone of the barrier
      const barrierClone9 = barrier.clone();
      barrierClone9.rotation.y = Math.PI / 2;
      barrierClone9.position.set(22.7, 0, 29.7); // Set position for the ninth clone
      scene.add(barrierClone9);
  
      // Create the tenth clone of the barrier
      const barrierClone10 = barrier.clone(); 
      barrierClone10.position.set(19.9, 0, 34.3); // Set position for the tenth clone
      scene.add(barrierClone10);
  
      // Create the eleventh clone of the barrier
      const barrierClone11 = barrier.clone();
      barrierClone11.position.set(11.4, 0, 34.3); // Set position for the eleventh clone
      scene.add(barrierClone11);
  
      // Create the twelfth clone of the barrier
      const barrierClone12 = barrier.clone();
      barrierClone12.rotation.y = Math.PI;
      barrierClone12.position.set(-16.2, 0, 36.1); // Set position for the twelfth clone
      scene.add(barrierClone12);


      const barrierClone13 = barrier.clone();
      barrierClone13.rotation.y = Math.PI/2;
      barrierClone13.position.set(-11.8, 0, 31.4); // Set position for the thirteenth clone
      scene.add(barrierClone13);

      // Create the fourteenth clone of the barrier
      const barrierClone14 = barrier.clone();
      barrierClone14.rotation.y = Math.PI/2;
      barrierClone14.position.set(-11.8, 0, 22.1); // Set position for the fourteenth clone
      scene.add(barrierClone14);


      // Create the fifteenth clone of the barrier
      const barrierClone15 = barrier.clone();
      barrierClone15.rotation.y = Math.PI/2;
      barrierClone15.position.set(-11.8, 0, 13.2); // Set position for the fifteenth clone
      scene.add(barrierClone15);


      // Create the sixteenth clone of the barrier
      const barrierClone16 = barrier.clone();
      barrierClone16.rotation.y = Math.PI/2;
      barrierClone16.position.set(-11.8, 0, 5); // Set position for the sixteenth clone
      scene.add(barrierClone16);

      // Create the seventeenth clone of the barrier
      const barrierClone17 = barrier.clone();
      barrierClone17.rotation.y = Math.PI/2;
      barrierClone17.position.set(-20.6, 0, 31.4); // Set position for the seventeenth clone
      scene.add(barrierClone17);


      // Create the eighteenth clone of the barrier
      const barrierClone18 = barrier.clone();
      barrierClone18.rotation.y = Math.PI/2;
      barrierClone18.position.set(-20.6, 0, 22.1); // Set position for the eighteenth clone
      scene.add(barrierClone18);

      // Create the nineteenth clone of the barrier
      const barrierClone19 = barrier.clone();
      barrierClone19.rotation.y = Math.PI/2;
      barrierClone19.position.set(-20.6, 0, 13.5); // Set position for the nineteenth clone
      scene.add(barrierClone19);


      // Create the twentieth clone of the barrier
      const barrierClone20 = barrier.clone();
      barrierClone20.rotation.y = Math.PI/2;
      barrierClone20.position.set(-20.6, 0, 5);
      scene.add(barrierClone20);

      // Create the twenty-first clone of the barrier
      const barrierClone21 = barrier.clone();
      barrierClone21.rotation.y = Math.PI;
      barrierClone21.position.set(-16.2, 0, 1); // Set position for the twenty-first clone
      scene.add(barrierClone21);

    },
    undefined,
    (error) => {
      console.error("An error occurred while loading the model.", error);
    }
  );
};