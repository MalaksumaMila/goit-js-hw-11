import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import {getImagesByQuery} from "./js/pixabay/pixabay-api"
import { createGallery, hideLoader, showLoader } from "./js/pixabay/render";

const form = document.querySelector('.form');

form.addEventListener ("submit", (event) =>{
event.preventDefault();

const inputValue = event.target.elements["search-text"].value.trim();
console.log(inputValue );

if (!inputValue) {
    iziToast.warning({message: 'Заповніть поле'});
    return;
} 

showLoader();

getImagesByQuery(inputValue)
.then ( data => {
    console.log(data)
    if(data.length === 0) {
        iziToast.warning ({message:`Sorry, there are no images matching your search query. Please try again!
`} )
return;
    }
    createGallery(data);
}

)
.catch (error => {
    console.log(error.message)
})

.finally ( () => {
    hideLoader();
})
})

