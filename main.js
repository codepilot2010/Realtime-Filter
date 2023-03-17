nosex=0;
nosey=0;
function preload()
{
    image_clown=loadImage('https://i.postimg.cc/6QSB5PhF/clon-nose-image-removebg-preview.png');
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x-19;
        nosey=results[0].pose.nose.y-9;
        console.log("nose x = "+nosex);
        console.log("nose y = "+nosey);
    }
}

function modelLoaded()
{
    console.log('poseNet is intialized');
}

function draw()
{
    image(video,0,0,300,300);
    image(image_clown,nosex,nosey,40,40); 
}

function take_snapshot()
{
    save('filtered_image_clown.png');
}
