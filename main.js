function preload()
{
    song1 = loadSound("Peter Pan and the Pirates.mp3");
    song2 = loadSound("Harry Potter - Main Theme.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
