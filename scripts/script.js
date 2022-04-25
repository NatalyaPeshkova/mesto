
// функция - добавляет модификатор для блока popup и открывает его.
// И заносит данные из профиля в поля ввода.

let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__text');
let profileJob = document.querySelector('.profile__data');
let popupName = document.getElementById('popupName');
let popupJob = document.getElementById('job');

// console.log(profileName.innerHTML);
// console.log(profileJob.innerHTML);
// console.log(popupName.value);
// console.log(popupJob.value);

function functionPopupOpen() {
  popup.classList.toggle('popup_opened');
  console.log('function worked');
  popupName.value = document.querySelector('.profile__text').innerHTML;
  popupJob.value = document.querySelector('.profile__data').innerHTML;
  console.log(popupName.value);
  console.log(popupJob.value);
}

popupOpenButton.addEventListener('click', functionPopupOpen);
popupCloseButton.addEventListener('click', functionPopupOpen);



// let popupContainer = document.querySelector('.popup__container');
// let popup = document.querySelector('.popup');
// let popupOpenBtn = document.querySelector('.profile__edit-button');
// let popupCloseBtn = document.querySelector('.popup__close-button');
// let userName1 = document.querySelector('.profile__text').innerHTML;
// let userJob1 = document.querySelector('.profile__data').innerHTML;


// //функция - добавляет модификатор для блока popup и открывает его.
// // И заносит данные из профиля в поля ввода.
// function popupOpenButton() {
//   popup.classList.toggle('popup_opened');
//   popupContainer.classList.toggle('popup_opened');
//   // если убрать popupContainer то не работает, что проверить?
// }
// popupOpenBtn.addEventListener('click', popupOpenButton);
// popupCloseBtn.addEventListener('click', popupOpenButton);


// // функция получет текст в полях ввода попапа и меняет текст в профиле
// let formElement = document.querySelector('.popup__button');
// let nameInput = document.querySelector('.popup__text');
// let jobInput = document.getElementById('job');


// function formSubmitHandler(evt) {
//   evt.preventDefault();
//   popup.classList.toggle('popup_opened');
//   popupContainer.classList.toggle('popup_opened');
//   let userName = nameInput.value;
//   let userJob = jobInput.value;
//   document.querySelector('.profile__text').innerHTML = userName;
//   document.querySelector('.profile__data').innerHTML = userJob;
//   // если вынести за функцию, то не работает.
// }

// formElement.addEventListener('submit', formSubmitHandler);
// formElement.addEventListener('click', formSubmitHandler);
