

var vnum = document.getElementById('num1');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var hid = document.getElementById('hid');

hid.style.display='none';

btn1.addEventListener("click", function(){
    vnum.innerText=parseInt(vnum.innerText)+1;
    if(parseInt(vnum.innerText) > 5){
        hid.style.display='none';
    }
    if(parseInt(vnum.innerText) >= 20 && parseInt(vnum.innerText) <= 24){
        hid.style.display='block';
        hid.innerHTML='Warning!<br>Your Position Up to Maximum Level.';
    }
    if(parseInt(vnum.innerText) >= 25){
        hid.style.display='block';
        hid.innerText='STOP!';
        vnum.innerText='25';
        hid.style.fontSize='30px';
        hid.style.fontWeight='bold';
        hid.style.color='red';
    }
    if(parseInt(vnum.innerText) <= 5 && parseInt(vnum.innerText) >= 1){
        hid.style.display='block';
    }
    if(parseInt(vnum.innerText) <= 5 && parseInt(vnum.innerText) >= 1){
        hid.style.display='block';
        hid.innerHTML='Warning!<br>Your Position Up to Minimum Level.';
    }
    
})
btn2.addEventListener("click", function(){
    vnum.innerText=parseInt(vnum.innerText)-1;
    if(parseInt(vnum.innerText) < 20){
        hid.style.display='none';
    }
    if(parseInt(vnum.innerText) <= 24){
        hid.innerHTML='Warning!<br>Your Position Up to Maximum Level.';
    }
    if(parseInt(vnum.innerText) <= 5 && parseInt(vnum.innerText) >= 1){
        hid.style.display='block';
        hid.innerHTML='Warning!<br>Your Position Up to Minimum Level.';
    }
    if(parseInt(vnum.innerText) <= 0){
        hid.style.display='block';
        hid.innerText='STOP!';
        vnum.innerText= 0;
        hid.style.fontSize='30px';
        hid.style.fontWeight='bold';
        hid.style.color='red';
    }
})



// game********************************************
