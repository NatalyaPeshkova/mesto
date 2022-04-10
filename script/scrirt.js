// открытие и закрытие попапа
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



document.querySelector('.popup__button').onclick = BtnClick;


function BtnClick(){
  console.log('функция работает');

  // name
  let userName = document.querySelector('.popup__text').value;
  document.querySelector('.profile-info__text').innerHTML = userName;
  console.log(userName + ' from profile');

  // job
  let userJob = document.querySelector('.popup__text-info').value;
  document.querySelector('.profile-info__data').innerHTML = userJob;
  console.log(userJob);

  // закрыть
  popup.classList.toggle('popup_opened');
  popupContainer.classList.toggle('popup_opened');
  popupCloseBtn.classList.toggle('popup_opened');
}





