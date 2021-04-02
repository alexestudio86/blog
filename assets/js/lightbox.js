// LIGHBOX

// Select all lightbox class elements
const lightboxElements = document.querySelectorAll('img.lightbox');

const lightbox = (e) => {
  extBtnContainer = document.createElement('div');
  extBtnContainer.classList.add('w3-padding', 'w3-display-topright', 'w3-margin-bottom');
    extBtn = document.createElement('span');
    extBtn.classList.add('w3-xlarge', 'w3-white', 'w3-button');
    extBtn.textContent = 'x'
    extBtn.addEventListener('click', modalGeneral);
  imgContainer = document.createElement('figure');
  imgContainer.classList.add('w3-modal-content', 'animate__animated','animate__fadeIn');
    imgPicture = document.createElement('img');
    imgPicture.classList.add('w3-image');
    imgPicture.style.width = '100%';
    imgPicture.setAttribute('alt', e.currentTarget.getAttribute('alt'));
    imgPicture.setAttribute('src', e.currentTarget.getAttribute('src'));
    imgFigCaption = document.createElement('figcaption');
    imgFigCaption.textContent = e.target.getAttribute('alt');
    imgFigCaption.classList.add('w3-black', 'w3-opacity', 'w3-xlarge', 'w3-center');

  modal.appendChild(extBtnContainer);
    extBtnContainer.appendChild(extBtn);
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
