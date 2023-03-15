// console.log("welcome to Spotify")  
let songIndex=0;
let audioElement = new Audio("songs/withoutmeSong.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("songProgressBar");
let listSymbol=document.getElementsByClassName("songPlay");
let gif = document.getElementById("gif");
let barSongName = document.getElementById("barSongName");
let timeStamp=document.getElementsByClassName("timeStamp");
const songItems=Array.from(document.getElementsByClassName("songItem"));
const songs=[
    {songName: "Without Me",filePath:"songs/withoutmeSong.mp3" ,coverPath:"covers/images.jpg"},
    {songName: "Aadat",filePath:"songs/aadat.mp3" ,coverPath:"covers/1.jpg"},
    {songName: "Baarishein",filePath:"songs/baarishein.mp3" ,coverPath:"covers/2.jpg"},
    {songName: "Dance Monkey",filePath:"songs/danceMonkey.mp3" ,coverPath:"covers/3.jpg"},
    {songName: "I Was Never There",filePath:"songs/iWasNeverThere.mp3" ,coverPath:"covers/4.jpg"},
    {songName: "Kabhi Jo Badal Barse",filePath:"songs/kabhiJoBadal.mp3" ,coverPath:"covers/5.jpg"},
    {songName: "Laal Bindi",filePath:"songs/laalBindi.mp3" ,coverPath:"covers/6.jpg"},
    {songName: "Stereo Hearts",filePath:"songs/stereoHearts.mp3" ,coverPath:"covers/7.jpg"},
    {songName: "Under The Influence",filePath:"songs/underTheInfluence.mp3" ,coverPath:"covers/8.jpg"},
    {songName: "Zara Sa ",filePath:"songs/zaraSa.mp3" ,coverPath:"covers/9.jpg"},
]  
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// audioElement.play();
// HANDLE PLAY/PAUSE CLICK
 masterPlay.addEventListener("click",()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play();
       masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;
        e.target.classList.remove("fa-pause-circle");
        e.target.classList.add("fa-play-circle");
    }
})
// LISTEN TO EVENTS
audioElement.addEventListener("timeupdate", ()=>{
    // SEEKBAR UPDATE
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value =progress;
})
progressBar.addEventListener("change",()=>{
    audioElement.currentTime=((progressBar.value*audioElement.duration)/100);

    
})

//CHANGE THE TIME STAMP 
// songItems.forEach((element,i)=>{
//     let t =audioElement[i].duration;

//     element.getElementsByClassName("timeStamp")[0].innerText=songs[i].time;
// })





const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
    
}
Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
            makeAllPlay();
            songIndex=parseInt(e.target.id);
            barSongName.innerHTML=songs[songIndex].songName;
            
        
        if(audioElement.paused) 
        {
            console.log("play");
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            audioElement.src=songs[songIndex].filePath;
            audioElement.currentTime=0; 
            audioElement.play();
            gif.style.opacity=1;
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
        }
        else {
            console.log("trigger");
            audioElement.src=songs[songIndex].filePath;
            audioElement.pause();
            e.target.classList.remove("fa-pause-circle");
            e.target.classList.add("fa-play-circle");
            masterPlay.classList.remove("fa-pause-circle");
            masterPlay.classList.add("fa-play-circle");
            gif.style.opacity=0;

        }
        

    })
})
document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0)
    {
        songIndex=9;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=songs[songIndex].filePath;
    barSongName.innerHTML=songs[songIndex].songName;
    audioElement.currentTime=0; 
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=9)
    {
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=songs[songIndex].filePath;
    barSongName.innerHTML=songs[songIndex].songName;
    audioElement.currentTime=0; 
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})
//PLAYING NEXT SONG ON ENDING THE PROGRESS BAR
audioElement.addEventListener("ended",()=>{
    if(songIndex<9)
    {
        let i=songIndex;
        audioElement.src=songs[i+1].filePath;
        barSongName.innerHTML=songs[i+1].songName;
        audioElement.currentTime=0; 
        audioElement.play();
    songIndex++;
    }
    else{
        let i=0;
        audioElement.src=songs[i].filePath;
        barSongName.innerHTML=songs[i].songName;
        audioElement.currentTime=0; 
        audioElement.play();
        songIndex=0;
        
    }
    
})