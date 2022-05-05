// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];

// // Шаблоны

// const todoCardTemplate = document
//   .querySelector("#todo-template")
//   .content.querySelector(".todo-card");

// // Дом элементы

// const todoContainer = document.querySelector(".todo__list");
// const form = document.querySelector(".form");
// const input = document.querySelector(".form__input");

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

// // Рендер карточки

// const renderTodoCard = (todoData) => {
//   todoContainer.prepend(generateTodoCard(todoData));
// };

// todoList.forEach((todoData) => {
//   renderTodoCard(todoData);
// });

// form.addEventListener("submit", handleSubmitAddTodoForm);
