var noseX=0;
var noseY=0;
var eyeX=0;
var eyeY=0;
var moustache_click="false";
var lips_click="false";
var glass_click="false";
var mask_click="false";



function preload(){
    filter_moustache=loadImage("https://i.postimg.cc/4ygFmJqK/images-removebg-preview-2.png");
    filter_lipstick=loadImage("https://i.postimg.cc/Z5bn6ppH/istockphoto-1268215773-170x170-removebg-preview.png");
    filter_glasses=loadImage("https://i.postimg.cc/nVY14szz/png-transparent-minecraft-sunglasses-thumbnail-removebg-preview.png");
    filter_mask=loadImage("https://i.postimg.cc/DzRSHKv0/Screenshot-2023-03-17-123036-removebg-preview.png");

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

    if(moustache_click=="true"){
        image(filter_moustache,noseX-25,noseY-15,50,50);
    }
    if(lips_click=="true"){
        image(filter_lipstick,noseX-20,noseY+7,40,40);
    }
    if(glass_click=="true"){
        image(filter_glasses,eyeX-30,eyeY-55,100,100);
    }
    if(mask_click=="true"){
        image(filter_mask,eyeX-35,eyeY-125,115,170);
    }

}

function snap(){
    save("FCsnap.png");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        eyeX=results[0].pose.rightEye.x;
        eyeY=results[0].pose.rightEye.y;
        console.log("nose X= "+noseX);
        console.log("nose Y= "+noseY);
        console.log("eye X= "+eyeX);
        console.log("eye Y= "+eyeY);
    }
}

function moustache(){
   moustache_click="true";
   lips_click="false";
   glass_click="false";
   mask_click="false";
}

function lips(){
    moustache_click="false";
    lips_click="true";
    glass_click="false";
    mask_click="false";
 }

 function glass(){
    moustache_click="false";
    lips_click="false";
    glass_click="true";
    mask_click="false";
 }
 
 function mask(){
    moustache_click="false";
    lips_click="false";
    glass_click="false";
    mask_click="true";
 }
