import './css/styles.css';
// імпорт стилів
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
// імпорт двох бібліотек установлених на npm
import 'simplelightbox/dist/simple-lightbox.min.css';
//імпортуємо мініфіковані стилі лайтбоксу simplelightbox
import { perPage, getPhotos } from './js/fetchImages';
// імпорт функції для запитів на API
import { createGalleryMarkup } from './js/createGalleryMarkup';

export const refs = {
  searchForm: document.querySelector('.search-form'),
  heroHidden: document.querySelector('.hero'),
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
  input: document.querySelector('.header__input'),
};
// створюємо референси з посиланнями на елементи html для подальшого
// оперування ними в DOM
// console.log(refs);

let lightbox;

let page = 1;
// стартове значення змінної page

let searchValue = '';
//

// const totalPages = Math.ceil(20 / perPage);
// за документацією pixabay "totalHits": 500, тобто загальна кількість повернутих
// зображень у запиті буде 500, відповідно ми ділимо їх на кількість
// показу на сторінці це значення сторінок для підвантаження виносимо у змінну.
// А також методом Math.ceil округлюємо отриманий аргумент до найблищого більшого цілого

refs.searchForm.addEventListener('submit', submitSearch);
// вішаємо слухача подій submit на кнопку пошуку зображень і викликаємо функцію submitSearch

async function loadMoreImages(searchValue) {
  page += 1;
  const data = await getPhotos(searchValue, page);
  const totalPages = Math.ceil(Number(data.totalHits) / perPage);
  // console.log(totalPages);
  if (page < totalPages) {
    createGalleryMarkup(data.hits);
    createLightbox();
  }
  if (page > totalPages) {
    addClass('visually-hidden');
    console.log('after');
  }
}

async function mountData(searchValue) {
  try {
    const data = await getPhotos(searchValue, page);
    ////
    page += 1;
    const totalPages = Math.ceil(Number(data.totalHits) / perPage);
    // console.log(totalPages);
    if (page < totalPages) {
      removeClass('visually-hidden');
    }
    if (page > totalPages) {
      addClass('visually-hidden');
      console.log('after');
    }
    ////
    refs.heroHidden.classList.add('visually-hidden');

    refs.loadMore.removeEventListener('click', loadMoreClb);
    refs.loadMore.addEventListener('click', loadMoreClb);

    if (data.hits.lenght === 0) {
      addClass('visually-hidden');
      refs.heroHidden.classList.remove('visually-hidden');
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again'
      );
    } else {
      Notiflix.Notify.info(`Hooray! We found ${data.totalHits} images`);
      createGalleryMarkup(data.hits);
      createLightbox();
    }
  } catch (error) {
    addClass('visually-hidden');
    console.log('error', error);
  }
}

function loadMoreClb() {
  loadMoreImages(searchValue);
}

function createLightbox() {
  const linkImage = document.querySelector('.js-link__img');
  linkImage.addEventListener('click', openModal);

  function openModal(event) {
    event.preventDefault();
  }

  lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
  });
}

///////////////////////////

refs.input.addEventListener('input', clearInput);

function clearInput() {
  if (refs.input.value === '') {
    clearMarkup(refs.gallery);
    addClass('visually-hidden');
    refs.heroHidden.classList.remove('visually-hidden');
  }
}

//////////////////////////

function submitSearch(event) {
  event.preventDefault();

  clearMarkup(refs.gallery);

  searchValue = event.currentTarget[0].value;

  // console.log('searchValue', searchValue);

  mountData(searchValue);
}

function clearMarkup(element) {
  element.innerHTML = '';
}

function addClass(className) {
  refs.loadMore.classList.add(className);
}

function removeClass(className) {
  refs.loadMore.classList.remove(className);
}
