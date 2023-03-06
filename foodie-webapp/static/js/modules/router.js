import * as config from "./config.js";
import { getData } from "./api.js";

export function router() {
    routie({
        'home': () => {
            getData();
        },
        'search/:id': id => {
            config.default.searchQuery = id;
            console.log("Zoeken naar:" + config.default.searchQuery);
            getData();
        }
    })
}