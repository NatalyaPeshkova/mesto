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



//  имя в профайле должно быть равно инпуту в попапе

//  получить кнопку. выбрать кнопку из документ, добавить собтие клик. задать имя функции.
document.querySelector('.popup__button').onclick = BtnClick;


function BtnClick(){
  console.log('done');
  // получить инпут
  let userName = document.querySelector('.popup__text').value;
  console.log(userName);

  //место для записи инпута .profile-info__text
  document.querySelector('.profile-info__text').innerHTML = userName;
  console.log(userName + 'from profile');


  popup.classList.toggle('popup_opened');
  popupContainer.classList.toggle('popup_opened');
  popupCloseBtn.classList.toggle('popup_opened');
}


