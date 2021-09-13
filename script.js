
let setup = function(rows) {
    const container = document.querySelector(".container");
    container.setAttribute("style", "display: grid; grid-template-columns: repeat("+ rows + ", 1fr); grid-template-rows: repeat(" + rows + ", 1fr);");
    container.querySelectorAll('*').forEach(n => n.remove());
    for (i=1; i<=(rows**2); i++) {
        let item = document.createElement("div");
        item.classList.add("item");
        container.appendChild(item); }
    }

setup(16);

const items = document.querySelectorAll(".item");
items.forEach( (item) => addEventListener("mouseover", function(e) {e.target.style.background = 'white';}));

let colorChange = function() {
    items.forEach( function(item) { item.style.background = 'black'});
}

function promptMe() {
    let rows = prompt("How many rows?");
    while (rows > 100) {
        alert("Too damn high");
        rows = prompt("How many rows?");
        if (rows <= 100) {
            break;
        }
    } return rows;
}



let restart = function() {
    colorChange();
    rows = promptMe();
    setup(rows);
}

let newGameButton = document.querySelector('button');
newGameButton.addEventListener('click', function(items) {restart() });
