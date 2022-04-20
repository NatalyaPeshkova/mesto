// хорошая шутка про "последние 53 ошибки". я очень Вас понимаю.

let popupContainer = document.querySelector('.popup__container');
let popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelector('.profile__edit-button');
let popupCloseBtn = document.querySelector('.popup__close-button');

let userName1 = document.querySelector('.profile__text').innerHTML;
let userJob1 = document.querySelector('.profile__data').innerHTML;

//функция - добавляет модификатор для блока popup и открывает его.
// И заносит данные из профиля в поля ввода.
function popupOpenButton(){
  popup.classList.toggle('popup_opened');
  popupContainer.classList.toggle('popup_opened');
  document.querySelector('.popup__text').value = userName1;
  document.getElementById('job').value = userJob1;
}

popupOpenBtn.addEventListener('click', popupOpenButton);
popupCloseBtn.addEventListener('click', popupOpenButton);


// функция получет текст в полях ввода попапа и меняет текст в профиле

let formElement = document.querySelector('.popup__button');
let nameInput = document.querySelector('.popup__text');
let jobInput = document.getElementById('job');
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
  }

formElement.addEventListener('click', formSubmitHandler);









