// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
const lightbox = new SimpleLightbox('.gallery a');

const list = document.querySelector(".gallery")
const loader = document.querySelector(".loader")

export function createGallery(images) {
    const markUp = images.map( ({largeImageURL, webformatURL}) => `
      <li>
      <a href="${largeImageURL}">
      <img src="${webformatURL}" alt=""></a></li>  `

    ).join("");

    list.innerHTML = markUp;
    lightbox.refresh();
}

export function showLoader() {
loader.classList.remove('is-hidden')
}

export function hideLoader() {
loader.classList.add('is-hidden')
}