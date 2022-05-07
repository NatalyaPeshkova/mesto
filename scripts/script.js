
const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');

const popupLocation = document.querySelector('.popup-location');
const popupLocationOpenButton = document.getElementById('addButton');
const popupLocationCloseButton = document.getElementById('ClosePopupLocation');

const profileName = document.querySelector('.profile__text');
const profileJob = document.querySelector('.profile__data');
const nameInput = document.getElementById('popupName');
const jobInput = document.getElementById('job');
const formElement = document.querySelector('form');

const popupImage = document.querySelector('.popup-image');
// const popupImageOpeningField = document.querySelector('.element__img');
const popupImageCloseButton = document.querySelector('.popup-image__close-button');
const images = document.querySelectorAll('.element');


// функция - добавляет модификатор для блока popup и открывает или закрывает его.
// И заносит данные из профиля в поля ввода. ПР4: Поля формы.
// При открытии формы поля «Имя» и «О себе» должны быть заполнены теми значениями, которые отображаются на странице.
function functionPopupOpen() {
  popup.classList.toggle('popup_opened');
  nameInput.value = profileName.innerHTML;
  jobInput.value = profileJob.innerHTML;
}
popupOpenButton.addEventListener('click', functionPopupOpen);
popupCloseButton.addEventListener('click', functionPopupOpen);

//функция - добавляет модификатор для блока popup-location и открывает или закрывает его.
function functionPopupLocationOpen(){
  popupLocation.classList.toggle('popup_opened');
}
popupLocationOpenButton.addEventListener('click',functionPopupLocationOpen);
popupLocationCloseButton.addEventListener('click', functionPopupLocationOpen);

//функция - добавляет модификатор для блока popup-image и открывает или закрывает его.
function functionPopupImageOpen(){
  document.querySelector('.popup-image').style.display = 'none';
}
popupImageCloseButton.addEventListener('click', functionPopupImageOpen);


// Обработчик «отправки» формы/
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.toggle('popup_opened');
 }

formElement.addEventListener('submit', formSubmitHandler);


