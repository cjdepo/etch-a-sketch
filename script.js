const container = document.querySelector(".container");
for (i=1; i<=(16**2); i++) {
    let item = document.createElement("div");
    item.classList.add("item");
    container.appendChild(item);
}

