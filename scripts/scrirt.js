let popupContainer = document.querySelector('.popup__container');
let popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelector('.profile__edit-button');
let popupCloseBtn = document.querySelector('.popup__close-button');
let userName1 = document.querySelector('.profile__text').innerHTML;
let userJob1 = document.querySelector('.profile__data').innerHTML;


//функция - добавляет модификатор для блока popup и открывает его.
// И заносит данные из профиля в поля ввода.
function popupOpenButton() {
  popup.classList.toggle('popup_opened');
  popupContainer.classList.toggle('popup_opened');
}
popupOpenBtn.addEventListener('click', popupOpenButton);
popupCloseBtn.addEventListener('click', popupOpenButton);


// функция получет текст в полях ввода попапа и меняет текст в профиле
let formElement = document.querySelector('.popup__button');
let nameInput = document.querySelector('.popup__text');
let jobInput = document.getElementById('job');


function formSubmitHandler(evt) {
  evt.preventDefault();
  popup.classList.toggle('popup_opened');
  popupContainer.classList.toggle('popup_opened');
  let userName = nameInput.value;
  let userJob = jobInput.value;
  document.querySelector('.profile__text').innerHTML = userName;
  document.querySelector('.profile__data').innerHTML = userJob;
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('click', formSubmitHandler);
