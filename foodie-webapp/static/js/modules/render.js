import * as config from "./config.js";
import { getData } from "./api.js";

const results = document.querySelector(".results");
const items = document.querySelector(".items");
const errors = document.querySelector(".errors");

export function renderData(data) {
    console.log("Render function")
    config.default.totalPages = data.count / data.page_size;
    results.textContent = data.count + " results found - Page " + data.page + " of " + Math.ceil(config.default.totalPages);
    errors.innerHTML = "";
    items.innerHTML = "";
    for (let i = 0; i < data.products.length; i++) {
        // Create div
        const item = document.createElement("div");
        item.id = data.products[i]._id;
        item.classList.add("item");
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

export function renderEmpty(data){
    console.log("RenderEmpty function");

    items.innerHTML = "";
    errors.innerHTML = "";

    const error = document.createElement("div");
    error.classList.add("empty")
    errors.appendChild(error);

    const title = document.createElement("p");
    title.textContent = "Geen resultaten gevonden...";
    error.appendChild(title);

    const button = document.createElement("button");
    button.textContent = "Terug naar begin";
    button.classList.add("home")
    button.addEventListener("click", () => {
        errors.innerHTML = "";
        config.default.searchQuery = "";
        config.default.currentPage = 1;
        getData();
    })
    error.appendChild(button);
}

export function renderError(err) {
    console.log("RenderError function");

    items.innerHTML = "";

    const error = document.createElement("div");
    error.classList.add("error")
    errors.appendChild(error);

    const title = document.createElement("p");
    title.textContent = "Er is een fout opgetreden... :(";
    error.appendChild(title);

    const button = document.createElement("button");
    button.textContent = "Opnieuw proberen";
    button.classList.add("retry")
    button.addEventListener("click", () => {
        errors.innerHTML = "";
        getData();
    })
    error.appendChild(button);
}
