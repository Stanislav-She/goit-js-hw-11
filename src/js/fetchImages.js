import axios from 'axios';
import Notiflix from 'notiflix';
// імпортуємо дві бібліотеки, для HTTP-запитів бібліотека axios,
// та для відображення сповіщень бібліотека notiflix

const API_KEY = '33148829-cc4d08839fd1b6c92d312a1a4';
// створюємо незмінну константу з присвоєним їй значення ключа,
// який отримав під час реєстрації на pixabay.com

export const perPage = 40;
// відповідно до ТЗ указуємо бажану кількість завантажень на сторінці, що
// передаємо до константи та підставляємо до відповідного ключа в searchParameters

const searchParameters = new URLSearchParams({
  // створюємо константу, яка містить у собі об'єкт ключів зі значеннями,
  // які ми використовуватимемо під час пошукових запитів у рядку запиту.
  // значення якій ми передає створивши
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: perPage,
});

const BASE_URL = `https://pixabay.com/api/?${searchParameters}`;
// створюємо константу базового посилання, до якого додаємо в рядку параметри з
// об'єкту searchParameters

export async function getPhotos(search, page) {
  try {
    // конструкція try
    if (!search.trim()) {
      //якщо поле порожнє і відбувся сабміт, то буде виведено повідомлення
      Notiflix.Notify.failure('Please fill in the search field');
      return;
    }

    const response = await axios.get(`${BASE_URL}&page=${page}&q=${search}`);
    // метод axios. заміняє нам фетч і відрізняється тим, що вже повертає нам
    // об'єкт із ключами, в яких уже містяться потрібні нам об'єкти ключів та значень,
    // до всього вже розпарсені, бо під капотом уже розпарсений і метод json() не потрібно
    // додатково прописувати
    console.log(response.data.total);

    return response.data;

    // повертає відповідь/response і в ній ми обираємо саме ключ data, в якому лежать
    // об'єкти наших зображень зі всіма запитуваними властивостіми. Метод axios цієї бібліотеки
    // завжди повертатимо дані в ключі data
  } catch (error) {
    // якщо виникне помилка, то ми її відловими catch та передамо в нього саме error,
    // а в помилки оберемо текст помилки і це завжди значення в ключі message
    Notiflix.Notify.failure(error.message);
    // з допомогою Notiflix.Notify ми виводимо текст помилки в кастомне сповіщення
  }
}
