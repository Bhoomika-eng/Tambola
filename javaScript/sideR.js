const numberContainer = document.getElementById("Sidenos");
let html = '';
for (let i = 1; i <= 5; i++) {
    html += `<div class="nos">-</div>`;
}
numberContainer.innerHTML = html;

function updateLastFive() {
    const currentNumbers = numberContainer.querySelectorAll('.nos');
    currentNumbers.forEach((el, index) => {
        el.textContent = lastFive[index] || '-'; 
    });
}
console.log(lastFive);
