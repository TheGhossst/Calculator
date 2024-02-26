const  display = document.getElementById("display");
console.log(display);

function toDisplay(input){
    display.value += input;
}

function  clearDisplay(){
    display.value = "";
}

function calculate(){
    try {display.value = eval(display.value)}
    catch(error){
        alert("Error")
        clearDisplay();
    }
}