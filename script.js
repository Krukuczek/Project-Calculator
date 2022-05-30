
let screenNumber="";
let lastResult="";
let result="0";

const keyboard=document.querySelectorAll(".keyBtn");
keyboard.forEach(btn=> {
    btn.addEventListener("click",function(e){
        return displayOnScreen(this.id);
    });
});

function displayOnScreen(value){
    const screen=document.getElementById("userNumbers");
    const showResult=document.getElementById("result");
    screenNumber+=value;
    switch (value){
        case "c":
            screenNumber=screenNumber.slice(0, -2);
            break;
        case "ac":
            screenNumber="";
            showResult.innerText="";
            lastResult="";
            break;
        case "=":
            screenNumber=screenNumber.slice(0, -1);
            operate(showResult);
            lastResult=screenNumber;
            screenNumber="";
            break;
        case "lr":
            screenNumber=screenNumber.slice(0, -2);
            magic();
            break;
        case "flip":
            doAFlip();
            screenNumber=screenNumber.slice(4, 0);
            break;
    }
    screen.innerText=screenNumber;
}

function operate(showResult){
    showResult.innerText=(screenNumber + "=" + mathIt(screenNumber,lastResult));
}

function mathIt(screenNumber,lastResult) {
        switch (screenNumber[0]){
            case "+":
            screenNumber=result+screenNumber;
            case "-":
            screenNumber=result+screenNumber;
            case "/":
            screenNumber=result+screenNumber;
        }
        result=eval(screenNumber);
        return result;
        
    }
function doAFlip(){
    const calculator=document.getElementById("calculator");
    calculator.classList.remove("wrapper");
    calculator.classList.add("flip");
    setTimeout(()=> {calculator.classList.remove("flip");},1000);  
}
function magic(){
    const calculator=document.getElementById("calculator");
    calculator.classList.toggle("wrapper")
}