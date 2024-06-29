function adjustInfoWidth() {
  const paintingInfo = document.getElementById('painting-info');
  paintingInfo.style.width = `${200}px`; 
  paintingInfo.style.height = `${100}px`;
}

// Display painting info in the DOM
export const displayPaintingInfo = (info) => {
  const paintingInfo = document.getElementById('painting-info');
  const h3 = paintingInfo.querySelector('h3');
  const p = paintingInfo.querySelector('p');

  // Cập nhật nội dung của painting-info
  h3.textContent = info.title;


  adjustInfoWidth();

  // Hiển thị painting-info
  paintingInfo.classList.add('show');
};

// Hide painting info in the DOM
export const hidePaintingInfo = () => {
  const infoElement = document.getElementById('painting-info'); // Get the reference
  infoElement.classList.remove('show'); // Remove the 'show' class
};

