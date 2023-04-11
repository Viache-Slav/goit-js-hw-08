// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery')
const listEl = []

galleryItems.forEach(element => {
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = element.original
	const galleryImage = document.createElement('img')
	galleryImage.className = 'gallery__image'
	galleryImage.src = element.preview
	galleryImage.setAttribute('title', element.description)
	galleryImage.alt = element.description

	galleryLink.append(galleryImage)
	listEl.push(galleryLink)
})
galleryEl.append(...listEl)

new SimpleLightbox('.gallery a', {
	captionDelay: 250
}) 