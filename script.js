let hval, sval = 0;

function updateScore(){
            sval += 10;
            document.querySelector("#scoreval").textContent = sval;
}
function updateTarget(){
hval = Math.floor(Math.random()*10);
document.querySelector("#hitval").textContent = hval;
document.querySelector("#panel-bottom").addEventListener("click", function(details){
    let clickval = Number(details.target.textContent);
     console.log(clickval);
    if(hval === clickval){
        updateScore();
        newBubble();
        updateTarget();
}
})
}
function runTimer(){
    let timer = 60;
    setInterval(function(){
        if(timer > 0)
        {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            document.querySelector("#panel-bottom").innerHTML = "<h1>Game Over</h1>";
            document.querySelector("#hitval").textContent = 0;
        }
    }, 1000);
}
function newBubble(){
let bbl = "";
for(let v = 1; v <= 224; v++)
{
    let val = Math.floor(Math.random()*10);
    bbl += `<div class="bubble">${val}</div>`;
}
document.querySelector("#panel-bottom").innerHTML = bbl;
}
updateTarget();
newBubble();
runTimer();
