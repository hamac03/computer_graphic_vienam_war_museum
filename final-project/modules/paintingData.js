const imageLinks = [
  '/Vietnam/co_dang.jpg',
  '/Vietnam/quocki.png',
  '/Vietnam/bando_vietnam.jpeg',
  'public/artworks/30-4.jpg', // 30_4
  'public/artworks/GiaiphongThuDo.jpg',
  // Battle of Saigon
  'public/artworks/buddhist.jpg',
  // Buddhist
  'public/artworks/dienbienphu.JPG',
  // Dien Bien Phu
  'public/artworks/geneva.jpeg',
  // Geneva
  'public/artworks/leminhtruong.jpeg',
  // Le Minh Truong
  'public/artworks/paris.jpg',
  // Paris
  'public/artworks/soviet.jpg',
  // Soviet
  'public/artworks/sudungcam.jpg',
  // brave
  'public/artworks/vietnam_liberal_flag.jpg',
  // flag
  'public/artworks/diplomatic_relations.jpg',
  'public/artworks/asean.jpg',
  'public/artworks/Battle_Of_LongTan.png',
  'public/artworks/polpot.JPG',
  'public/artworks/TetMauThan.jpg',
  'public/artworks/ApBia.jpg'
];

const links = [
  '/final-project/Info_painting/CoDang.html',
  '/final-project/Info_painting/QuocKi.html',
  '/final-project/Info_painting/VietNam.html',
  '/final-project/Info_painting/30_4.html',
  '/final-project/Info_painting/GiaiphongThuDo.html',
  '/final-project/Info_painting/BUDDHIST MONK COMMITS SUICIDE BY SELF-IMMOLATION.html',
  '/final-project/Info_painting/Dien Bien Phu victory.html',
  '/final-project/Info_painting/Geneva Agreement_1.html',
  '/final-project/Info_painting/Lê Minh Trường on the Hồ Chí Minh Trail in the Trường Sơn Mountains copy.html',
  '/final-project/Info_painting/Paris.html',
  '/final-project/Info_painting/Vietnam and the Soviet Union Sign a Treaty of Friendship copy.html',
  '/final-project/Info_painting/Sự dũng cảm của các người lính Việt Nam copy 2.html',
  '/final-project/Info_painting/THE NATIONAL LIBERATION FRONT IS FORMED copy 2.html',
  '/final-project/Info_painting/diplomatic_relation.html',
  '/final-project/Info_painting/Asean.html',
  '/final-project/Info_painting/LongTan_Battle.html',
  '/final-project/Info_painting/polpot.html',
  '/final-project/Info_painting/TetMauThan.html',
  '/final-project/Info_painting/ApBia.html'
];
const titles = [
  'Lá cờ Đảng',
  'Quốc kì Việt Nam',
  'Bản đồ Việt Nam',
  'Ngày giải phóng miền Nam',
  'Ngày giải phóng thủ đô',
  'Ngọn lửa Thích Quảng Đức',
  'Chiến thắng Điện Biên Phủ',
  'Hiệp định Geneva',
  'Đường mòn Hồ Chí Minh trên dãy Trường Sơn',
  'Hiệp định Paris',
  'Hiệp ước hữu nghị giữa Việt Nam và Liên Xô',
  'Sự dũng cảm của những người lính Việt Nam',
  'Mặt trận giải phóng dân tộc Việt Nam',
  'Thiết lập quan hệ ngoại giao Việt - Mỹ',
  'Việt Nam gia nhập ASEAN',
  'Trận chiến Long Tân',
  'Lật đổ chế độ diệt chủng Polpot',
  'Sự kiện Tết Mậu Thân',
  'Trận đánh đồi A Bia'

]


export const paintingData = [
  // Front Wall
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: imageLinks[0],
    width: 5 * 2,
    height: 3 * 2,
    position: { x: -20, y: 7, z: -44.5 },
    rotationY: 0,
    info: {
      title:titles[0] ,
      link: links[0],
    },
  })),

  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: imageLinks[1],
    width: 5 * 2,
    height: 3 * 2,
    position: { x: 20, y: 7, z: -44.5 },
    rotationY: 0,
    info: {
      title: titles[1],
      link: links[1],
    },
  })),

  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: imageLinks[2],
    width: 8 * 1.2,
    height: 10 * 1.2,
    position: { x: 0, y: 6, z: -44.5 },
    rotationY: 0,
    info: {
      title: titles[2],
      link: links[2],
    },
  })),

  // Back Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: imageLinks[i + 3],
    width: 5 * 1.5,
    height: 3 * 1.5,
    position: { x: -15 + 13 * i, y: 6, z: 44.5 },
    rotationY: Math.PI,
    info: {
      title: titles[i+3],
      link: links[i + 3],
    },
  })),

  // Left Wall
  ...Array.from({ length: 6 }, (_, i) => ({
    imgSrc: imageLinks[i + 7],
    width: 5 * 1.5,
    height: 3 * 1.5,
    position: { x: -34.5, y: 6, z: -30 + 13 * i },
    rotationY: Math.PI / 2,
    info: {
      title: titles[i+7],
      link: links[i + 7],
    },
  })),

  // Right Wall
  ...Array.from({ length: 6 }, (_, i) => ({
    imgSrc: imageLinks[i + 13],
    width: 5 * 1.5,
    height: 3 * 1.5,
    position: { x: 34.5, y: 6, z: -30 + 13 * i },
    rotationY: -Math.PI / 2,
    info: {
      title:titles[i+13],
      link: links[i + 13],
    },
  })),
];

console.log(paintingData);