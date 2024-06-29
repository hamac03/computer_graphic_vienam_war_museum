import * as THREE from "three";

// create a function that takes a scene and a textureLoader as arguments that will be passed in from main.js where the createCeiling is called
export const createCeiling = (scene, textureLoader) => {
  // Load the textures
  const colorTexture = textureLoader.load(
    "OfficeCeiling001_4K-JPG/OfficeCeiling001_4K-JPG_Color.jpg"
  );
  const displacementTexture = textureLoader.load(
    "OfficeCeiling001_4K-JPG/OfficeCeiling001_4K-JPG_Displacement.jpg"
  );
  const aoTexture = textureLoader.load(
    "OfficeCeiling001_4K-JPG/OfficeCeiling001_4K-JPG_AmbientOcclusion.jpg"
  );
  const emissionTexture = textureLoader.load(
    "OfficeCeiling001_4K-JPG/OfficeCeiling001_4K-JPG_Emission.jpg"
  );
  const metalnessTexture = textureLoader.load(
    "OfficeCeiling001_4K-JPG/OfficeCeiling001_4K-JPG_Metalness.jpg"
  );
  const normalGLTexture = textureLoader.load(
    "OfficeCeiling001_4K-JPG/OfficeCeiling001_4K-JPG_NormalGL.jpg"
  );
  const roughnessTexture = textureLoader.load(
    "OfficeCeiling001_4K-JPG/OfficeCeiling001_4K-JPG_Roughness.jpg"
  );

  // Set texture parameters
  colorTexture.wrapS = colorTexture.wrapT = THREE.RepeatWrapping;
  displacementTexture.wrapS = displacementTexture.wrapT = THREE.RepeatWrapping;
  aoTexture.wrapS = aoTexture.wrapT = THREE.RepeatWrapping;
  emissionTexture.wrapS = emissionTexture.wrapT = THREE.RepeatWrapping;
  metalnessTexture.wrapS = metalnessTexture.wrapT = THREE.RepeatWrapping;
  normalGLTexture.wrapS = normalGLTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;

  const ceilingGeometry = new THREE.PlaneGeometry(70, 90);
  const ceilingMaterial = new THREE.MeshLambertMaterial({
    map: colorTexture,
    displacementMap: displacementTexture,
    aoMap: aoTexture,
    emissiveMap: emissionTexture,
    metalnessMap: metalnessTexture,
    normalMap: normalGLTexture,
    normalMapType: THREE.NormalMap,
    roughnessMap: roughnessTexture,
    displacementScale: 0.01,
    side: THREE.DoubleSide,
  });
  const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);

  ceilingPlane.rotation.x = Math.PI / 2;

  ceilingPlane.position.y = 17;

  scene.add(ceilingPlane);
};