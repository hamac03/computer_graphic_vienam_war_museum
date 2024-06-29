// frame.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { GUI } from "lil-gui";

 
export const loadFrameModel = (scene) => {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    // Create a group to hold all frames and name it "BackFrame"
    const backFrameGroup = new THREE.Group()
    const leftFrameGroup = new THREE.Group();
    const rightFrameGroup = new THREE.Group();

    const loadAndCloneFrame = (scene, clone, WallGroup, position, rotation) => {
      clone.position.set(position.x, position.y, position.z);
      if (rotation !== undefined) {
        clone.rotation.set(rotation.x, rotation.y, rotation.z);
      }
      WallGroup.add(clone);
      clone.BoundingBox = new THREE.Box3().setFromObject(clone);
      //scene.add(new THREE.BoxHelper(clone, 0xffff00));
    };


    loader.load(
      "models/frame/scene.gltf",
      (gltf) => {
        const frame = gltf.scene;
        frame.position.set(-10, -2.8, 44.4);
        frame.traverse((child) => {
          if (child.isMesh) {
            map: child.material.map,
              (child.material.metalness = 0.2),
              (child.material.roughness = 0.2),
              (child.castShadow = true);

        }
      });
        // Calculate scaling factors based on dimensions
        frame.BoundingBox = new THREE.Box3().setFromObject(frame);
        const boundingBox = new THREE.Box3().copy(frame.BoundingBox);
        const frameWidth = boundingBox.max.x - boundingBox.min.x;
        const frameHeight = boundingBox.max.y - boundingBox.min.y;
        const scalewidth = (5 * 1.5 + 1) / frameWidth + 10;
        const scaleheight = (3 * 1.5) / frameHeight + 10;

        frame.scale.set(scalewidth, scaleheight, scaleheight);
        frame.rotation.set(0, Math.PI, 0);
      
        // Add the frame to the group
        backFrameGroup.add(frame);

        // Calculate and display bounding box for the original frame
        frame.BoundingBox = new THREE.Box3().setFromObject(frame);
        const frameBoxHelper = new THREE.BoxHelper(frame, 0xff0000);
        //scene.add(frameBoxHelper);

        const frameBack1 = frame.clone();
        loadAndCloneFrame(scene, frameBack1, backFrameGroup, new THREE.Vector3(2.9, -2.8, 44.4));
        const frameBack2 = frame.clone();
        loadAndCloneFrame(scene, frameBack2, backFrameGroup, new THREE.Vector3(16, -2.8, 44.4));
        const frameBack3 = frame.clone();
        loadAndCloneFrame(scene, frameBack3, backFrameGroup, new THREE.Vector3(29, -2.8, 44.4));


        const frameLeft1 = frame.clone();
        loadAndCloneFrame(scene,frameLeft1, leftFrameGroup, new THREE.Vector3(-34.5, -2.8, 40), new THREE.Vector3(0, Math.PI/2, 0))

        const frameLeft2 = frame.clone();
        loadAndCloneFrame(scene,frameLeft2, leftFrameGroup, new THREE.Vector3(-34.5, -2.8, 27), new THREE.Vector3(0, Math.PI/2, 0));
        
        const frameLeft3 = frame.clone();
        loadAndCloneFrame(scene,frameLeft3, leftFrameGroup, new THREE.Vector3(-34.5, -2.8, 14), new THREE.Vector3(0, Math.PI/2, 0));

        const frameLeft4 = frame.clone();
        loadAndCloneFrame(scene,frameLeft4, leftFrameGroup, new THREE.Vector3(-34.5, -2.8, 1), new THREE.Vector3(0, Math.PI/2, 0));

        const frameLeft5 = frame.clone();
        loadAndCloneFrame(scene,frameLeft5, leftFrameGroup, new THREE.Vector3(-34.5, -2.8, -12), new THREE.Vector3(0, Math.PI/2, 0));

        const frameLeft6 = frame.clone();
        loadAndCloneFrame(scene,frameLeft6, leftFrameGroup, new THREE.Vector3(-34.5, -2.8, -25), new THREE.Vector3(0, Math.PI/2, 0));



        const frameRight1 = frame.clone();
        loadAndCloneFrame(scene, frameRight1, rightFrameGroup, new THREE.Vector3(34.5, -2.8, -35), new THREE.Vector3(0, -Math.PI/2, 0));

        const frameRight2 = frame.clone();
        loadAndCloneFrame(scene, frameRight2, rightFrameGroup, new THREE.Vector3(34.5, -2.8, -22), new THREE.Vector3(0, -Math.PI/2, 0));

        const frameRight3 = frame.clone();
        loadAndCloneFrame(scene, frameRight3, rightFrameGroup, new THREE.Vector3(34.5, -2.8, -9), new THREE.Vector3(0, -Math.PI/2, 0));

        const frameRight4 = frame.clone();
        loadAndCloneFrame(scene, frameRight4, rightFrameGroup, new THREE.Vector3(34.5, -2.8, 4), new THREE.Vector3(0, -Math.PI/2, 0));

        const frameRight5 = frame.clone();
        loadAndCloneFrame(scene, frameRight5, rightFrameGroup, new THREE.Vector3(34.5, -2.8, 17), new THREE.Vector3(0, -Math.PI/2, 0));

        const frameRight6 = frame.clone();
        loadAndCloneFrame(scene, frameRight6, rightFrameGroup, new THREE.Vector3(34.5, -2.8, 30), new THREE.Vector3(0, -Math.PI/2, 0));

        // Add the group to the scene
        const FrameGroup = new THREE.Group()
        FrameGroup.add(backFrameGroup);
        FrameGroup.add(rightFrameGroup);
        FrameGroup.add(leftFrameGroup);
        scene.add(FrameGroup);
        resolve(FrameGroup);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model.", error);
        reject(error);
      }
    );
  });
};