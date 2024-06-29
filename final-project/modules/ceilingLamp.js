import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { GUI } from "lil-gui";

export const loadCeilingLampModel = (scene) => {
  const loader = new GLTFLoader();
  // const gui = new GUI();

  loader.load("models/ceiling-lamp/scene.gltf", (gltf) => {
    const lamp = gltf.scene;

    // Position the lamp
    lamp.position.set(0, 11.3, 0);
    lamp.scale.set(8, 7, 8);

    // Add the lamp to the scene
    scene.add(lamp);

  });
};
