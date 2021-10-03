
let incre = document.getElementById("incre");

let dua2 = document.getElementById("duaimg");

let audio = document.getElementById("audio");



let imgarr = [
    {
        img2 :  "../images/Kalmay-3.jpg"
    },
   {

        img2 :  "../images/Kalmay-4.jpg",
    },
]


let num1 = 1;
incre.addEventListener("click",function(){
    if(num1 == 2){
        num1 = 0;
    dua2.src = imgarr[num1].img2;
    
    }else{
    dua2.src = imgarr[num1].img2;
    num1++;
    }
})

