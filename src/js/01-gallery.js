/*
 * Добавь библиотеку SimpleLightbox как зависимость проекта используя npm(ссылка на CDN из твоей прошлой работы больше не нужна).
 *Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того, что библиотека была установлена через npm (синтаксис import/export).
 */

 import SimpleLightbox from "simplelightbox";
 import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const blockMarkup = createImagesGallery(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', blockMarkup);

function createImagesGallery(item) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join('');
}

const lighbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});