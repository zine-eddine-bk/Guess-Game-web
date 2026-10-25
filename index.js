let guessmin ;
let guessmax ;
let guessgoal ;
let guess ;
let attemp ;
const guessgameout=document.getElementById("guessgameres");
const guessgameattumpcounter=document.getElementById("guessgameattumpcounter");
const guessgameinpmin=document.getElementById("guessgameinpmin");
const guessgameinpmax=document.getElementById("guessgameinpmax");
function guessgameResultoutput(){
guessgameattumpcounter.textContent=`attemptions= ${attemp}.`;
 if(guess>guessgoal){
  guessgameout.textContent="Guess a LOWER nember";
}else if(guess<guessgoal){
  guessgameout.textContent="Guess a HIGHER nember";
}else if(guess==guessgoal){
  guessgameout.textContent=`CONGRAT !! u did guess the right nember '${guessgoal}' after : ${attemp} attempts.`;
}
}
function guessgameReadInputs(){
guessmin=document.getElementById("guessgameinpmin").value;
guessmax=document.getElementById("guessgameinpmax").value;
guess=document.getElementById("guessgameinp").value;
    if(guess==="" || guessmin==="" || guessmax===""){
     if (guess==="") guess=NaN;
     if (guessmin==="") guessmin=NaN;
     if (guessmax==="") guessmax=NaN;
    }else{
        guessmin= Number(guessmin);
        guessmax= Number(guessmax);
        guess= Number(guess);
    }
}
function guessgameReset(){
if(document.getElementById("guessgamesub").textContent=="Reset"){
    guess="";
    guessmin=""; 
    guessmax="";
    guessgoal= undefined;
    document.getElementById("guessgameinpmin").value = "";
    document.getElementById("guessgameinpmax").value = "";
    document.getElementById("guessgameinp").value = "";
    guessgameout.textContent="";
    document.getElementById("guessgameent").style.display="none";
    document.getElementById("guessgameattumpcounter").style.display="none";
    document.getElementById("guessgamesub").textContent = "NEW";
    guessgameinpmin.disabled=false;
   guessgameinpmax.disabled=false;
    return true;
}
}

document.getElementById("guessgamesub").onclick=function(){
if(guessgameReset()==true) return;
 guessgameReadInputs();
if(!Number.isNaN(guess) && !Number.isNaN(guessmin) && !Number.isNaN(guessmax)){
  if(guess<guessmin){
      guessgameout.textContent=`Your nember is out of range [${guessmin}-${guessmax}]!`;
   }else if(guess>guessmax){
       guessgameout.textContent=`Your nember is out of range [${guessmin}-${guessmax}]!`;
   }else{
   guessgoal = Math.floor(Math.random() * (guessmax - guessmin + 1)) + guessmin;
   attemp=1;
   guessgameResultoutput();
   document.getElementById("guessgameent").style.display="inline-block";
   document.getElementById("guessgameattumpcounter").style.display="inline-block";
   document.getElementById("guessgamesub").textContent="Reset";
   guessgameinpmin.disabled=true;
   guessgameinpmax.disabled=true;
   }
}else{
    guessgameout.textContent=`Error u should enter Nembers !`;
}   
}

document.getElementById("guessgameent").onclick=function(){
guess=document.getElementById("guessgameinp").value;
    guess= Number(guess);
if(guess<guessmin){
      guessgameout.textContent=`Your nember is out of range [${guessmin}-${guessmax}]!`;
   }else if(guess>guessmax){
       guessgameout.textContent=`Your nember is out of range [${guessmin}-${guessmax}]!`;
   }else{
    attemp++;
    guessgameResultoutput();
   }
}
