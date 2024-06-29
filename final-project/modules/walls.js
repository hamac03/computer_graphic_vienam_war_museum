import * as THREE from "three";

export function createWalls(scene, textureLoader) {
  let wallGroup = new THREE.Group();
  scene.add(wallGroup);

  const normalTexture = textureLoader.load(
    "public/macro_flour_4k.blend/textures/macro_flour_nor_gl_4k.jpg"
  );
  const roughnessTexture = textureLoader.load(
    "public/macro_flour_4k.blend/textures/macro_flour_rough_4k.jpg"
  );
  normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;

  normalTexture.repeat.set(10000, 10000); // Repeat 4 times in both the X and Y directions
  roughnessTexture.repeat.set(10000, 10000); // Repeat 4 times in both the X and Y directions

  const wallMaterial = new THREE.MeshStandardMaterial({
    color: 0xadadae,
    // color: 0xffffff,
    normalMap: normalTexture,
    roughnessMap: roughnessTexture,
    side: THREE.DoubleSide,
  });
  // Front Wall
  const frontWall = new THREE.Mesh( 
    new THREE.BoxGeometry(70.1, 17.1, 0.1), 
    wallMaterial 
  );

  frontWall.position.z = -45; 
  frontWall.position.y = frontWall.geometry.parameters.height/2 - 0.01;

  // Left Wall
  const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry(90.1, 17.1, 0.1), 
    wallMaterial
  );

  leftWall.rotation.y = Math.PI / 2; 
  leftWall.position.x = -35; 
  leftWall.position.y = leftWall.geometry.parameters.height/2 - 0.01;


  // Right Wall
  const rightWall = new THREE.Mesh( 
    new THREE.BoxGeometry(90.1, 17, 0.1), 
    wallMaterial
  );

  rightWall.position.x = 35;
  rightWall.rotation.y = Math.PI / 2; 
  rightWall.position.y = rightWall.geometry.parameters.height/2 - 0.01;

  // Back Wall
  const backWall = new THREE.Mesh(
    new THREE.BoxGeometry(90.1, 17.1  , 0.1),
    wallMaterial 
  );
  backWall.position.z = 45;
  backWall.position.y = backWall.geometry.parameters.height/2 - 0.01;
  wallGroup.add(frontWall, backWall, leftWall, rightWall);

  return wallGroup;
}
