
var numberOfDrumButton=document.querySelectorAll(".drum").length;
// for(var i=0;i<numberOfDrumButton;i++){
// document.querySelectorAll('.drum')[i].addEventListener("click",handleClick);
// }
document.querySelector('.w').addEventListener("click",handleClick);
document.querySelector('.a').addEventListener("click",handleClick1);
document.querySelector('.s').addEventListener("click",handleClick2);
document.querySelector('.d').addEventListener("click",handleClick3);
document.querySelector('.j').addEventListener("click",handleClick4);
document.querySelector('.k').addEventListener("click",handleClick5);
document.querySelector('.l').addEventListener("click",handleClick6);


// }
function handleClick(){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}
function handleClick1(){
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
}function handleClick2(){
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
}function handleClick3(){
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
}function handleClick4(){
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
}function handleClick5(){
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
}function handleClick6(){
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
}




// function add(num1,num2){
//     return num1+num2
// }
// function multiply(num1,num2){
//     return num1*num2
// }
// function calculate(num1,num2,operator){
//     return operator(num1,num2);
// }
// console.log(calculate(4,5,add));
// console.log(calculate(4,5,multiply));

debugger;
   calculate(4,5,add);
