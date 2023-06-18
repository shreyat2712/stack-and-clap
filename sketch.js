
var mic;
var t;
var clapping=false;
var value=0;
function setup() {
  createCanvas(30, 50);
  mic= new p5.AudioIn();
  mic.start();
  // getAudioContext().resume();
}
function touchStarted() {
  getAudioContext().resume(); 
}
function draw() {
  console.log("Rahul")
  background(220);
  var vol = mic.getLevel();
  if(vol>0.1 && !clapping)
  {
    console.log("Shreya")
    clapping=true;
    value++;
    stopSliding(value);
  }
  else if(vol<0.1)
  {
    clapping=false;
  }
  fill(0,255,0);
  var y= map(vol, 0 , 1 , height, 0);
  rect(width-50,y,50, height-y);
}

for(let i=20;i>0;i--){
  let slider = document.createElement("div");
  slider.setAttribute("class","slider animate");
  slider.setAttribute("id","slider"+i);
  document.getElementById("game").appendChild(slider);
}
var theme =document.getElementById('theme');
theme.onclick = function(){
  document.body.classList.toggle('dark-theme');
  if(document.body.classList.contains('dark-theme')){
      theme.innerHTML = 'Night';
  }
  else{
      theme.innerHTML = 'DAY';
  }
}
var slideWidth = 300;
function stopSliding(slider){
  console.log("Tyagi")
  var sliderCurrent = document.getElementById("slider".concat(slider));
  var sliderAbove = document.getElementById("slider".concat(slider+1));
  if(slider==1)
  var sliderBelow=sliderCurrent;
  else
  var sliderBelow = document.getElementById("slider".concat(slider-1));
  var left = window.getComputedStyle(sliderCurrent).getPropertyValue("left");
  sliderCurrent.classList.remove("animate");
  sliderCurrent.style.left = left;
  var width = parseFloat(window.getComputedStyle(sliderCurrent).getPropertyValue("width"));
  var leftBelow = parseFloat(window.getComputedStyle(sliderBelow).getPropertyValue("left"));
  left = parseFloat(left);
  var difference = left - leftBelow;
  var absDifference = Math.abs(difference);
  if(difference>width || difference < -width){
      var score = "Score: ".concat(slider-1);
      alert(score);
      location.reload();
  }
  if(slider===20)
  {
      alert("YOu Won");
      location.reload();
  }
  if(difference>0)
  left = left + absDifference;
  else
  {
      left = left - difference;
      sliderCurrent.style.left = left.toString().concat("px");
  }
  var offset = (width-absDifference).toString().concat("px");
  sliderCurrent.style.width = offset;
  sliderAbove.style.width = offset;
  sliderAbove.style.visibility ="visible";
  slideWidth = slideWidth + absDifference;
  document.documentElement.style.setProperty('--GameWidth',slideWidth.toString().concat("px"))
  var onclick = `stopSliding(${slider+1})`;
  console.log(slider+1)
  document.getElementById("btn").setAttribute("onclick",onclick);
  console.log(`Left : ${left} offset: ${offset} Difference : ${absDifference} SlideWidth : ${slideWidth}`);
}
function startgame(){
  document.getElementById("start").style.display="none"
}
