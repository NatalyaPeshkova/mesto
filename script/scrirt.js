let popupContainer = document.querySelector('.popup__container');
let popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelector('.profile-info__edit-button');
let popupCloseBtn = document.querySelector('.popup__close-button');

function popupOpenButton() {
  popup.classList.toggle('popup_opened');
  popupContainer.classList.toggle('popup_opened');
  popupCloseBtn.classList.toggle('popup_opened');
}

popupOpenBtn.addEventListener('click', popupOpenButton);
popupCloseBtn.addEventListener('click', popupOpenButton);
