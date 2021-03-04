var offset = 0;
const hourHand = document.querySelector('[data-hour-hand');
const minuteHand = document.querySelector('[data-minute-hand');
const secondHand = document.querySelector('[data-second-hand');
var digital = document.getElementById('digital clock');
var analog = document.getElementById('printClock')
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

    var myTime = new Date();
    var hr = (myTime.getHours() + offset) % 24;
    var min = myTime.getMinutes();
    var sec = myTime.getSeconds();
    var session;
    if(hr < 0)
    {
        hr = 24 + hr
    }

    if(hr >= 12)
    {
            
    session = "pm";

    if(hr > 12)
    {
                hr = hr % 12;
    }
    }
    else{
        session = "am";
    }
    var myZeroesMin = "";
    if(min < 10)
    {
        myZeroesMin = "0";
    }
    var myZeroesSec = "";
    if(sec < 10)
    {
        myZeroesSec = "0";
    }
    var printVal = hr + ":" + myZeroesMin + min + ":" + myZeroesSec + sec + session;
    document.getElementById("digital clock").innerHTML = printVal;
    setTimeout(printTime, 1000);
}



function setRotation(element, rotationRatio)
{
    element.style.setProperty(`--rotation`, rotationRatio * 360);
}
printTime();

function setDigital()
{
    analog.style.display = "none"
    digital.style.display = "flex"
}

function setAnalog()
{
    analog.style.display = "flex"
    digital.style.display = "none"
}

setAnalog()

function setDay()
{
    document.body.style.backgroundColor = "teal";
}

function setNight()
{
    document.body.style.backgroundColor ="black";

}