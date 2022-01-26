status = "";
video = "";

function preload(){
   
}

function setup(){
    video = createCapture(VIDEO);
    video.hide();
    canvas = createCanvas(480,380);
    canvas.center();
}


function draw(){
   image(video,0,0,480,380);

}

function start(){
  objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Object";
  input = document.getElementById("input").value;
  
}

function modelLoaded(){
    console.log("Model has been initialised");
    status = true;
   
}