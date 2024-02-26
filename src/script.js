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

function backSpace(){
    if (display.value == ""){console.log("Empty")};
    display.value = display.value.substring(0, display.value.length - 1);
}