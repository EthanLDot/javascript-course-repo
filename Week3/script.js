var offset = 0;
    
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
    //document.getElementById("printClock").innerHTML = printVal;
    setTimeout(printTime, 1000);
}
printTime();