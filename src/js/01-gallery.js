import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


const gallery = document.querySelector('.gallery');

const makeGallery = createItemsPicture(galleryItems);

function createItemsPicture(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    }).join("");
}

gallery.insertAdjacentHTML("beforeend", makeGallery);




const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250
 });

