import { refs } from '../index';

export function createGalleryMarkup(cardsArr) {
  const markup = cardsArr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <a class='js-link__img image__container' href=${largeImageURL}><img src=${webformatURL} alt=${tags} loading="lazy" class="image__link"/>
  <div class="image__info">
    <p class="image__item">
      <b class="image__label"><svg class="image__like" width="32" height="32"><path fill="#7996A1"  d="M23 2c-2.404 0-4.331 0.863-6.030 2.563-0.001 0.001-0.002 0.002-0.003 0.003h-0.001l-0.966 1.217-0.966-1.143c-0.001-0.001-0.002-0.002-0.003-0.003h-0.001c-1.7-1.701-3.626-2.637-6.030-2.637s-4.664 0.936-6.364 2.636c-1.699 1.7-2.636 3.96-2.636 6.364 0 2.402 0.935 4.662 2.633 6.361l11.947 12.047c0.375 0.379 0.887 0.592 1.42 0.592s1.045-0.213 1.42-0.592l11.946-12.047c1.698-1.699 2.634-3.958 2.634-6.361s-0.937-4.664-2.636-6.364c-1.7-1.7-3.96-2.636-6.364-2.636v0z"></path>
</svg></b><span class="image__span">${likes}</span>
    </p>
    <p class="image__item">
      <b class="image__label"><svg class="image__like" width="32" height="32"><path fill="#7996A1" d="M16 6c-8.837 0-16 10-16 10s7.163 10 16 10 16-10 16-10-7.163-10-16-10zM16 22c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6zM16 12c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z"></path>
</svg></b><span class="image__span">${views}</span>
    </p>
    <p class="image__item">
      <b class="image__label"><svg class="image__like" width="32" height="32"><path fill="#7996A1" d="M16 27.969c-0.649 0-1.599-0.73-2.229-0.797-1.797 1.507-3.669 3.321-6.214 4.264-1.111 0.471-2.065 0.744-2.313 0.447-0.333-0.387-0.836-0.924-0.925-1.068 0.005-0.214 0.264-0.045 0.546-0.349 1.536-0.646 2.528-2.313 3.195-4.351-4.811-2.411-8.060-6.934-8.060-12.128 0-7.721 7.164-13.981 16-13.981s16 6.259 16 13.981-7.164 13.982-16 13.982z"></path>
</svg></b><span class="image__span">${comments}</span>
    </p>
    <p class="image__item">
      <b class="image__label"><svg class="image__like" width="32" height="32"><path fill="#7996A1" d="M27.624 20.955l-0.958 5.072h-21.332l-0.958-5.072h-2.385v8.062h28.018v-8.062h-2.385zM27.020 11.946h-7.022v-2.93h-7.994v2.93h-6.955l10.914 11.412 11.057-11.412zM19.997 3.982h-7.994v1.066h7.994v-1.066zM19.997 5.973h-7.994v2.038h7.994v-2.038z"></path>
</svg></b><span class="image__span">${downloads}</span>
    </p>
  </div></a>
`
    )
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
