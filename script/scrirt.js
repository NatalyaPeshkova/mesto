// открытие и закрытие попапа
let popupContainer = document.querySelector('.popup-container');
let popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelector('.profile__edit-button');
let popupCloseBtn = document.querySelector('.popup-container__close-button');



function popupOpenButton() {
  popup.classList.toggle('popup_opened');
  popupContainer.classList.toggle('popup_opened');
  popupCloseBtn.classList.toggle('popup_opened');
}

popupOpenBtn.addEventListener('click', popupOpenButton);
popupCloseBtn.addEventListener('click', popupOpenButton);



document.querySelector('.popup-container__button').onclick = BtnClick;


function BtnClick(){
 // console.log('функция работает');

  let userName = document.querySelector('.popup-container__text').value;
  document.querySelector('.profile__text').innerHTML = userName;
// console.log(userName + ' from profile');


  let userJob = document.querySelector('.popup-container__text-info').value;
  document.querySelector('.profile__data').innerHTML = userJob;
// console.log(userJob);

  // закрыть
  popup.classList.toggle('popup_opened');
  popupContainer.classList.toggle('popup_opened');
  popupCloseBtn.classList.toggle('popup_opened');
}





