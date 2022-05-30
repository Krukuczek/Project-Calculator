const posibbleKeys=['0','1','2','3','4','5','6','7','8','9','.','=','Enter','Backspace','+','/','-','*']
let screenNumber="";
let lastResult="";
let result="0";

const keyboard=document.querySelectorAll(".keyBtn");
keyboard.forEach(btn=> {
    btn.addEventListener("click",function(e){
        return displayOnScreen(this.id);
    });
});
document.addEventListener("keydown",function(e){
    posibbleKeys.forEach(element=>{
        if(element===e.key){
            return(displayOnScreen(element));
        };
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
        case "Backspace":
            screenNumber=screenNumber.slice(0, -10);
            break;
        case "ac":
            screenNumber="";
            showResult.innerText="";
            lastResult="";
            result="0";
            break;
        case "=":
            screenNumber=screenNumber.slice(0, -1);
            operate(showResult);
            lastResult=screenNumber;
            screenNumber="";
            break;
        case "Enter":
            screenNumber=screenNumber.slice(0, -5);
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
            case "*":
            screenNumber=result+screenNumber;
        }
        result=eval(screenNumber);
        if(result===Infinity){
            alert("don't divide by zero!!");
            return "0";
        }else if(result===NaN || result===undefined){
            alert("i have little problem with that :(")
            return "0";
        }
        return result;
        
    }
function doAFlip(){
    const calculator=document.getElementById("calculator");
    const timing= {
        duration: 500,
        iterations: 1,
    };
    const spinning= [
        { transform: 'rotate(0) scale(0.8)' },
        { transform: 'rotate(360deg) scale(1)' },
      ];
    calculator.animate(spinning,timing); 
}
function magic(){
    const calculator=document.getElementById("calculator");
    calculator.classList.toggle("wrapper")
}