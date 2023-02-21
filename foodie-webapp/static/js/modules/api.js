import * as config from "./config.js";
import { createSkeleton } from "./loader.js";
import { renderData, renderEmpty, renderError } from "./render.js";
console.log("API.js is loaded");

export function getData() {
    createSkeleton();
    fetch("https://nl.openfoodfacts.org/cgi/search.pl?search_terms=" + config.default.searchQuery + "&page=" + config.default.currentPage + "&json=true")
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.page_count == 0) {
                renderEmpty(data);  
            } else {
                renderData(data);
            }
        })
        .catch(err => {
            console.log(err);
            renderError(err);
        });
}
