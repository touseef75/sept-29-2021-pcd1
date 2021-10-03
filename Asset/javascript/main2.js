
let incre = document.getElementById("incre");

let head2 = document.getElementById("head2");
let dua2 = document.getElementById("duaimg");
let meaning = document.getElementById("meaning");


let imgarr = [
    {
        head2s:"سورة الكوثر",
        meanings : "اِنَّاۤ اَعۡطَيۡنٰكَ الۡكَوۡثَرَؕ‏ فَصَلِّ لِرَبِّكَ وَانۡحَرۡ ؕ‏ <br> اِنَّ شَانِئَكَ هُوَ الۡاَبۡتَرُ",
        img2 :  "../images/quraan.jpg"
    },
   {
        head2s:"سورة الإخلاص",
        meanings :"قُلۡ هُوَ اللّٰهُ اَحَدٌ‌ۚ‏اللّٰهُ الصَّمَدُ‌ۚ‏ لَمۡ يَلِدۡ وَلَمۡ يُوۡلَدۡۙ‏ <br> وَلَمۡ يَكُنۡ لَّهٗ كُفُوًا اَحَدٌ",
        img2 :  "../images/quraan.jpg"
    },  
]

let num1 = 1;
incre.addEventListener("click",function(){
    if(num1 == 2){
        num1 = 0;
    head2.innerHTML = imgarr[num1].head2s;
    meaning.innerHTML = imgarr[num1].meanings;
    
    }else{
    head2.innerHTML = imgarr[num1].head2s;
    meaning.innerHTML = imgarr[num1].meanings;

    num1++;

    }
})

