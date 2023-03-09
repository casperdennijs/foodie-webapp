import { getProduct } from "./api.js";

export const modal = document.querySelector(".modal");

export function showDetails(id) {
    modal.classList.add("enabled");
    getProduct(id);
}

modal.addEventListener("click", () => {
    modal.classList.remove("enabled");
    window.location.hash = "#home"
})