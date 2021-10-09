
let incre = document.getElementById("incre");

let dua2 = document.getElementById("duaimg");

let audio = document.getElementById("audio");

let change = document.getElementById("img2");




let num2 = 0;
let play = document.querySelector(".play");

play.addEventListener("click",function(){
    if(num2 == 0){
    audio.play();
    change.src = "../images/pause7.jpg";
    num2 = 1;
    }else{
        num2 = 0;
      change.src = "../images/play6.png";
      audio.pause();


    }

}) 


let imgarr = [
    {
        img2 :  "../images/Asarrrr.jpg",

        audios : "../audio/surehAsr.mp3",

    },
   {

        img2 :  "../images/Nasarrr.jpg ",
        audios : "../audio/surehnsr.mp3",

    },
]


let num1 = 1;
incre.addEventListener("click",function(){
    if(num1 == 2){
        num1 = 0;
    dua2.src = imgarr[num1].img2;
    audio.src = imgarr[num1].audios;

    
    }else{
    dua2.src = imgarr[num1].img2;
    audio.src = imgarr[num1].audios;

    num1++;
    }
})
