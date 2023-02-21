import * as config from "./config.js";
import { getData } from "./api.js";
console.log("Search.js is loaded");

export function searchResults(event) {
    event.preventDefault();
    const input = event.target.querySelector("input")
    config.default.searchQuery = input.value
    config.default.currentPage = 1
    getData();
}