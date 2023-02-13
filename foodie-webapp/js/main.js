let testP = document.querySelector("p")
const main = document.querySelector("main")

async function getData() {
	let res = await fetch("https://world.openfoodfacts.org?json=true")
	return await res.json();
}

function showData(data) {
    console.log(data.products.length);
    for (let i = 0; i < data.products.length; i++) {
        // Create div
        const item = document.createElement("div")
        item.id = data.products[i]._id
        main.appendChild(item)

        // Create image inside div
        const image = document.createElement("img")
        image.src = data.products[i].image_url
        item.appendChild(image)

        // Create title inside div
        const title = document.createElement("p")
        title.textContent = data.products[i].product_name
        item.appendChild(title)
    }
}

getData()
    .then (data => {
    showData(data)
})