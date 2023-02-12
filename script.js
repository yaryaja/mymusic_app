console.log("welcome to spotify");
let songIndex=0;
let audioElement=new Audio('song/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let progressbar=document.getElementById('progressbar');
let op=document.getElementById('op');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songname:"Jack sparrow BGM",filePath:"song/1.mp3",coverPath:"covers/2.jpeg"},
    {songname:"besharam rang",filePath:"song/2.mp3",coverPath:"covers/1.jpg"},
    {songname:"Dhoka",filePath:"song/3.mp3",coverPath:"covers/1.jpg"},
    {songname:"dil galti kar baitha",filePath:"song/4.mp3",coverPath:"covers/1.jpg"},
    {songname:"jhoome jo pathaan",filePath:"song/6.mp3",coverPath:"covers/1.jpg"},
    {songname:"maan meri jaan",filePath:"song/6.mp3",coverPath:"covers/1.jpg"},
    {songname:"tumse pyaar karke",filePath:"song/5.mp3",coverPath:"covers/1.jpg"},
    {songname:"yei re",filePath:"song/5.mp3",coverPath:"covers/1.jpg"},
]
songItems.forEach((element,i) => {  
         let curraudioElement=new Audio('song/2.mp3');
          element.getElementsByTagName("img")[0].src=songs[i].coverPath;
        element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
      
       
});
//event listening
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        op.style.opacity=1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        op.style.opacity=0;

    }
})

const myFunction=()=>{
    if(songIndex>=7)songIndex=0;
        else songIndex+=1;
        audioElement.src=`song/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
       
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        op.style.opacity=1;
        document.getElementsByClassName('songinformation')[0].innerText=songs[songIndex].songname;
   

    
    
}
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressbar.value=progress;
    

    if(progress==100){
        setTimeout(myFunction, 4000);
        
        
    
    }
   
    
})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime=(progressbar.value*audioElement.duration)/100;
})

const makeallPlay=()=>{
    Array.from(document.getElementsByClassName('songplays')).forEach((element)=>{
       element.classList.remove('fa-circle-pause');
       element.classList.add('fa-circle-play');
   

    })
    
}

Array.from(document.getElementsByClassName('songplays')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            makeallPlay();
        songIndex=parseInt(e.target.id);
      
        
        e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       audioElement.src=`song/${songIndex+1}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
       op.style.opacity=1;
       document.getElementsByClassName('songinformation')[0].innerText=songs[songIndex].songname;
      
       
        }
        else{
            audioElement.pause();
            e.target.classList.add('fa-circle-play');
            e.target.classList.remove('fa-circle-pause');
            op.style.opacity=0;
        }

       
      
       
      
    });
})


document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)songIndex=0;
    else songIndex-=1;
    audioElement.src=`song/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    op.style.opacity=1;
    document.getElementsByClassName('songinformation')[0].innerText=songs[songIndex].songname;

})



document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7)songIndex=0;
    else songIndex+=1;
    audioElement.src=`song/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    op.style.opacity=1;
    document.getElementsByClassName('songinformation')[0].innerText=songs[songIndex].songname;;

})
