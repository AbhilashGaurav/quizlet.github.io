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