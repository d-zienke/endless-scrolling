import { imagesPerFetch, imgListContainer } from "../app.js";
export { getImages, loading };

let loading = false;
let counter = 0;

// get and render images
function getImages(amount, imgWidth, imgHeight) {
	// specify base URL
	counter = 0;
	loading = true;
	try {
		for (let i = 0; i < amount; i++) {
			const baseUrl = `https://picsum.photos/${imgWidth}/${imgHeight}?random=${i}.webp`;
			getFinalUrl(baseUrl);
		}
	} catch (error) {
		throw new Error(error);
	}
}

// create and render DOM element for image
function renderImage(author, srcUrl, imgUrl) {
	// create container for <a> and <img>
	const element = document.createElement("div");
	element.classList.add("images-list__item");
	// create <a> directing to image's source
	const sourceLink = document.createElement("a");
	sourceLink.setAttribute("href", srcUrl);
	sourceLink.setAttribute("target", "_blank");
	// create <img>
	const image = document.createElement("img");
	image.classList.add("images-list__image");
	image.setAttribute("src", imgUrl);
	image.setAttribute("title", `Image by: ${author}`);
	// append whole item to imgListContainer
	sourceLink.appendChild(image);
	element.appendChild(sourceLink);
	imgListContainer.appendChild(element);
	// count each rendered item
	counter++;
	// withhold making new API call until these items have been rendered
	if (counter === imagesPerFetch) loading = false;
}

// use final URL to get image's metadata
async function getImgMetadata(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		renderImage(data.author, data.url, data.download_url);
	} catch (error) {
		throw new Error(error);
	}
}

// retrieve final destination URL
async function getFinalUrl(baseUrl) {
	try {
		const response = await fetch(baseUrl);
		const finalUrl = response.url;
		// find the starting index of ID substring
		const imgIdIndexStart = finalUrl.indexOf("id/") + 3;
		// get ID substring
		const imgIdStart = finalUrl.slice(imgIdIndexStart);
		// check how many letters has ID
		const imgIdIndexLength = imgIdStart.indexOf("/");
		// get image's ID
		const imgId = imgIdStart.slice(0, imgIdIndexLength);
		const imgUrl = `https://picsum.photos/id/${imgId}/info`;
		getImgMetadata(imgUrl);
	} catch (error) {
		throw new Error(error);
	}
}
