// Описаний у документації
import axios from "axios";
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



export async function getImagesByQuery(query) {

    const params = new URLSearchParams ({
        key: "23963114-6d0d5d874ae460d9125bacd21",
        q: query,
        image_type: "photo",
orientation: "horizontal",
safesearch: true,

    })
try {const {data} = await axios(`https://pixabay.com/api/?${params}`)
return data.hits;
 }
catch (error) {
    console.log(error)
}

}

