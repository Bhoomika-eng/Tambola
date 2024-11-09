// Selecting the container with id "grid"
const container = document.getElementById("Grid");
let htmlContent = '';

//generating the grid
for (let i = 1; i <= 90; i++) {
    htmlContent += `<div class="box${i}">${i}</div>`;
}
console.log(htmlContent);
container.innerHTML = htmlContent; // Injecting the generated HTML into the container

function resetBoard(){
    let boxes = document.querySelectorAll("#grid .box");
    boxes.forEach(box => {
        box.style.backgroundColor = "white";
    });
    document.querySelector(".number").textContent = "";
    document.querySelector(".fullMessage").innerHTML = "";
    list.fill(0);
    count=0;
    let currno = numberContainer.querySelectorAll('.nos');
    currno.forEach((el, index) => {
        el.textContent = '-'; 
    });
    lastFive.fill(0);
}

