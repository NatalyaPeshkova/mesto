const btns = document.querySelectorAll('.button__open');
const closeBtns = document.querySelectorAll('.popup__close-button');
const popups = document.querySelectorAll('.popup');
const nameInput = document.getElementById('popupName');
const jobInput = document.getElementById('job');
const profileName = document.querySelector('.profile__text');
const profileJob = document.querySelector('.profile__data');
const formElement = document.querySelector('form');

function functionTogglePopup(){
  const index = Array.from(btns).indexOf(this);
  popups[index].classList.toggle('popup_opened');
  nameInput.value = profileName.innerHTML;
  jobInput.value = profileJob.innerHTML;
}

btns.forEach( btn => btn.addEventListener( 'click', functionTogglePopup));

function functionClosePopup(){
  const index = Array.from(closeBtns).indexOf(this);
  popups[index].classList.remove('popup_opened');
}
closeBtns.forEach( closeBtn => closeBtn.addEventListener( 'click', functionClosePopup));

  // закрывает попапы
// function closePopup(){
//   document.querySelector('.popup_opened').classList.remove('.popup_opened');
// }
// closeBtns.forEach( btn => btn.addEventListener( 'click', closePopup ) );

// function popupCloseHandler() {
//   const popupOpened = document.querySelector('.popup_opened');
//   closePopup(popupOpened);
// }

// function addCloseButtonListener(popup) {
//   const popupCloseButton = popup.querySelector('.popup__close-button');
//   popupCloseButton.addEventListener("click", popupCloseHandler);
// }

// function removeCloseButtonListener(popup) {
//   const popupCloseButton = popup.querySelector('.popup__close-button');
//   popupCloseButton.removeEventListener("click", popupCloseHandler);
// }

// function openPopup(popup) {
//   popup.classList.add("popup_opened");

//   addCloseButtonListener(popup);
// }

// function closePopup(popup) {
//   popup.classList.remove("popup_opened");

//   removeCloseButtonListener(popup);
// }
// функция открывает попап с картинкой места
document.querySelectorAll('.elements img').forEach(image => {
    image.onclick = () => {
      document.querySelector('.popup-image').classList.toggle('popup_opened');
      document.querySelector('.popup-image img').src = image.getAttribute('src');
      document.querySelector('.popup-image__text').textContent = image.getAttribute('h2');
    }
});


//-------------------------------------------------------------------
// let popup = document.querySelector('.popup');
// let popupLocation = document.querySelector('.popup-location');
// let popupOpenButton = document.querySelector('.profile__edit-button');
// let popupCloseButton = document.querySelector('.popup_close-button');
// console.log(document.querySelector('popup_close-button'));
// let popupLocationOpenButton = document.getElementById('addButton');
// let popupLocationCloseButton = document.querySelector('.popup-location_close-button');
// let profileName = document.querySelector('.profile__text');
// let profileJob = document.querySelector('.profile__data');
//
// let formElement = document.querySelector('form');



// // функция - добавляет модификатор для блока popup и открывает или закрывает его.
// // И заносит данные из профиля в поля ввода. ПР4: Поля формы.
// // При открытии формы поля «Имя» и «О себе» должны быть заполнены теми значениями, которые отображаются на странице.

// function functionPopupOpen() {
//   popup.classList.toggle('popup_opened');
//   nameInput.value = profileName.innerHTML;
//   jobInput.value = profileJob.innerHTML;
// }
// popupOpenButton.addEventListener('click', functionPopupOpen);
// popupCloseButton.addEventListener('click', functionPopupOpen);

// //функция - добавляет модификатор для блока popup-location и открывает или закрывает его.
// function functionPopupLocationOpen(){
//   popupLocation.classList.toggle('popup_opened');
//   console.log('functionPopupLocationOpen is done');
// }
// popupLocationOpenButton.addEventListener('click',functionPopupLocationOpen);
// popupLocationCloseButton.addEventListener('click', functionPopupLocationOpen);


// // функция открывает попап с картинкой места
// document.querySelectorAll('.elements img').forEach(image => {
//   image.onclick = () => {
//     document.querySelector('.popup-image').classList.toggle('popup_opened');
//     document.querySelector('.popup-image__close-button-icon').classList.toggle('popup_opened');
//     document.querySelector('.popup-image img').src = image.getAttribute('src');
//     document.querySelector('.popup-image__text').textContent = image.getAttribute('h2');
//   }
// });


// // Обработчик «отправки» формы/
// function formSubmitHandler (evt) {
//     evt.preventDefault();
//     popup.classList.toggle('popup_opened');
//     popupLocation.classList.toggle('.popup_opened');
//     profileName.textContent = nameInput.value;
//     profileJob.textContent = jobInput.value;

//  }

// formElement.addEventListener('submit', formSubmitHandler);

// ------------------------------------------------------------------------

// const popup = document.querySelector('.popup');
// const popupOpenButton = document.querySelector('.popup_open-button');
// const popupCloseButton = document.querySelector('.popup_close-button');

// const openBtns = document.querySelectorAll('.popup_open-button');
// const popups = document.querySelectorAll('.popup');
// const profileName = document.querySelector('.profile__text');
// const profileJob = document.querySelector('.profile__data');
// const nameInput = document.getElementById('popupName');
// const jobInput = document.getElementById('job');
// const formElement = document.querySelector('form');
// const popupImage = document.querySelector('.popup-image');
// const popupImageOpeningField = document.querySelector('.element__img');
// const popupImageCloseButton = document.querySelector('.popup-image__close-button');
// const images = document.querySelectorAll('.element');


// // function functionTogglePopup(){ const index = Array.from(openBtns).indexOf(this);
// //   popups[index].classList.toggle('popup_opened');}

// // openBtns.forEach(btn =>
// //   btn.addEventListener('click', functionTogglePopup));




// // // функция - добавляет модификатор для блока popup и открывает или закрывает его.

// function functionPopupOpen() {
//   popup.classList.toggle('popup_opened');
//   nameInput.value = profileName.innerHTML;
//   jobInput.value = profileJob.innerHTML;
// }
// popupOpenButton.addEventListener('click', functionPopupOpen);
// popupCloseButton.addEventListener('click', functionPopupOpen);


// // // функция открывает попап с картинкой места
// document.querySelectorAll('.elements img').forEach(image => {
//   image.onclick = () => {
//     document.querySelector('.popup-image').classList.toggle('popup_opened');
//     document.querySelector('.popup-image__close-button-icon').classList.toggle('popup_opened');
//     document.querySelector('.popup-image img').src = image.getAttribute('src');
//     document.querySelector('.popup-image__text').textContent = image.getAttribute('h2');
//   }
// });


// // // Обработчик «отправки» формы/
// function functionTogglePopup(evt) {
//   evt.preventDefault();
// }

// formElement.addEventListener('submit', functionTogglePopup);
