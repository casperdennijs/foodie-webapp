import { router } from "./modules/router.js";
import { searchResults } from "./modules/search.js";
import { previousPage, nextPage } from "./modules/pagination.js";

const searchForm = document.querySelector("form");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

router();

searchForm.addEventListener("submit", searchResults);
previousButton.addEventListener("click", previousPage);
nextButton.addEventListener("click", nextPage);
