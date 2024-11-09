let no,newbox,count=0;
let list=new Array(91).fill(0);
let lastFive = [];
function ifFull(){
  document.getElementById("Full").innerHTML=`Board is full`;
}
const grid = document.getElementById("grid");
for (let i = 1; i <= 90; i++) {
  const box = document.createElement("div");
  box.className = "box";
  box.textContent = i;           // Display the number
  box.setAttribute("data-number", i); // Set a data attribute with the number
  grid.appendChild(box);
}
function changeBoxColor(number) {
  // Select the box with the specified number
  const box = document.querySelector(`#grid .box[data-number="${number}"]`);

  // If the box exists, change its background color
  if (box) {
    box.style.backgroundColor="red";
  } else{
    console.warn(`Box with number ${number} not found.`);
  }
}

function generatingNumber(){
  if(count===90){
    resetBoard();
    return;
  }
  if(count===89){
    ifFull();
  }
  no= Math.floor(Math.random()*90) + 1;
  list[no]+=1;
  if(list[no]===1){ 
    document.querySelector('.number').innerHTML=no;
    count++;
    changeBoxColor(no);
    lastFive.push(no); 
    if (lastFive.length > 5) {
      lastFive.shift();
    }
    updateLastFive();
  }
  else{
    generatingNumber();
  }
}
document.querySelector('.generate').addEventListener('click', function(event) {
  generatingNumber(); 
});
