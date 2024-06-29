import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { GUI } from "lil-gui";

export const loadWallLampModel = (scene) => {
  const loader = new GLTFLoader();
  // const gui = new GUI();

  loader.load("models/wall-lamp/scene.gltf", (gltf) => {
    const frontlamp1 = gltf.scene.clone();
    frontlamp1.position.set(10, 11, -45);
    frontlamp1.scale.set(0.04, 0.04, 0.04);
    scene.add(frontlamp1);

    const frontlamp2 = gltf.scene.clone();
    frontlamp2.position.set(-10, 11, -45);
    frontlamp2.scale.set(0.04, 0.04, 0.04);
    scene.add(frontlamp2);


    const leftlamp = gltf.scene.clone();
    leftlamp.position.set(-35, 11, 0);
    leftlamp.rotation.y = Math.PI / 2;
    leftlamp.scale.set(0.04, 0.04, 0.04);
    scene.add(leftlamp);

    const rightlamp = gltf.scene.clone();
    rightlamp.position.set(35, 11, 0);
    rightlamp.rotation.y = -Math.PI / 2;
    rightlamp.scale.set(0.04, 0.04, 0.04);
    scene.add(rightlamp);

    const backlamp = gltf.scene.clone();
    backlamp.position.set(0, 11, 45);
    backlamp.rotation.y = -Math.PI;
    backlamp.scale.set(0.04, 0.04, 0.04);
    scene.add(backlamp);
  });
};
