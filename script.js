let display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
    function deleteLast(){
    display.value = display.value.slice(0,-1);
}
}
function toggleMode(){
    document.body.classList.toggle("dark");
}
function deleteLast(){
    display.value = display.value.slice(0,-1);
}

document.addEventListener("keydown", function(event){

    let key = event.key;

    // numbers (works for both top row and numpad)
    if(key >= "0" && key <= "9"){
        display.value += key;
    }

    // operators
    if(key === "+" || key === "-" || key === "*" || key === "/" || key === "%" || key === "**"){
        display.value += key;
    }

    // decimal
    if(key === "."){
        display.value += key;
    }

    // Enter key
    if(key === "Enter"){
        calculate();
    }

    // Backspace
    if(key === "Backspace"){
        deleteLast();
    }

});
