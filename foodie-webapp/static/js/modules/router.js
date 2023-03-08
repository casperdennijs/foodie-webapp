import * as config from "./config.js";
import { getProducts } from "./api.js";
import { showDetails } from "./product.js";

export function router() {
    routie({
        'home': () => {
            getProducts();
        },
        'search/:id': id => {
            config.default.searchQuery = id;
            console.log("Zoeken naar:" + config.default.searchQuery);
            getProducts();
        },
        'product/:id': id => {
            showDetails(id);
        }
    })
}