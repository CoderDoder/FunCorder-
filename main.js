var noseX=0;
var noseY=0;

function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);



}

function modelLoaded(){
    console.log("posenet model initialised");

}


function draw(){
    image(video,0,0,300,300);
}

function snap(){
    save("FCsnap.png");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose X= "+noseX);
        console.log("nose Y= "+noseY);
    }
}
