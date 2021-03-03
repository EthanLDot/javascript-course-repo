var offset = 0;
const hourHand = document.querySelector('[data-hour-hand');
const minuteHand = document.querySelector('[data-minute-hand');
const secondHand = document.querySelector('[data-second-hand');
setInterval(printTime, 1000)
    
function readForm(){
    radioButtons = document.getElementsByName("timezone");
    inputVal = radioButtons[0].value;
    for(var i = 0; i < radioButtons.length; i++)
    {
        if(radioButtons[i].checked == true)
        {
            inputVal = radioButtons[i].value;
        }
    }
    document.getElementById("printTz").innerHTML = inputVal;
    switch(inputVal){
        case "hst":
            offset = -2;
            break;
        case "ast":
            offset = -1;
            break;
        case "ast":
            offset = 0;
            break;
        case "mst":
            offset = 1;
            break;
        case "cst":
            offset = 2;
            break;
        case "est":
            offset = 3;
            break;
        default:
            offset = 0;
            break;
    }        

}

function printTime(){

    const day = new Date();
    const secondsRatio = day.getSeconds()/60;
    const minutesRatio = (day.getMinutes() + secondsRatio)/60;
    const hoursRatio = (day.getHours() + minutesRatio + offset) /12;
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio)
{
    element.style.setProperty(`--rotation`, rotationRatio * 360);
}
printTime();