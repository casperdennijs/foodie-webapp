import * as config from "./config.js";
import { getProducts } from "./api.js";
console.log("Pagination.js is loaded");

export function previousPage() {
    if (config.default.currentPage == "1") {
        config.default.currentPage = config.default.totalPages
    } else {
        config.default.currentPage--
    }
    config.default.currentPage = Math.ceil(config.default.currentPage)

    getProducts();
}

export function nextPage() {
    if (config.default.currentPage == Math.ceil(config.default.totalPages)) {
        config.default.currentPage = 1
    } else {
        config.default.currentPage++
    }
    config.default.currentPage = Math.ceil(config.default.currentPage)

    getProducts();
}