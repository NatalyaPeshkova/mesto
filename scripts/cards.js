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
const inputLocationName = document.getElementById("LocationName");
const inputLocationLink = document.getElementById("locationLink");

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
}

//  Рендер карточки

const renderImageCard = (initialCards) => {
  imageContainer.prepend(generateImageCard(initialCards));
};

initialCards.forEach((initialCards) => {
  renderImageCard(initialCards);
});
popupLocationContainer.addEventListener("submit", handleSubmitAddCardForm);



// // функция открывает попап с картинкой места

document.querySelectorAll('.elements img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
    document.querySelector('.popup-image__text').value = inputLocationName;

  }
});


// // лайк карточки
// document.querySelectorAll('.element__heart').forEach(heartBtn => {
//   heartBtn.onclick = () => {
//     document.querySelector('.element__heart').classList.add('element__heart_active');
//     document.querySelector('.element__heart').classList.remove('element__heart');
//   }
// });



// // Шаблоны
// const imageCardTemplate = document.querySelector('#element').content.querySelector("element");

// // Дом элементы
// const imageContainer = document.querySelector(".elements");
// const popupLocationContainer = document.querySelector(".popup-location__container");
// const inputLocationName = document.getElementById("LocationName");
// const inputLocationLink = document.getElementById("locationLink");

// const handleSubmitAddCardForm = (event) => {
//   event.preventDefault();

//   renderImageCard({
//     name: inputLocationName.value,
//     link: inputLocationLink.value
//   });

//   inputLocationName.value = ' ';
//   inputLocationLink.value = ' ';
// };


// const handleDeleteCard = (event) => {
//   event.target.closest('.element').remove();
// };

// const handleCheckCard = (event) => {
//   event.target.closest('.element').classList.toggle('element__heart_active');
// };

// // Генерация карточки

// const generateImageCard = (todoData) => {
//   const newImageCard = imageCardTemplate.cloneNode(true);

//   const titleImageCard = newImageCard.querySelector('.element__text');
//   titleTodoCard.textContent = todoData.title;

//   const deleteButton = newImageCard.querySelector('element__trash');
//   deleteButton.addEventListener('click', handleDeleteCard);

//   const checkButton = newImageCard.querySelector('.element__heart_active');
//   checkButton.addEventListener('click', handleCheckCard);

//   return newImageCard;
// }

// // Рендер карточки

// const renderImageCard = (todoData) => {
//   imageContainer.prepend(generateImageCard(todoData));
// };

// initialCards.forEach((todoData) => {
//   renderImageCard(todoData);
// });

// form.addEventListener("submit", handleSubmitAddCardForm);
