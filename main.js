var hp = "";
var pp = "";
var m_iz_x = 0;
var m_iz_y = 0;
var m_de_x = 0;
var m_de_y = 0;
function preload(){
pp =loadSound("believer.mp3");
hp =loadSound("updown.mp3");
}
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log('posenet se inicio');
}
function draw(){
    image(video,0,0,600,500);
}
function plays(){
    cancion= document.getElementById("cancion").value;
    if(cancion == "hp"){
        pp.stop();
        hp.setVolume(1);
        hp.rate(1);
        hp.play();
    }
    if(cancion == "pp"){
        hp.stop();
        pp.setVolume(1);
        pp.rate(1);
        pp.play();
    }
}
function pauses(){
    hp.pause();
    pp.pause();
}
function stops(){
    hp.stop();
    pp.stop();
}
function gotPoses(results){
    console.log(results);
    m_de_x=results[0].pose.rightWrist.x;
    m_de_y=results[0].pose.rightWrist.y;
    console.log("pos x muñeca derecha: "+ m_de_x + "  pos y muñeca derecha: " + m_de_y);
    m_iz_x=results[0].pose.leftWrist.x;
    m_iz_y=results[0].pose.leftWrist.y;
    console.log("pos x muñeca iz: "+ m_iz_x + "  pos y muñeca iz: " + m_iz_y);
}