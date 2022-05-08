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


//  Рендер карточки

const renderImageCard = (initialCards) => {
  // imageContainer.prepend(generateImageCard(imageData));
  imageContainer.insertAdjacentHTML(
    'afterBegin',
    `<div class="element">
        <img class="element__img" alt="Фотография" src="${initialCards.link}">
        <div class="element__footer">
          <h2 class="element__text">${initialCards.name}</h2>
          <button class="element__heart" type="button" id="heartBtn">

          </button>
    </div>
  </div>`
  );
};

initialCards.forEach((initialCards) => {
  renderImageCard(initialCards);
});
popupLocationContainer.addEventListener("submit", handleSubmitAddCardForm);



// функция открывает попап с картинкой места
document.querySelectorAll('.elements img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');

    // document.querySelector('.popup-image h4').textContent  =
  }
});


// лайк карточки
document.querySelectorAll('.element__heart').forEach(heartBtn => {
  heartBtn.onclick = () => {
    document.querySelector('.element__heart').classList.add('element__heart_active');
    document.querySelector('.element__heart').classList.remove('element__heart');
  }
});
