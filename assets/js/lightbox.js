// LIGHBOX

// Select all lightbox class elements
const lightboxElements = document.querySelectorAll('img.lightbox');

const lightbox = (e) => {
  extBtn = document.createElement('span');
  extBtn.classList.add('w3-xlarge', 'w3-white', 'w3-button', 'w3-display-topright');
  extBtn.textContent = '&times;';
  extBtn.addEventListener('click', modalGeneral);
  imgContainer = document.createElement('figure');
  imgContainer.classList.add('w3-display-middle', 'w-100',  'w3-content','animate__animated','animate__fadeIn');
    imgPicture = document.createElement('img');
    imgPicture.classList.add('w3-image');
    imgPicture.style = 'width:100%; max-height:80vh; object-fit:contain';
    imgPicture.setAttribute('alt', e.currentTarget.getAttribute('alt'));
    imgPicture.setAttribute('src', e.currentTarget.getAttribute('src'));
    imgFigCaption = document.createElement('figcaption');
    imgFigCaption.textContent = e.target.getAttribute('alt');
    imgFigCaption.classList.add('w3-black', 'w3-opacity', 'w3-xlarge', 'w3-center');

  modal.classList.add('w3-black');
  modal.appendChild(extBtn);
  modal.appendChild(imgContainer);
    imgContainer.appendChild(imgPicture);
    imgContainer.appendChild(imgFigCaption);
}

// Add events for images
if(lightboxElements){
  for(let lightboxElement of lightboxElements){
    lightboxElement.addEventListener('click', modalGeneral);
    lightboxElement.addEventListener('click', lightbox);
  }
}
