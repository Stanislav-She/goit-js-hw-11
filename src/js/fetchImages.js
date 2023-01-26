import axios, { Axios } from 'axios';
import Notiflix from 'notiflix';
// імпортуємо дві бібліотеки, для HTTP-запитів бібліотека axios,
// та для відображення сповіщень бібліотека notiflix

const API_KEY = '33148829-cc4d08839fd1b6c92d312a1a4';
// створюємо незмінну константу з присвоєним їй значення ключа,
// який отримав під час реєстрації на pixabay.com

const searchParameters = {
  // створюємо константу, яка містить у собі об'єкт ключів зі значеннями,
  // які ми використовуватимемо під час пошукових запитів у рядку запиту
  key: API_KEY,
  image_type: photo,
  orientation: horizontal,
  safesearch: true,
  per_page: 40,
};

const BASE_URL = `https://pixabay.com/api/?${searchParameters}`;
// створюємо константу базового посилання, до якого додаємо в рядку параметри з
// об'єкту searchParameters
