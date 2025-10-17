import axios from 'axios';
import { createGallery } from './render-function';
import { refs } from '../main';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const API_KEY = '52796639-16b0da086bf021f69585a6f18';
const URL = 'https://pixabay.com/api/';

// export function getImagesByQuery(query) {
//     axios
//         .get(URL, {
//             params: {
//                 key: API_KEY,
//                 q: refs.input.value,
//                 image_type: "photo",
//                 orientation: "horizontal",
//                 safesearch: true,
//             },
//         })
//         .then(response => {
//             console.log(response.data);
//             if (response.data.hits.length > 0) {
//                 refs.gallary.innerHTML = createGallery(response.data.hits);
//             } else {
//                 iziToast.error({
//                     position: "topRight",
//                     message: "Sorry, there are no images matching your search query. Please try again!",
//                     messageColor: "#fff",
//                     backgroundColor: "#ef4040"
//                 })
//             }
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }


export function getImagesByQuery(query) {
    return axios
        .get(URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                per_page: 12
            },
        })
        .then(response => response.data)
        .catch(error => {
            console.error('Pixabay API error:', error);
            throw error;
        });
}