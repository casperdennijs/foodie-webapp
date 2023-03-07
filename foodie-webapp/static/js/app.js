import { router } from "./modules/router.js";
import { searchResults } from "./modules/search.js";
import { previousPage, nextPage } from "./modules/pagination.js";
import { createVideo } from "./modules/camera.js";

const searchForm = document.querySelector("form");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const scanButton = document.querySelector(".scanner")

if (window.location.hash == "") {
    window.location.hash = "#home"
}

router();

searchForm.addEventListener("submit", searchResults);
previousButton.addEventListener("click", previousPage);
nextButton.addEventListener("click", nextPage);
scanButton.addEventListener('click', createVideo)
