
let incre = document.getElementById("incre");
let dicre = document.getElementById("dicre");

let dua = document.getElementById("dua");
let dua2 = document.getElementById("duaimg");



let imgarr = [
    {
        img2 :  "../images/kalma1.jpg"
    },
   {

        img2 :  "../images/kalma2.jpg",
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

