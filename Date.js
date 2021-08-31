// ---------- Taking the date and storing them------------
var date = new Date();
var Hour = date.getHours();
var Minutes = date.getMinutes();
var Seconds = date.getSeconds();
var h2 = document.getElementById("Alarm-Text");


// ------------- Adding 0 in front of the time from 0 to 9 -----------
var H = (Hour >= 0 && Hour < 10)? "0" + Hour :Hour;
var M = (Minutes >= 0 && Minutes < 10)? "0" + Minutes :Minutes;
var S = (Seconds >= 0 && Seconds < 10)? "0" + Seconds :Seconds;


// ----------- Making a string to store them in one variable----
var time = H +":"+ M +":"+ S;

// ------------ Storing Sound For alarm clock------------
var btn = document.getElementById("button");
var sound = document.getElementById("audio");


//---------- Updating the time variable every second to show the time-------
setInterval(function(){
var date = new Date();
var Hour = date.getHours();
var Minutes = date.getMinutes();
var Seconds = date.getSeconds();
var H = (Hour >= 0 && Hour < 10)? "0" + Hour :Hour;
var M = (Minutes >= 0 && Minutes < 10)? "0" + Minutes :Minutes;
var S = (Seconds >= 0 && Seconds < 10)? "0" + Seconds :Seconds;
var time = H +":"+ M +":"+ S;

// Taking User input and storing them for the alarm clock-------
var UserHours = document.getElementById("Uhours").value;
var UserMinutes = document.getElementById("Uminutes").value;
var UserSeconds = document.getElementById("Useconds").value;

// Comparing user input and the current time-------
if(H == UserHours && M == UserMinutes && S == UserSeconds)
    {
        sound.play();
        var b1 = document.createElement("button");
        b1.innerHTML = "Sooze for 5 minutes";
        b1.id = "Made-Btn";
        document.body.appendChild(b1);
        b1.addEventListener("click",callCounter);
        h2.style.textDecoration = "line-through";
        
    }
document.getElementById("time").innerHTML = time;
},1000)
function callCounter()
{
    myvar =  setInterval(counter,1000); //global variable
}
var i =0;
function counter()
{   sound.pause();
    i++;
    console.log(i);
    if(i==300)
    {
        sound.play();
        i = 0;
        clearInterval(myvar);
        
        
    }
}
var h2 = document.getElementById("Alarm-Text");
btn.addEventListener("click",function(){
    var UserHours = document.getElementById("Uhours").value;
    var UserMinutes = document.getElementById("Uminutes").value;
    var UserSeconds = document.getElementById("Useconds").value;
    if(UserMinutes == "" || UserSeconds == "")
    {
        UserMinutes = 0 +"0";
        UserSeconds = 0 + "0";
    }
    h2.innerHTML = "Alarm Set for " + UserHours + " : " + UserMinutes + " : " + UserSeconds;
    h2.style.backgroundColor="inherit";
    h2.style.display = "inline"
})
var imgSun = document.getElementById("img-sun");
var imgMoon = document.getElementById("img-moon");
var container = document.getElementById("container");



// ------------- Changing the background for different times of the day/night ------------------------
var interval = setInterval(BackgroundChange,1000);
function BackgroundChange()
{   console.log("hello");
    if(H>7 && H<19)
    {
        imgMoon.style.display="none";
        document.body.style.backgroundColor="#EE8434";
    }
    else{
        imgSun.style.display = "none";
        container.style.backgroundColor="black";
        document.body.style.backgroundColor="black";
    }
    if(H>7 && H<=13)
    {
        document.body.style.backgroundColor="#3646D3";
        container.style.backgroundImage='linear-gradient(to right, #1BE7FF, #56EEF4)';
    }
    else if(H>13 && H<=17)
    {
        document.body.style.backgroundColor="#FF6201";
        container.style.backgroundImage='linear-gradient(to right, #FAA916, #EA3546)';
    }
    else if(H>17 && H<=21)
    {
        document.body.style.backgroundColor="#1B064B";
        container.style.backgroundImage='linear-gradient(to right, #192276, #0D0106)';
    }
    else if(H>21 && H<=23)
    {
        document.body.style.backgroundColor="#0D0106";
        container.style.backgroundImage='linear-gradient(to right, #0D0106, #191919)';
    }
    else if(H>2 && H<=5)
    {
        document.body.style.backgroundColor="#1E2548";
        container.style.backgroundImage='linear-gradient(to right, #191919, #4361EE)';
    }
    else if(H>5 && H<=7)
    {
        document.body.style.backgroundColor="#39A2DB";
        container.style.backgroundImage='linear-gradient(to right, #185ADB, #4361EE)';
    }
}



