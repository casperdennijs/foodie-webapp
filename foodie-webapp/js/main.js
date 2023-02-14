const items = document.querySelector(".items")
const searchForm = document.querySelector("header form")
let searchQuery = ""

async function getData() {
	let res = await fetch("https://nl.openfoodfacts.org/cgi/search.pl?search_terms="+ searchQuery +"&json=true")
	return await res.json();
}

function showData(data) {
    items.innerHTML = "";
    for (let i = 0; i < data.products.length; i++) {
        // Create div
        const item = document.createElement("div");
        item.id = data.products[i]._id;
        item.classList.add = "item";
        items.appendChild(item);

        // Create image inside div
        const image = document.createElement("img");
        image.src = data.products[i].image_url;
        item.appendChild(image);

        // Create title inside div
        const title = document.createElement("p");
        title.textContent = data.products[i].product_name;
        item.appendChild(title);

        // Create button inside div
        const button = document.createElement("button");
        button.textContent = "Meer info";
        button.id = data.products[i]._id;
        item.appendChild(button);
    }
}

getData()
    .then(data => {
    showData(data)
})

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = event.target.querySelector("input")
    if (input.value == "") {
        console.log("Geen zoekterm ingevuld")
    } else {
        searchQuery = input.value
        getData()
            .then(data => {
            showData(data)
        })
    }
})