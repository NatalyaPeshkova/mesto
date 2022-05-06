const initialCards = [
  {
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

// Дом элементы

const imageContainer = document.querySelector(".elements");
const popupLocationContainer = document.querySelector(".popup-location__container");
console.log(popupLocationContainer);
const inputLocationName = document.getElementById("LocationName");
const inputLocationLink = document.getElementById("locationLink");

// Обработчики событий

const handleSubmitAddCardForm = (event) => {
  event.preventDefault();

  renderImageCard({ name: inputLocationName.value, link: inputLocationLink.value });

  inputLocationName.value = ' ';
  inputLocationLink.value = ' ';
};


//  Рендер карточки

const renderImageCard = (initialCards) => {
  // imageContainer.prepend(generateImageCard(imageData));
  imageContainer.insertAdjacentHTML(
    'afterBegin',
    `<div class="element">
        <img class="element__img" alt="Фотография" src="${initialCards.link}">
        <div class="element__footer">
          <h2 class="element__text">${initialCards.name}</h2>
          <button class="element__heart" type="button"></button>
    </div>
  </div>`
  );
};

initialCards.forEach((initialCards) => {
  renderImageCard(initialCards);
});

popupLocationContainer.addEventListener("submit", handleSubmitAddCardForm);



// добавление карточки

// // Шаблоны

// const todoCardTemplate = document
//   .querySelector("#todo-template")
//   .content.querySelector(".todo-card");


// // Обработчики событий

// const handleSubmitAddTodoForm = (event) => {
//   event.preventDefault();

//   renderTodoCard({ title: input.value });

//   input.value = "";
// };

// const handleDeleteTodoCard = (event) => {
//   event.target.closest('.todo-card').remove();
// };

// const handleCheckTodoCard = (event) => {
//   event.target.closest('.todo-card').classList.toggle('todo-card_checked');
// };

// // Генерация карточки

// const generateTodoCard = (todoData) => {
//   const newTodoCard = todoCardTemplate.cloneNode(true);

//   const titleTodoCard = newTodoCard.querySelector('.todo-card__title');
//   titleTodoCard.textContent = todoData.title;

//   const deleteButton = newTodoCard.querySelector('.todo-card__button_type_delete');
//   deleteButton.addEventListener('click', handleDeleteTodoCard);

//   const checkButton = newTodoCard.querySelector('.todo-card__button_type_check');
//   checkButton.addEventListener('click', handleCheckTodoCard);

//   return newTodoCard;
// }



// form.addEventListener("submit", handleSubmitAddTodoForm);
