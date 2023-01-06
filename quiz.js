var sc=0;//score vairaable
function lock(opt,q){
    if (q==undefined){
        q="no";
    }
    if (q=='yes'){
        sc=sc+1;
    document.getElementById(opt).style.backgroundColor="blue";
        freez();
}
else{
        document.getElementById(opt).style.backgroundColor="red";
        freez();
    }
    
}
var f=4;// this is global variable for freez function
var i=0;// this is global variable for freez function
function freez(){
    var elems = document.getElementsByClassName("imp");
    for(var c = i; c<f; c++) {
        elems[c].disabled = true;
    }
    c=f;
    f=f+4;
}
function menter(y){             // this is for mouse enter function
    var snd=new Audio();
    snd.src="select.wav";
    snd.play();
   document.getElementById(y).style.borderWidth="6px";
   document.getElementById(y).style.borderColor="white";
}
function mleave(z){             // this is for mouse leave function
    
    document.getElementById(z).style.borderWidth="4px";
    document.getElementById(z).style.borderColor="rgb(8, 130, 252)";
}
var globalnumber=0;
var n=1;
for (var j=1; j<10;j++){
document.querySelectorAll('.choice')[j].style.display='none';}

function show(){                    //to show the question one at a time     
for (var j=0; j<10;j++){   
document.querySelectorAll('.choice')[j].style.display='none';
    }
n=n+1;
    globalnumber=globalnumber+1;
    document.getElementsByClassName('choice')[globalnumber].style.display='block';
    if (n==10){
        document.getElementById('h').style.display='none';
        document.getElementById('f').style.display='block';
    }
}

document.getElementById('f').style.display='none';

//this is for clock part
const startmin=0;
let time= startmin *60;
const countdowmEL=document.getElementById('countdown');
 setInterval(updateCountdown,1000);
function updateCountdown()
{
 const minutes = Math.floor(time/ 60 );
 let seconds =time % 60;
 seconds =seconds <10 ? '0'+seconds: seconds;
 countdowmEL.innerHTML=`${minutes}:${seconds}`;
 time++;
}
var x=new Audio();

//background sound

x.src="Kbc Clock.wav";
x.loop=true;
x.play();

//hiding score part from the user
document.getElementById("he").style.display='none';
document.getElementById("sw").style.display='none'; //hide the submit button at intial level

//one of the important part that sends the scores to the php file
function score(){

    document.getElementById("he").value=sc;
    y=document.getElementById("he").value;
    document.getElementById("he").innerHTML = y;
    document.getElementById("sw").style.display='block'; //show the submit button to the user
    document.getElementById("f").style.display='none';   //hide the score button
    x.loop=false;
    x.pause();

}