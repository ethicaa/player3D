

//following the mouse movement
const pre = document.getElementById("pre");

document.addEventListener("mousemove",(e)=>{
    moveElement(e,pre);
})
function moveElement(event,element){
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;

    //get the middle value
    const middleX = window.innerWidth /2;
    const middleY = window.innerHeight /2;

    // offset from middle
    const offsetX = ((x - middleX) / middleX)* 45;
    const offsetY = ((y - middleY) / middleY)* 45;

    element.style.setProperty("--rotateX", -1 * offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
};

const playBtn = document.querySelector("#playBtn");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const cover = document.querySelector("#cover");
const title = document.querySelector("#title")
const audio = document.querySelector("#audio")
// Songs BuildUp

const songs =
["Be Quiet And Drive (Far Away)",
"Beware",
"Flooded The Face",
"Vamp Anthem",
"A Cold Sunday",
"Secret Recipe",
"My Eyes"];

//Song array
let songIndex = 1;


// Initially load song details into DOM
loadSong(songs[songIndex]);



//Functions
function loadSong(song){
    title.textContent = song;
   audio.src = `songs/${song}.mp3`
   cover.src = `images/${song}.jpg`
}

function playSong(){
   pre.classList.add('play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause');
  
    audio.play();
}

function pauseSong(){
    pre.classList.remove('play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause');
  
    audio.pause();
}

function prevSong(){
    songIndex --
   
    if (songIndex < 0) {
        songIndex = songs.length - 1;
      }
    
      loadSong(songs[songIndex]);
    
      playSong();
}
function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length -1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
  }
// event listeners
playBtn.addEventListener('click', ()=>{
    const songPlaying = pre.classList.contains("play");

    if(songPlaying){
        pauseSong()
    }else{
        playSong()
    }
})

prevBtn.addEventListener("click", prevSong)
nextBtn.addEventListener("click", nextSong)
