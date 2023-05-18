// select DOM elements
const imgListContainer = document.getElementById("images-list");
// specify base URL
const baseUrl = `https://picsum.photos/1920/1080?random=1.webp`;

for (let i = 0; i < 5; i++) {
	// retrieve final destination URL
	fetch(baseUrl)
		.then((response) => response.url)
		.then((finalUrl) => {
			// find the starting index of ID substring
			const imgIdIndexStart = finalUrl.indexOf("id/") + 3;
			// get ID substring
			const imgIdStart = finalUrl.slice(imgIdIndexStart);
			// check how many letters has ID
			const imgIdIndexLength = imgIdStart.indexOf("/");
			// get image's ID
			const imgId = imgIdStart.slice(0, imgIdIndexLength);
			// use final URL to get image's metadata
			fetch(`https://picsum.photos/id/${imgId}/info`)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					// render DOM element with image
					renderImage(data.author, data.url, data.download_url);
				});
		})
		.catch((error) => {
			console.error("Error:", error);
			// Handle any errors that occurred during the process
		});
}

function renderImage(author, url, srcUrl) {
	const element = document.createElement("div");
	element.classList.add("images-list__item");
	const sourceLink = document.createElement("a");
	sourceLink.setAttribute("href", url);
	sourceLink.setAttribute("target", "_blank");
	const image = document.createElement("img");
	image.classList.add("images-list__image");
	image.setAttribute("src", srcUrl);
	image.setAttribute("title", `Image by: ${author}`);
	sourceLink.appendChild(image);
	element.appendChild(sourceLink);
	imgListContainer.appendChild(element);
}
