//https://teachablemachine.withgoogle.com/models/GhP2I6BF3/
prediction = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 100
});

camera= document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id= "capture_img" src= "'+data_uri+'"/>';
    });
}

console.log("ml5.version", ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GhP2I6BF3/model.json",modelLoaded)
function modelLoaded() {
    console.log("modelLoaded");
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data= "The Prediction is... "+prediction;
    utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}