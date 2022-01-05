var hr;
var mn;
var sc;
var hrAngle;
var mnAngle;
var scAngle;
var hrTxt;
var mnTxt;
var scTxt;
var zer;
var ampm;
var x;
var alarmSoundDiferente;
var mls
var boom, boomAni;
var clockImg;
var boomImg;
var wallSpr;
var movingSpr;
let lylas;
var hourVal, minVal, secVal;
function preload(){
  music = loadSound("Diferente.mp3");
  lylas=loadFont("LoveYaLikeASister.ttf");
  boomAni=loadAnimation("sun1.png", "sun2.png")
  clockImg=loadAnimation("alarm.png")
  clockAni=loadAnimation("alarm1.png", "alarm2.png")
  boomImg=loadAnimation("sun1.png")
}
function setup() {
  createCanvas(800,800);
 /* hr = hour();
  mn = minute();
  sc = second();
  mls= millis();
  */
  hrTxt=hr;
  mnTxt=mn;
  scTxt=sc;
  zer=0
  x=215
  angleMode(DEGREES);
  
x1=353
  
 /* 
 //when alarm goes off:
 
 boom= createSprite(450, 550, 50, 50);
  boom.addAnimation("boomImg", boomImg)
  boom.scale=1.2
  boom.addAnimation("boomAni", boomAni)
 */ 
  
  
  
  clock=createSprite(500, 550, 50, 50);
  clock.addAnimation("normal", clockImg)
  clock.addAnimation("animation", clockAni)
  clock.scale=0.75
  //clock.debug=true
  clock.setCollider("circle", -140,-20,125)

  wallSpr=createSprite(200, 700, 50, 75)
  wallSpr.shapeColor="#fee970"
  movingSpr=createSprite(300, 700, 50, 50)
  movingSpr.shapeColor="#fee970"
  movingSpr.velocityX=0
  
  
  hourInp=createInput("00", "number")
  hourInp.position(230, 350)
  hourInp.size=(10)
  hourInp.style("background-color", "white")
  hourInp.style("color", "  #0e1a76")
  hourInp.style("border", "white")
  hourInp.style("font-size", "35px")
  hourInp.style('width', '70px');
  hourInp.style('height', '70px');
  hourInp.style("font-family", "chalkduster")
  
  minInp=createInput("00", "number")
  minInp.position(360, 350)
  minInp.size=(10)
  minInp.style("background-color", "white")
  minInp.style("color", "#0e1a76")
  minInp.style("border", "white")
  minInp.style("font-size", "35px")
  minInp.style('width', '70px');
  minInp.style('height', '70px');
  minInp.style("font-family", "chalkduster")

  secInp=createInput("00", "number")
  secInp.position(490, 350)
  secInp.size=(10)
  secInp.style("background-color", "white")
  secInp.style("color", "#0e1a76")
  secInp.style("border", "white")
  secInp.style("font-size", "35px")
  secInp.style('width', '70px');
  secInp.style('height', '70px');
  secInp.style("font-family", "chalkduster")
 
 

}

function draw() {
  background("#fee970");  
  hr = hour();
  mn = minute();
  sc = second();
  //secVal=secInp.value()
//console.log(secVal)

  hrTxt=hr;
  mnTxt=mn;
  scTxt=sc;
 
  hourVal=hourInp.value()
  minVal=minInp.value()
  secVal=secInp.value()
text(mouseX+", "+mouseY, 200, 10);
  textSize(70)
  textFont(lylas)
  text(":", 323, 410)
  text(":", 453, 410)
  /*scAngle = map(sc, 0, -10, 0, 720)
  mnAngle = map(mn, 0, 70, 0, 360)
  hrAngle = map(hr, 0,15, 0, 360)
*/
//strokeWeight(1)
//stroke(0)
/*
rect(0, 0,1600, 1600, 15);
stroke(255, 0, 0);
strokeWeight(7);
var m = line(760, 180, 180,mnAngle )
stroke(0, 255, 0);
strokeWeight(7);
var h = line(760, 115, 115, hrAngle)
stroke(0, 0, 255);
strokeWeight(7);
var s = line(400, 400, 270, scAngle )
noStroke()
fill(255);
textSize(15) 
textFont("Noteworthy")
text(hr, hrAngle, 115)
text(mn, mnAngle, 180)
text(sc, scAngle, 270)
text("Minutes", 745, 180)
text("Hours", 750, 115)
text("Seconds", 740, 270)
*/
noStroke()

  
  
  
//#d3c6fb -- for fill directly above
  fill("white")
rect(x-35-30-100, 42+10, 670, 230)
  fill("#dbd7d4")
rect(x-35+20-100, 42+70, 650, 200)
  fill("#2c3258")
rect(x-35-100, 102, 600, 150)
textFont(lylas)
  textSize(20)
  fill("#2c3258")
  text("a  l  a  r  m",184-100, 88)
  text("c  l  o  c  k",607-67, 290)
fill("#whtie")
textSize(75)
//#FFFCA9 -- for fill directly above

  
if(hr==24){
  ampm="AM"
  hrTxt=12
}else if(hr>=1&&hr<=11){
  ampm="AM"
}else if(hr>=12&&hr<=23){
  ampm="PM"
  hrTxt=hr-12
}else if(hr==0){
  ampm="AM"
  hrTxt=12
}
  else{
  hrTxt=hr
 
}

if(mn<10){
  text(+hrTxt+" : "+"0"+mnTxt, x-70, 200)
  textSize(37.5)
  text(" : "+scTxt, x+230-20, 200)
  textSize(50)
  text(ampm, x+350-30, 200)
}else if(sc<10){
  text(hrTxt+" : "+mnTxt, x-70, 200)
  textSize(37.5)
  text(" : "+"0"+scTxt, x+230-20, 200)
  textSize(50)
  text(ampm, x+350-30, 200)
}else if(mn<10&&sc<10){
  text(hrTxt+" : 0"+mnTxt, x-70, 200)
  textSize(37.5)
  text(" : "+"0"+scTxt, x+230-20, 200)
  textSize(50)
  text(ampm, x+350-30, 200)
}else{
  text(hrTxt+" : "+mnTxt, x-70, 200)
  textSize(37.5)
  text(" : "+scTxt, x+230-20 , 200)
  textSize(50)
  text(ampm, x+350-30, 200)
}
  
  
  

  //textSize(20)
//text(mls, 300, 470)
 /* if(hr==14&&mn==2&&sc==0&&mls==1){
    music.play()
    console.log("start")
  }
  */
  
  /*stroke(0)
  line(453, 313, x1, 548)
  */
  
  //now for the inputs
  


  //there need to be something that takes second value and once it's submitted put that in a variables and then use that variable and if statement
  
 /* if(hrTxt==11&&mn==40&&sc==10){
    movingSpr.velocityX=-10
  }*/
  
  if(movingSpr.isTouching(wallSpr)){
    wallSpr.y=620
    music.loop()
    clock.changeAnimation("animation", clockAni)
    clock.scale=0.45
    clock.setCollider("circle",-225,-25,210 )
  }
  
  if(mousePressedOver(clock)&&wallSpr.y==620){
    music.stop()
    movingSpr.velocityX=0
    movingSpr.x=300
    wallSpr.y=700
    clock.changeAnimation("normal", clockImg)
    clock.scale=0.75
    clock.setCollider("circle", -140,-20,125)
  }
  
  if(hourVal!="" && minVal!="" && secVal!=""){
    workInput(hourVal, minVal, secVal)
    console.log("BOOM")
  }

  drawSprites();
}

function workInput(num1, num2, num3){
  if(hrTxt==num1&&mnTxt==num2&&scTxt==num3){
    movingSpr.velocityX=-10
    hourInp.value("00")
    minInp.value("00")
    secInp.value("00")

  }
}
 
//fix collider when the animation clock turns into the ringing one. (: