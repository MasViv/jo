img=""

function setup()
{
    canvas=createCanvas(620,420);
    canvas.center()
}

function preload()
{
img=loadImage("dog_cat.jpg");
}

function draw()
{
    image(img,0,0,620,420);
    fill("red");
    text("doge",35,45);
    noFill();
    stroke("green");
    rect(30,40,450,350);
}