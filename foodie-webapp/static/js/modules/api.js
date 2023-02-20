import * as config from "./config.js";
import { createSkeleton } from "./loader.js";
console.log("API.js is loaded");

const results = document.querySelector(".results");
const items = document.querySelector(".items");

export async function getData() {
    createSkeleton();
	let res = await fetch("https://nl.openfoodfacts.org/cgi/search.pl?search_terms=" + config.default.searchQuery + "&page=" + config.default.currentPage + "&json=true");
	return await res.json();
}

export function showData(data) {
    config.default.totalPages = data.count / data.page_size;
    results.textContent = data.count + " results found - Page " + data.page + " of " + Math.ceil(config.default.totalPages);
    items.innerHTML = "";
    for (let i = 0; i < data.products.length; i++) {
        // Create div
        const item = document.createElement("div");
        item.id = data.products[i]._id;
        item.classList.add = "item";
        items.appendChild(item);

        // Create image inside div
        const image = document.createElement("img");
        image.src = data.products[i].image_url;
        item.appendChild(image);

        // Create title inside div
        const title = document.createElement("p");
        title.textContent = data.products[i].product_name;
        item.appendChild(title);

        // Create button inside div
        const button = document.createElement("button");
        button.textContent = "Meer info";
        button.id = data.products[i]._id;
        item.appendChild(button);
    }
}

