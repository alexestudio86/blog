// COOKIES MODAL
const cookiesWindow = localStorage.getItem('privacity');
if(!cookiesWindow){

  modalGeneral();

  let modal = document.getElementById('modal');

    modalContent = document.createElement('div');
    modalContent.classList.add('w3-modal-content', 'w3-round');
      headerContainer = document.createElement('header');
      headerContainer.classList.add('w3-container', 'w3-border');
        titleContainer = document.createElement('h1');
        titleContainer.classList.add('w3-large', 'w3-padding');
        titleContainer.textContent = 'Uso de datos';
      firstMessage = document.createElement('p');
      firstMessage.classList.add('w3-container');
      firstMessage.textContent = '<data:messages.euCookieNotice2018/> consulte mas detalles en nestro ';
        spanMessage = document.createElement('a');
        spanMessage.classList.add('w3-text-red');
        spanMessage.setAttribute('href', 'https://www.alexestudio86.com/p/aviso-de-privacidad.html');
        spanMessage.setAttribute('target', '_blank');
        spanMessage.textContent = 'Aviso de privacidad';
      footerContainer = document.createElement('footer');
      footerContainer.classList.add('w3-row', 'w3-border');
        btnContainer = document.createElement('div');
        btnContainer.classList.add('w3-right', 'w3-padding-small','w3-container');
          acceptBtn = document.createElement('a');
          acceptBtn.classList.add('w3-button', 'w3-round', 'w3-blue');
          acceptBtn.textContent = 'Aceptar';
          acceptBtn.addEventListener('click', modalGeneral);

    modal.appendChild(modalContent);
      modalContent.appendChild(headerContainer);
        headerContainer.appendChild(titleContainer);
      modalContent.appendChild(firstMessage);
        firstMessage.appendChild(spanMessage);
      modalContent.appendChild(footerContainer);
        footerContainer.appendChild(btnContainer);
          btnContainer.appendChild(acceptBtn);

  localStorage.setItem('popWindow', 'privacity');

}
