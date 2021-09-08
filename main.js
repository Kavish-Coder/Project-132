img="";

status="";

function preload() {
    img=loadImage("dog_cat.jpg");
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#ff0000");
    text("Dog", 150, 60);
    noFill();
    stroke("#ff0000");
    rect(90, 40, 300, 300);
    fill("#ff0000");
    stroke("#ff0000");
    noFill();
    rect(300, 100, 300, 300);
    text("Cat", 315, 115);
}

function modelLoaded() {
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
if(error) {
    console.log(error);
} 
console.log(results);
}