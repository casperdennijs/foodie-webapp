const items = document.querySelector(".items")
const count = 24;

function createSkeleton() {
    items.innerHTML = "";
    for (let i = 0; i < count; i++) {
        // Create div
        const item = document.createElement("div");
        item.classList.add("skeleton-item");
        items.appendChild(item);

        // Create image inside div
        const image = document.createElement("div");
        image.classList.add("skeleton-img");
        item.appendChild(image);

        // Create title inside div
        const title = document.createElement("p");
        title.classList.add("skeleton-p");
        item.appendChild(title);

        // Create button inside div
        const button = document.createElement("button");
        button.classList.add("skeleton-button");
        item.appendChild(button);
    }
}

createSkeleton()