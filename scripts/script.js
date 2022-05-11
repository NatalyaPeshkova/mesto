// const popup = document.querySelector('.popup');
// const popupOpenButton = document.querySelector('.popup_open-button');
// const popupCloseButton = document.querySelector('.popup_close-button');

const openBtns = document.querySelectorAll('.popup_open-button');
const popups = document.querySelectorAll('.popup');

function functionTogglePopup(){ const index = Array.from(openBtns).indexOf(this);
  popups[index].classList.toggle('popup_opened');}

openBtns.forEach(btn =>
  btn.addEventListener('click', functionTogglePopup));

const profileName = document.querySelector('.profile__text');
const profileJob = document.querySelector('.profile__data');
const nameInput = document.getElementById('popupName');
const jobInput = document.getElementById('job');
const formElement = document.querySelector('form');

const popupImage = document.querySelector('.popup-image');
const popupImageOpeningField = document.querySelector('.element__img');
const popupImageCloseButton = document.querySelector('.popup-image__close-button');
const images = document.querySelectorAll('.element');


// // функция - добавляет модификатор для блока popup и открывает или закрывает его.

function functionPopupOpen() {
  popup.classList.toggle('popup_opened');
  nameInput.value = profileName.innerHTML;
  jobInput.value = profileJob.innerHTML;
}
popupOpenButton.addEventListener('click', functionPopupOpen);
popupCloseButton.addEventListener('click', functionPopupOpen);


// // функция открывает попап с картинкой места
document.querySelectorAll('.elements img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.popup-image').classList.toggle('popup_opened');
    document.querySelector('.popup-image__close-button-icon').classList.toggle('popup_opened');
    document.querySelector('.popup-image img').src = image.getAttribute('src');
    document.querySelector('.popup-image__text').textContent = image.getAttribute('h2');
  }
});


// // Обработчик «отправки» формы/
function functionTogglePopup(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

formElement.addEventListener('submit', functionTogglePopup);
