let timer=document.getElementById('timer')
let content=document.getElementById('content')
let type=document.getElementById('type')

function fetchData(){
    return fetch('https://api.quotable.io/random').then((res)=>res.json()).then((d)=>d.content)
}
var data
let startTime
async function renderData(){
    startTime=new Date()
    type.value=null
    content.innerText=null
   data=await fetchData() 
   const arrSpan=data.split('')
arrSpan.forEach((el,ind)=>{
    const element=document.createElement('span')
    element.innerText=el
    content.appendChild(element)
})
}
var correct=true
renderData()
type.addEventListener('input',()=>{
    const typed_data=type.value.split('')
    const content_span=document.querySelectorAll('span')
    content_span.forEach((el,ind)=>{
        correct=true
        let value=typed_data[ind]
        if(value==null){
         content_span[ind].classList.remove('correct')
         content_span[ind].classList.remove('incorrect')
         correct=false
        }else if(el.innerText==value){
         content_span[ind].classList.remove('incorrect')
         content_span[ind].classList.add('correct')
        }else{
            content_span[ind].classList.remove('correct')
            content_span[ind].classList.add('incorrect')
           correct=false
        }
    })
    if(correct){
    renderData()
    }
})
let time
function startTimer(){
    time=Math.floor((new Date()-startTime)/1000)
    timer.classList.remove('Red')
    if(time>50)
    timer.classList.add('Red')
    timer.innerText=time
}
setInterval(startTimer,1000)