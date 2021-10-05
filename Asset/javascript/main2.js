
let incre = document.getElementById("incre");

let head2 = document.getElementById("head2");
let dua2 = document.getElementById("duaimg");
let meaning = document.getElementById("meaning");

let audio = document.getElementById("audio");

let change = document.getElementById("img2");


let imgarr = [
    {
        head2s:"سورة العصر",
        meanings : "وَالۡعَصۡرِۙ.‏اِنَّ الۡاِنۡسَانَ لَفِىۡ خُسۡرٍۙ‏.اِلَّا الَّذِيۡنَ اٰمَنُوۡا وَ عَمِلُوۡا الصّٰلِحٰتِ<br>وَتَوَاصَوۡا بِالۡحَقِّ ۙ وَتَوَاصَوۡا بِالصَّبۡر",
        img2 :  "../images/quraan.jpg",
        audios : "../audio/surehAsr.mp3",
    },
   {
        head2s:"سورة النصر",
        meanings :"اِذَا جَآءَ نَصۡرُ اللّٰهِ وَالۡفَتۡحُۙ‏.وَرَاَيۡتَ النَّاسَ يَدۡخُلُوۡنَ فِىۡ دِيۡنِ اللّٰهِ اَفۡوَاجًاۙ <br> فَسَبِّحۡ بِحَمۡدِ رَبِّكَ وَاسۡتَغۡفِرۡهُ‌ؔؕ اِنَّهٗ كَانَ تَوَّابًا",
        img2 :  "../images/quraan.jpg",
        audios : "../audio/surehnsr.mp3",

    },  
]

let num1 = 1;
incre.addEventListener("click",function(){
    if(num1 == 2){
        num1 = 0;
    head2.innerHTML = imgarr[num1].head2s;
    meaning.innerHTML = imgarr[num1].meanings;
    audio.src = imgarr[num1].audios;
    
    }else{
    head2.innerHTML = imgarr[num1].head2s;
    meaning.innerHTML = imgarr[num1].meanings;
    audio.src = imgarr[num1].audios;


    num1++;

    }
})

let num2 = 0;
let play = document.querySelector(".play");

play.addEventListener("click",function(){
    if(num2 == 0){
    audio.play();
    change.src = "../images/pause22.png";
    num2 = 1;
    }else{
        num2 = 0;
      change.src = "../images/pla button.png";
    audio.pause();


    }

})