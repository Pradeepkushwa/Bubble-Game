var timer=10;
var score=0;
var make="";
function getScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
}
function gethit(){
    intrn=Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent=intrn;
}
function makebubble(){
   

for(var i=1;i<=150;i++){
    var rnint=Math.floor(Math.random()*10)
    make+=`<div class="bubble">${rnint}</div>`
}
document.querySelector('#tbpanel').innerHTML=make;
}
function runtimer(){
   var timerint= setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#runtimer").textContent=timer;
        }
        else{
            clearInterval(timerint)
            document.querySelector("#tbpanel").innerHTML=`Your Score ${score}<br> Game Over`
        }
    },1000)
}
document.querySelector("#tbpanel").addEventListener('click',function(details){
    var clickednum=Number(details.target.textContent)
   if(clickednum===intrn){
    getScore();
    makebubble();
    gethit();
   }
})

gethit();
runtimer();
makebubble();

