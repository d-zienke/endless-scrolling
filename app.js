import { getImages, loading } from "./src/functions/images-api.js";

// select DOM elements
export const imgListContainer = document.getElementById("images-list");

// NOTE! size values have no effect. Check README.md for details (section "Issues")

// images' size (in)
const imgWidth = 1920;
const imgHeight = 1080;
// number of pictures to load
export const imagesPerFetch = 5;
// vertical offset (in px) from container's bottom border
// new pictures are loaded when this value has been reached while scrolling
const pixelsBeforeFetch = 3000;

// load initial images
getImages(imagesPerFetch, imgWidth, imgHeight);

let scrollData = {};
imgListContainer.addEventListener("scroll", (e) => {
	// vertical scroll position of the scrolling element (in px)
	scrollData.scrollTop = e.target.scrollTop;
	// height of the visible portion of the scrolling element
	scrollData.clientHeight = e.target.clientHeight;
	// total height of the content inside the element
	scrollData.scrollHeight = e.target.scrollHeight;
	// console.log(scrollData);
	if (
		scrollData.scrollTop >
			scrollData.scrollHeight - scrollData.clientHeight - pixelsBeforeFetch &&
		!loading
	) {
		console.log("Loading new images");
		getImages(imagesPerFetch, imgWidth, imgHeight);
	}
});
