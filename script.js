const keyboard=document.querySelectorAll(".keyBtn");
let screenNumber="";
keyboard.forEach(btn=> {
    btn.addEventListener("click",function(e){
        return displayOnScreen(this.id);
    });
});

function displayOnScreen(value){
    const screen=document.getElementById("userNumbers");
    screenNumber+=value;
    switch (value){
        case "c":
            screenNumber=screenNumber.slice(0, -1);
        case "ac":
            screenNumber="";
        case "=":
            operate(screenNumber);
            screenNumber="";
    }    
    screen.innerText=screenNumber;
}

function operate(screenNumber){
    const showResult=document.getElementById("result");
    showResult.innerText=parseFloat(screenNumber);
}