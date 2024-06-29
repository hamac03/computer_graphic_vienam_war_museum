import * as THREE from "three";
import { scene, setupScene } from "./modules/scene.js";
import { createPaintings } from "./modules/paintings.js";
import { createWalls } from "./modules/walls.js";
import { setupLighting } from "./modules/lighting.js";
import { setupFloor } from "./modules/floor.js";
import { createCeiling } from "./modules/ceiling.js";
import { createBoundingBoxes } from "./modules/boundingBox.js";
import { setupRendering } from "./modules/rendering.js";
import { setupEventListeners } from "./modules/eventListeners.js";
import { addObjectsToScene } from "./modules/sceneHelpers.js";
import { setupPlayButton } from "./modules/menu.js";
import { setupAudio } from "./modules/audioGuide.js";
import { clickHandling } from "./modules/clickHandling.js";
import { loadPedestalModel } from "./modules/pedestal_.js";
import { loadFrameModel } from "./modules/frame.js";
import { loadCeilingLampModel } from "./modules/ceilingLamp.js";
import { loadWallLampModel } from "./modules/wallLamps.js";
import { loadBacHoModel } from "./modules/bacho.js";
import { loadHowitzerModel } from "./modules/howitzer.js";
import { loadCylinder } from "./modules/cylinder.js";
import { loadRpgModel } from "./modules/rgp.js";
import { loadTankModel } from "./modules/tank.js";
import { loadbarrierModel } from "./modules/barrier.js";

let { camera, controls, renderer } = setupScene();

// Khởi tạo texture loader
const textureLoader = new THREE.TextureLoader();

// Tạo các thành phần cơ bản của scene
const walls = createWalls(scene, textureLoader);
const floor = setupFloor(scene);
const ceiling = createCeiling(scene, textureLoader);
const paintings = createPaintings(scene, textureLoader);
const lighting = setupLighting(scene, paintings);

// Tạo bounding boxes cho các đối tượng
createBoundingBoxes(walls, scene);
createBoundingBoxes(paintings, scene);

// Thêm các đối tượng vào scene
addObjectsToScene(scene, paintings);

// Cài đặt các nút điều khiển
setupPlayButton(controls);
setupEventListeners(controls);

// Sử dụng Promise.all để tải tất cả các tài nguyên để có thể loadbounding box
Promise.all([
  setupAudio(camera), // Tải âm thanh
  loadTankModel(scene),
  loadHowitzerModel(scene),
  loadPedestalModel(scene),
  loadBacHoModel(scene),
  loadCylinder(scene),
  loadFrameModel(scene)
])
  .then(([sound, tank, howitzer, pedestal, BacHo, {cylinder, sphere}, FrameGroup]) => {
    // Bắt đầu rendering sau khi tất cả các tài nguyên đã tải xong
    setupRendering(scene, camera, renderer, paintings, controls, walls, tank, howitzer, pedestal, BacHo, cylinder, sphere, FrameGroup);
    clickHandling(renderer, camera, paintings, tank, howitzer, pedestal, BacHo, cylinder, sphere);
  })
  .catch((error) => {
    console.error("Error loading models or audio:", error);
  });

// Tải các mô hình không yêu cầu trong Promise.all
loadCeilingLampModel(scene);
loadWallLampModel(scene);
loadbarrierModel(scene);
loadRpgModel(scene);