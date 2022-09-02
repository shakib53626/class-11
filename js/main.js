

var modal = document.getElementById('modalAll');
var close = document.getElementById('close');
var btn = document.getElementById('btn');

modal.style.display ="none";
btn.addEventListener("click", function(){
    modal.style.display = "block";
})
close.addEventListener("click", function(){
    modal.style.display ="none";
})



// Calculator js Code*******************************************
// *************************************************************


function calcDel(){
    var disp = document.getElementById('display');
    disp.value=disp.value.slice(0, -1);
}



function calcRoot(){
    var rooted = document.getElementById('display').value;
    var a = Math.sqrt(rooted);
    document.getElementById('display').value= a;
}



function calcSquare(){
    var squr = document.getElementById('display').value;
    var b = squr*squr;
    document.getElementById('display').value= b;
}



// love calculator js Code*******************************************
// *************************************************************
function love(){
    var yourname = document.getElementById('yn').value;
    var lovename = document.getElementById('ln').value;

    if(yourname.length<=3){
        alert("Enter at Minimum 4 Characters in Your Name");
    }
    if(lovename.length<=3){
        alert("Enter at Minimum 4 Characters in Lover Name");
    }
    else{
        var random = Math.floor(Math.random()*100);
        document.getElementById('printr').innerHTML = yourname + ' AND ' +lovename+ " = " + random+ "% of love";
    }
    if(random<=30){
        document.getElementById('lovecoment').innerHTML= 'Fake RelationShip';
    }
    else if(random>30 && random<=60){
        document.getElementById('lovecoment').innerHTML='Good RelationShip';
    }
    else if(random>60 && random<=90){
        document.getElementById('lovecoment').innerHTML='Better RelationShip';
    }
    else{
        document.getElementById('lovecoment').innerHTML='Wow Wow RelationShip';
    }
}




// watch******************************************************

function updateClock(){
    // Time and date object......
var date = new Date();
var day = date.getDay();
var month = date.getMonth();
var correntDate = date.getDate();
var year = date.getFullYear();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
document.getElementById('priods').innerText = 'AM';
if(hour == 0){
    hour = 12;
}
if(hour > 12){
    hour = hour -12;
    document.getElementById('priods').innerText = 'PM';

}

Number.prototype.pad = function(digits){
    for(var n = this.toString(); n.length<digits; n= 0+n);
    return n;
}


if(day == 0){
    document.getElementById('dayname').innerText = 'Sunday';
}
else if(day == 1){
    document.getElementById('dayname').innerText = 'Monday';
}
else if(day == 2){
    document.getElementById('dayname').innerText = 'Tuesday';
}
else if(day == 3){
    document.getElementById('dayname').innerText = 'Wednesday';
}
else if(day == 4){
    document.getElementById('dayname').innerText = 'Thursday';
}
else if(day == 5){
    document.getElementById('dayname').innerText = 'Friday';
}
else{
    document.getElementById('dayname').innerText = 'Saterday';
}

// month....


if(month == 0){
    document.getElementById('month').innerText = 'January';
}
else if(month == 1){
    document.getElementById('month').innerText = 'February';
}
else if(month == 2){
    document.getElementById('month').innerText = 'March';
}
else if(month == 3){
    document.getElementById('month').innerText = 'April';
}
else if(month == 4){
    document.getElementById('month').innerText = 'May';
}
else if(month == 5){
    document.getElementById('month').innerText = 'June';
}
else if(month == 6){
    document.getElementById('month').innerText = 'July';
}
else if(month == 7){
    document.getElementById('month').innerText = 'August';
}
else if(month == 8){
    document.getElementById('month').innerText = 'September';
}
else if(month == 9){
    document.getElementById('month').innerText = 'October';
}
else if(month == 10){
    document.getElementById('month').innerText = 'November';
}
else{
    document.getElementById('month').innerText = 'December';
}


document.getElementById('daynum').innerText = correntDate.pad(2);
document.getElementById('year').innerText = year;



document.getElementById('hour').innerText = hour.pad(2);
document.getElementById('minutes').innerText = minutes.pad(2);
document.getElementById('seconds').innerText = seconds.pad(2);
}


function initClock(){
updateClock();
window.setInterval("updateClock()", 1);
}



