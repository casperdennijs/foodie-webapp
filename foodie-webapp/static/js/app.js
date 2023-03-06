import { router } from "./modules/router.js";
import { searchResults } from "./modules/search.js";
import { previousPage, nextPage } from "./modules/pagination.js";

const searchForm = document.querySelector("form");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

if (window.location.hash == "") {
    window.location.hash = "#home"
}

router();

searchForm.addEventListener("submit", searchResults);
previousButton.addEventListener("click", previousPage);
nextButton.addEventListener("click", nextPage);
