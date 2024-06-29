// cylinder.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { GUI } from "lil-gui";


// // Tạo hàm animate để xoay hình trụ và nửa hình cầu
// function animate(cylinder, glassSphere) {
//     // Yêu cầu một khung hình tiếp theo
//     requestAnimationFrame(() => animate(cylinder, glassSphere));


//     // Thiết lập góc xoay cho hình trụ và nửa hình cầu
//     cylinder.rotation.y += 0.01;
//     glassSphere.rotation.y += 0.01;
// }

// export const loadCylinder = (scene) => {
//     const textureLoader = new THREE.TextureLoader();

//     // Tải normal map và roughness map
//     const normalTexture = textureLoader.load("leather_white_4k.gltf/textures/leather_white_nor_gl_4k.jpg");
//     const roughnessTexture = textureLoader.load("leather_white_4k.gltf/textures/leather_white_rough_4k.jpg");

//     // Cài đặt thuộc tính wrap cho textures
//     normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
//     roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;

//     // Tạo vật liệu cho hình trụ với texture maps
//     const cylinderMaterial = new THREE.MeshStandardMaterial({
//         color: 0xadadae,
//         normalMap: normalTexture,
//         roughnessMap: roughnessTexture,
//         side: THREE.DoubleSide,
//     });

//     // Tạo hình trụ
//     const cylinderGeometry = new THREE.CylinderGeometry(8, 2, 8, 32);
//     const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
//     cylinder.position.set(0, 0, -10);
//     scene.add(cylinder);

//     // Tạo nửa hình cầu
//     const sphereGeometry = new THREE.SphereGeometry(8, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
//     const glassMaterial = new THREE.MeshStandardMaterial({
//         color: 0xffffff,
//         opacity: 0.7,
//         transparent: true,
//         roughness: 0.2,
//         metalness: 0.3,
//     });
//     const glassSphere = new THREE.Mesh(sphereGeometry, glassMaterial);
//     glassSphere.position.set(0, 4, -10);
//     scene.add(glassSphere);

//     // Gọi hàm animate để bắt đầu hiệu ứng xoay
//     animate(cylinder, glassSphere);
// };


// Tạo hàm animate để xoay hình trụ và nửa hình cầu
// function animate(cylinder, glassSphere) {
//     // Yêu cầu một khung hình tiếp theo
//     requestAnimationFrame(() => animate(cylinder, glassSphere));

//     // Thiết lập góc xoay cho hình trụ và nửa hình cầu
//     cylinder.rotation.y += 0.01;
//     glassSphere.rotation.y += 0.01;

//     // Cập nhật BoxHelper nếu cần thiết
//     // cylinder.BoxHelper.update();
//     // glassSphere.BoxHelper.update();
// }

// export const loadCylinder = (scene) => {
//     return new Promise((resolve, reject) => {
//         const textureLoader = new THREE.TextureLoader();

//         // Tải normal map và roughness map
//         const normalTexture = textureLoader.load("leather_white_4k.gltf/textures/leather_white_nor_gl_4k.jpg");
//         const roughnessTexture = textureLoader.load("leather_white_4k.gltf/textures/leather_white_rough_4k.jpg");

//         // Cài đặt thuộc tính wrap cho textures
//         normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
//         roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;

//         // Tạo vật liệu cho hình trụ với texture maps
//         const cylinderMaterial = new THREE.MeshStandardMaterial({
//             color: 0xadadae,
//             normalMap: normalTexture,
//             roughnessMap: roughnessTexture,
//             side: THREE.DoubleSide,
//         });

//         // Tạo hình trụ
//         const cylinderGeometry = new THREE.CylinderGeometry(8, 2, 8, 32);
//         const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
//         cylinder.position.set(0, 0, -10);
//         scene.add(cylinder);

//         // Tạo nửa hình cầu
//         const sphereGeometry = new THREE.SphereGeometry(8, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
//         const glassMaterial = new THREE.MeshStandardMaterial({
//             color: 0xffffff,
//             opacity: 0.7,
//             transparent: true,
//             roughness: 0.2,
//             metalness: 0.3,
//         });
//         const glassSphere = new THREE.Mesh(sphereGeometry, glassMaterial);
//         glassSphere.position.set(0, 4, -10);
//         scene.add(glassSphere);

//         // Add bounding box for cylinder
//         cylinder.BoundingBox = new THREE.Box3().setFromObject(cylinder);
//         const cylinderBoxHelper = new THREE.BoxHelper(cylinder, 0xffff00); // Yellow color
//         scene.add(cylinderBoxHelper);
//         cylinder.BoxHelper = cylinderBoxHelper;

//         // Add bounding box for glass sphere
//         glassSphere.BoundingBox = new THREE.Box3().setFromObject(glassSphere);
//         const sphereBoxHelper = new THREE.BoxHelper(glassSphere, 0xffff00); // Yellow color
//         scene.add(sphereBoxHelper);
//         glassSphere.BoxHelper = sphereBoxHelper;
//         resolve({ cylinder, glassSphere });
//         // Gọi hàm animate để bắt đầu hiệu ứng xoay
//         // animate(cylinder, glassSphere);

//         // Resolve the promise with both objects
//         // resolve({ cylinder, glassSphere });
//     });
// };


// const createBoundingBox = (object, color = 0xffff00) => {
//     object.BoundingBox = new THREE.Box3().setFromObject(object);
//     const boxHelper = new THREE.BoxHelper(object, color);
//     object.BoxHelper = boxHelper;
//     return boxHelper;
//   };
  
//   // Function to animate the cylinder and sphere
//   function animate(cylinder, sphere) {
//     requestAnimationFrame(() => animate(cylinder, sphere));
//     cylinder.rotation.y += 0.01;
//     sphere.rotation.y += 0.01;
//   }
  
  // Function to load the cylinder and sphere into the scene
//   export const loadCylinder = (scene) => {
//     return new Promise((resolve, reject) => {
//       const textureLoader = new THREE.TextureLoader();
  
//       // Load normal and roughness maps
//       const normalTexture = textureLoader.load("leather_white_4k.gltf/textures/leather_white_nor_gl_4k.jpg");
//       const roughnessTexture = textureLoader.load("leather_white_4k.gltf/textures/leather_white_rough_4k.jpg");
  
//       // Set texture wrapping
//       normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
//       roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;
  
//       // Create material for the cylinder
//       const cylinderMaterial = new THREE.MeshStandardMaterial({
//         color: 0xadadae,
//         normalMap: normalTexture,
//         roughnessMap: roughnessTexture,
//         side: THREE.DoubleSide,
//       });
  
//       // Create the cylinder
//       const cylinderGeometry = new THREE.CylinderGeometry(8, 2, 8, 32);
//       const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
//       cylinder.position.set(0, 0, -10);
//       scene.add(cylinder);
//       const cylinderBoxHelper = createBoundingBox(cylinder);
//       scene.add(cylinderBoxHelper);
  
//       // Create the glass sphere
//       const sphereGeometry = new THREE.SphereGeometry(8, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
//       const glassMaterial = new THREE.MeshStandardMaterial({
//         color: 0xffffff,
//         opacity: 0.7,
//         transparent: true,
//         roughness: 0.2,
//         metalness: 0.3,
//       });
//       const sphere = new THREE.Mesh(sphereGeometry, glassMaterial);
//       sphere.position.set(0, 4, -10);
//       scene.add(sphere);
//       const sphereBoxHelper = createBoundingBox(sphere);
//       scene.add(sphereBoxHelper);
  
//       // Start the animation
//       animate(cylinder, sphere);
  
//       // Resolve the promise with the created objects
//       resolve({ cylinder, sphere });
//     });
//   };

const createBoundingBox = (object, color = 0xffff00) => {
    object.BoundingBox = new THREE.Box3().setFromObject(object);
    const boxHelper = new THREE.BoxHelper(object, color);
    object.BoxHelper = boxHelper;
    return boxHelper;
  };
  
  // Function to animate the cylinder and sphere
  function animate(cylinder, sphere) {
    requestAnimationFrame(() => animate(cylinder, sphere));
    cylinder.rotation.y += 0.01;
    sphere.rotation.y += 0.01;
  }
  
  // Function to load the cylinder and sphere into the scene
  export const loadCylinder = (scene) => {
    return new Promise((resolve, reject) => {
      const textureLoader = new THREE.TextureLoader();
  
      // Load normal and roughness maps
      const normalTexture = textureLoader.load("leather_white_4k.gltf/textures/leather_white_nor_gl_4k.jpg");
      const roughnessTexture = textureLoader.load("leather_white_4k.gltf/textures/leather_white_rough_4k.jpg");
  
      // Set texture wrapping
      normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
      roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;
  
      // Create material for the cylinder
      const cylinderMaterial = new THREE.MeshStandardMaterial({
        color: 0xadadae,
        normalMap: normalTexture,
        roughnessMap: roughnessTexture,
        side: THREE.DoubleSide,
      });
  
      // Create the cylinder
      const cylinderGeometry = new THREE.CylinderGeometry(8, 2, 8, 32);
      const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      cylinder.position.set(0, 0, -12);
      cylinder.link = 'final-project/Info_painting/RPG.html'
      // Resolve the promise with the created objects
      cylinderMaterial.receiveShadow = true;
      cylinderMaterial.castShadow = true;
      


      scene.add(cylinder);
      const cylinderBoxHelper = createBoundingBox(cylinder);
      // scene.add(cylinderBoxHelper);
  
      // Create the glass sphere
      const sphereGeometry = new THREE.SphereGeometry(8, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
      const glassMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        opacity: 0.7,
        transparent: true,
        roughness: 0.2,
        metalness: 0.3,
      });
      const sphere = new THREE.Mesh(sphereGeometry, glassMaterial);
      sphere.position.set(0, 4, -12);
      sphere.title = 'Súng phóng lựu RPG-7'
      sphere.link = 'final-project/Info_painting/RPG.html'
                  // Vật liệu cho nửa hình cầu
      glassMaterial.receiveShadow = true;
      glassMaterial.castShadow = true;
      scene.add(sphere);
      const sphereBoxHelper = createBoundingBox(sphere);
      // scene.add(sphereBoxHelper);
  
      // Start the animation
      animate(cylinder, sphere);
  



      resolve({ cylinder, sphere });
    });
  };