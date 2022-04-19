

let popupContainer = document.querySelector('.popup-container');
let popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelector('.profile__edit-button');
let popupCloseBtn = document.querySelector('.popup-container__close-button');

let userName1 = document.querySelector('.profile__text').innerHTML;
let userJob1 = document.querySelector('.profile__data').innerHTML;

//функция - добавляет модификатор для блока popup и открывает его.
// И заносит данные из профиля в поля ввода.
function popupOpenButton(){
  popup.classList.toggle('popup_opened');
  popupContainer.classList.toggle('popup_opened');
  popupCloseBtn.classList.toggle('popup_opened');
  document.querySelector('.popup-container__text').value = userName1;
  document.querySelector('.popup-container__text-info').value = userJob1;
}

popupOpenBtn.addEventListener('click', popupOpenButton);
popupCloseBtn.addEventListener('click', popupOpenButton);


// функция получет текст в полях ввода попапа и меняет текст в профиле

let formElement = document.querySelector('.popup-container__button');
let nameInput = document.querySelector('.popup-container__text');
let jobInput = document.querySelector('.popup-container__text-info');
// console.log(nameInput.value + "   рабоатет");
// console.log(jobInput.value + "    рабоатет ")


function formSubmitHandler (evt) {
    evt.preventDefault();
    let userName = nameInput.value;
    let userJob = jobInput.value;
    document.querySelector('.profile__text').innerHTML = userName;
    document.querySelector('.profile__data').innerHTML = userJob;
    popup.classList.toggle('popup_opened');
    popupContainer.classList.toggle('popup_opened');
    popupCloseBtn.classList.toggle('popup_opened');
}

formElement.addEventListener('click', formSubmitHandler);









