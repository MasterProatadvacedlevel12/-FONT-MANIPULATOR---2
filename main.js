function setup(){
    canvas = createCanvas(550,450);
    canvas.position(550,150);
    video = createCapture(VIDEO);
    video.size(550,450);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
    }
}
