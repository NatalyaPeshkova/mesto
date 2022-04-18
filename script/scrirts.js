// открытие и закрытие попапа
let popupContainer = document.querySelector('.popup-container');
let popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelector('.profile__edit-button');
let popupCloseBtn = document.querySelector('.popup-container__close-button');
let userName1 = document.querySelector('.profile__text').innerHTML;
let userJob1 = document.querySelector('.profile__data').innerHTML;
let popupName = document.querySelector('.popup-container__text').value;
let popupJob = document.querySelector('.popup-container__text-info').value;

//функция открытия попапа добавляет модификатор для блока popup и открывает его. И заносит данные из профиля в поля ввода.
function popupOpenButton(){
  popup.classList.toggle('popup_opened');
  popupContainer.classList.toggle('popup_opened');
  popupCloseBtn.classList.toggle('popup_opened');
  document.querySelector('.popup-container__text').value = userName1;
  document.querySelector('.popup-container__text-info').value = userJob1;
  console.log(popupName + 'from profile');
  console.log(popupJob + 'from profile');
}

popupOpenBtn.addEventListener('click', popupOpenButton);
popupCloseBtn.addEventListener('click', popupOpenButton);



// //document.querySelector('.popup-container__button').onclick =  formSubmitHandler


// function formSubmitHandler(){
//  // console.log('функция работает');

//   let userName = document.querySelector('.popup-container__text').value;
//   document.querySelector('.profile__text').innerHTML = userName;
// // console.log(userName + ' from profile');


//   let userJob = document.querySelector('.popup-container__text-info').value;
//   document.querySelector('.profile__data').innerHTML = userJob;
// // console.log(userJob);

//   // закрыть
//   popup.classList.toggle('popup_opened');
//   popupContainer.classList.toggle('popup_opened');
//   popupCloseBtn.classList.toggle('popup_opened');
// }





