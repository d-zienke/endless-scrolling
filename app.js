import { getImages } from "./functions/images-api.js";

// select DOM elements
export const imgListContainer = document.getElementById("images-list");

const imagesPerFetch = 5;

// initial images
getImages(imagesPerFetch);
