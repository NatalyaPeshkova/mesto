
let popup = document.querySelector('.popup');
let popupLocation = document.querySelector('.popup-location');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let popupLocationOpenButton = document.getElementById('addButton');
let popupLocationCloseButton = document.getElementById('ClosePopupLocation');
let profileName = document.querySelector('.profile__text');
let profileJob = document.querySelector('.profile__data');
let nameInput = document.getElementById('popupName');
let jobInput = document.getElementById('job');
let formElement = document.querySelector('form');



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
  console.log('functionPopupLocationOpen is done');
}
popupLocationOpenButton.addEventListener('click',functionPopupLocationOpen);
popupLocationCloseButton.addEventListener('click', functionPopupLocationOpen);



// Обработчик «отправки» формы/
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.toggle('popup_opened');
 }

formElement.addEventListener('submit', formSubmitHandler);

// лайк карsточки
