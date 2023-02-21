import { getData } from "./modules/api.js";
import { searchResults } from "./modules/search.js";
import { previousPage, nextPage } from "./modules/pagination.js";

const searchForm = document.querySelector("form");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

getData();

searchForm.addEventListener("submit", searchResults);
previousButton.addEventListener("click", previousPage);
nextButton.addEventListener("click", nextPage);
