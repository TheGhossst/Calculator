const  display = document.getElementById("display");
console.log(display);

function toDisplay(input){
    display.value += input;
}

function  clearDisplay(){
    display.value = "";
}