
const button=document.getElementById('button');
const videoElement=document.getElementById('video');


async function selectVideo(){

    try{
      const mediaStream=await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject=mediaStream;
      videoElement.onloadedmetadata=()=>{
          videoElement.play()
      }
    }catch(err){
console.log('some thing went wrong ',err);
    }
}
button.addEventListener('click',async ()=>{
button.disabled=true;
await videoElement.requestPictureInPicture();
button.disabled=false;
});
selectVideo();