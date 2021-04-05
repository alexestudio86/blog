  // SLIDER

  // Variable for all images
  sliderElements = document.querySelectorAll('div.slider img');
  indice=0;

  // Modal multiple images
  const slideMultipleImages = (e) => {
    extBtnContainer = document.createElement('div');
    extBtnContainer.classList.add('w3-padding', 'w3-display-topright');
    extBtnContainer.addEventListener('click', modalGeneral);
      extBtn = document.createElement('span');
      extBtn.classList.add('w3-large', 'w3-white', 'w3-button');
      extBtn.innerHTML = '&times;'
    imgPadding = document.createElement('div');
    imgPadding.classList.add('w3-padding-16');
      imgContainer = document.createElement('figure');
      imgContainer.classList.add('w3-display-container', 'w3-content');
        imgPicture = document.createElement('img');
        imgPicture.classList.add('w3-image');
        imgPicture.style = 'width:100%; max-height:80vh; object-fit:contain';
        imgPicture.setAttribute('alt', e.currentTarget.getAttribute('alt'));
        indice = parseInt(e.currentTarget.getAttribute('indice'));
        imgPicture.setAttribute('src', (sliderElements[indice]).getAttribute('src'));
        imgLeftBtn = document.createElement('button');
        imgLeftBtn.classList.add('w3-button', 'w3-gray','w3-display-left');
        imgLeftBtn.innerHTML = '&#10094;';
        imgLeftBtn.addEventListener('click', () => {
          if(indice == 0){
            indice = sliderElements.length-1;
          }else{
            indice -= 1;
          }
          modalGeneral();
          sliderElements[indice].click();
        });
        imgRightBtn = document.createElement('button');
        imgRightBtn.classList.add('w3-button', 'w3-gray', 'w3-display-right');
        imgRightBtn.innerHTML = '&#10095;';
        imgRightBtn.addEventListener('click', () => {
          if(indice < sliderElements.length-1){
            indice +=1;
          }else{
            indice = 0;
          }
          modalGeneral();
          sliderElements[indice].click();
        });
        imgFigCaption = document.createElement('figcaption');
        imgFigCaption.classList.add('w3-black', 'w3-opacity', 'w3-large', 'w3-padding-small', 'w3-display-bottommiddle', 'w-100', 'w3-center');
        imgFigCaption.textContent = e.target.getAttribute('alt');

    modal.classList.add('w3-black');
    modal.appendChild(extBtnContainer);
      extBtnContainer.appendChild(extBtn);
    modal.appendChild(imgPadding);
      imgPadding.appendChild(imgContainer);
        imgContainer.appendChild(imgPicture);
        imgContainer.appendChild(imgLeftBtn);
        imgContainer.appendChild(imgRightBtn);
        imgContainer.appendChild(imgFigCaption);
  }

  // Event modal to images and format width
  if(sliderElements){
    for(let [index, sliderElement] of sliderElements.entries()){
      sliderElement.setAttribute('indice', index);
      sliderElement.addEventListener('click', modalGeneral);
      if(sliderElements.length > 1){
        sliderElement.addEventListener('click', slideMultipleImages);
      }else{
        sliderElement.addEventListener('click', lightbox);;
      }
    }
  }
