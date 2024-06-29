import * as THREE from "three";

export const setupAudio = (camera) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const audioLoader = new THREE.AudioLoader();
      audioLoader.load('/public/sounds/quocca.mp3', (buffer) => {
        const listener = new THREE.AudioListener();
        camera.add(listener);
        const sound = new THREE.Audio(listener).setBuffer(buffer);
        
        sound.setLoop(true);
        sound.setVolume(0.1);
        sound.play();
        
        resolve(sound); // Resolve Promise khi âm thanh đã được tải và phát
      }, undefined, (error) => {
        reject(error);
      });
    }, 5000); // Đợi 5 giây (5000 miligiây) trước khi thực hiện hàm
  });
};