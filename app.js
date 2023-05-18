import { getImages, loading } from "./functions/images-api.js";

// select DOM elements
export const imgListContainer = document.getElementById("images-list");

// NOTE! size values have no effect. Check README.md for details (section "Issues")

// images' size (in)
const imgWidth = 1920;
const imgHeight = 1080;
// number of pictures to load
export const imagesPerFetch = 5;

// load initial images
getImages(imagesPerFetch, imgWidth, imgHeight);
