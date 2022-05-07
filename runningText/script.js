
let num=document.getElementById("text")
let number=document.getElementById("number")


let str="welcome to my world"
let ind=0;

function timer(){
    if(ind<=str.length)
    document.getElementById("text").innerText=str.slice(0,ind)
    else{
        ind=0;
    }
    ind++;
}
function run(){
  let time=1000/number.value
setInterval(timer,time)
}