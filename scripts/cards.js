const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



// Швблоны
const imageCardTemplate = document.querySelector('#imageCard').content.querySelector(".element");
console.log(imageCardTemplate);


// Дом элементы

const imageContainer = document.querySelector(".elements");
const popupLocationContainer = document.querySelector(".popup-location__container");
const inputLocationName = document.querySelector('.popup-location__input_link');
const inputLocationLink = document.querySelector('.popup-location__input_name');

// Обработчики событий

const handleSubmitAddCardForm = (event) => {
  event.preventDefault();

  renderImageCard({
    name: inputLocationName.value,
    link: inputLocationLink.value
  });

  inputLocationName.value = ' ';
  inputLocationLink.value = ' ';
};

const handelDeleteImageCard = (event) => {
  event.target.closest('.element').remove();

};

const handelCheckImageCard = (event) => {
  event.target.closest('.element__heart').classList.toggle('element__heart_active');
};

// Генерация карточки
const generateImageCard = (initialCards) => {
  const newImageCard = imageCardTemplate.cloneNode(true);

  const titleImageCard = newImageCard.querySelector('.element__text');
  titleImageCard.textContent = initialCards.name;

  const pictureImageCard = newImageCard.querySelector('.element__img');
  pictureImageCard.src = initialCards.link;

  const deleteButton = newImageCard.querySelector('.element__trash');
  deleteButton.addEventListener('click', handelDeleteImageCard);

  const checkButton = newImageCard.querySelector('.element__heart');
  checkButton.addEventListener('click', handelCheckImageCard);


  return newImageCard;
};

//  Рендер карточки

const renderImageCard = (initialCards) => {
  imageContainer.prepend(generateImageCard(initialCards));
};

initialCards.forEach((initialCards) => {
  renderImageCard(initialCards);
});
popupLocationContainer.addEventListener("submit", handleSubmitAddCardForm);

