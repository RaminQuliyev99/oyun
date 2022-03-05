let x = Math.floor( Math.random() * 10 + 1) ;
let y = document.getElementById("inp");
let bel= document.getElementById("bel");
let z= x&&y>=3;

console.log(x);

function test(){
    if(x==y.value){
        alert("Tebrikler");
    }
    else{alert("bextinizi bir daha sinayin")};
    // else if (y.value<x){ 
    //     bel.textContent("duzgun cavabdan asaqidasiniz");
    // }
    // else if (y.value>x){
    //     bel.textContent("duzgun cavabdan yuxaridasiniz");
    // };
    
    
};