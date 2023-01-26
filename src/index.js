import './css/styles.css';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import { getPhotos } from './js/fetchImages';

const searchForm = document.querySelector('.search-form');
console.log(searchForm);

searchForm.addEventListener('submit', http);

function http(event) {
  event.preventDefault();
  console.log("Sorry, server can't answer");
}
