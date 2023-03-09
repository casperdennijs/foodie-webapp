import * as config from "./config.js";
console.log("Search.js is loaded");

export function searchResults(event) {
    event.preventDefault();
    const input = event.target.querySelector("input")
    if (input.value == "") {
        config.default.searchQuery = "";
        config.default.currentPage = 1
        window.location.hash = "#home"
    } else {
        config.default.searchQuery = input.value
        config.default.currentPage = 1
        window.location.hash = "#search/" + input.value;
    }
}