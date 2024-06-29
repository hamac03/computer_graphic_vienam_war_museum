
import * as THREE from "three";
export const setupAudio = (camera) => {
  return new Promise((resolve, reject) => {
      const audioLoader = new THREE.AudioLoader();
      audioLoader.load('/public/sounds/quocca.mp3', (buffer) => {
          const listener = new THREE.AudioListener();
          camera.add(listener);
          const sound = new THREE.Audio(listener).setBuffer(buffer);
          
          sound.setLoop(true); // Đặt nguồn âm thanh lặp lại
          sound.setVolume(0.1); // Đặt âm lượng cho nguồn âm thanh
          sound.play(); // Phát âm thanh
          
          resolve(sound); // Resolve Promise khi âm thanh đã được tải và phát
      }, undefined, (error) => {
          reject(error);
      });
  });
};
