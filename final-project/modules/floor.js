import * as THREE from "three";
//import floortTexture from "../public/PavingStones126B_4K-JPG/PavingStones126B_4K-JPG_Color.jpg";

export const setupFloor = (scene) => {
  const textureLoader = new THREE.TextureLoader();

  // Load the textures
  const colorTexture = textureLoader.load(
    "PavingStones126B_4K-JPG/PavingStones126B_4K-JPG_Color.jpg"
  );
  const displacementTexture = textureLoader.load(
    "PavingStones126B_4K-JPG/PavingStones126B_4K-JPG_Displacement.jpg"
  );
  const normalTexture = textureLoader.load(
    "PavingStones126B_4K-JPG/PavingStones126B_4K-JPG_NormalGL.jpg"
  );
  const roughnessTexture = textureLoader.load(
    "PavingStones126B_4K-JPG/PavingStones126B_4K-JPG_Roughness.jpg"
  );
  const aoTexture = textureLoader.load(
    "PavingStones126B_4K-JPG/PavingStones126B_4K-JPG_AmbientOcclusion.jpg"
  );

  // Set texture parameters
  colorTexture.wrapS = colorTexture.wrapT = THREE.RepeatWrapping;
  displacementTexture.wrapS = displacementTexture.wrapT = THREE.RepeatWrapping;
  normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;
  aoTexture.wrapS = aoTexture.wrapT = THREE.RepeatWrapping;

  const planeGeometry = new THREE.PlaneGeometry(70.1, 90.1);
  const planeMaterial = new THREE.MeshStandardMaterial({
    map: colorTexture,
    displacementMap: displacementTexture,
    normalMap: normalTexture,
    roughnessMap: roughnessTexture,
    aoMap: aoTexture,
    displacementScale: 0.1,
    side: THREE.DoubleSide,
  });
  // planeMaterial.receiveShadow = true
  const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial);
  floorPlane.receiveShadow = true;
  floorPlane.rotation.x = Math.PI / 2;
  // floorPlane.position.y = -Math.PI;

  scene.add(floorPlane);
};
