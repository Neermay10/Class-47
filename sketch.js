var name, girl, boy, girlImage, boyImage;
var healthPoints, healthImage, healthImage1, progressBar;
var cash, cashImage, cashImage1;
var workProfileImage, Workprofile, dishWasherImage, dishWasher, deliveryImage, clerkImage, clerk, policeOfficerImage, policeOfficer, businessManImage, businessMan;
var foodProfile, junkFood, fruits, regularMeal, organicMeal;
var database;
var gameState = 1;

function preload(){
    girlImage = loadImage("./image/girlImage.png");
    boyImage = loadImage("./image/boyImage.png");
    healthImage1 = loadImage("./image/healthImage.png");
    cashImage1 = loadImage("./image/cash.png");
    workProfileImage = loadImage("./image/workProfile.png");
    dishWasherImage = loadImage("./image/dishWasher.png");
    deliveryImage = loadImage("./image/delivery.png");
    clerkImage = loadImage("./image/clerk.png");
    policeOfficerImage = loadImage("./image/policeOfficer.png");
    businessManImage = loadImage("./image/businessMan.png");
    foodProfile = loadImage("./image/foodProfile.png");
    junkFood = loadImage("./image/junkFood.png");
    fruits = loadImage("./image/fruit.png");
    regularMeal = loadImage("./image/regularMeal.png");
    organicMeal = loadImage("./image/organicMeal.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    database = firebase.database();
    /*boy = createSprite(windowWidth/2+200,400);
    boy.addImage(boyImage);
    boy.scale = 0.43;*/

    if(gameState === 1){
        text1= createElement('h1');
        input = createInput('Name');
        button1 = createButton('Start');
        

        text1.position(windowWidth/2-190,200);
        text1.html("Enter Name & Select Gender");
        input.position(windowWidth/2-75,400);
        button1.position(windowWidth/2-15,450);

        radio = createRadio();
        radio.option('Girl',1);
        radio.option('Boy',2);
        radio.style('height', '10px');
        textAlign(CENTER);
        radio.position(windowWidth/2-45,370)
    }
    button1.mousePressed(gameOn);
    cash = 100
    healthPoints = 100
    
    
}

function draw(){
    background(235);
    inputName=database.ref('Username')
    inputName.on('value',function(data){
        Username=data.val();
    })
    drawSprites();

    let val = radio.value();
    console.log(val)
    if(gameState === 2){
        text1.hide();
        input.hide();
        button1.hide();
        radio.hide();
        //update();
        if(val === '2'){
            boy = createSprite(60,60);
            boy.addImage(boyImage);
            boy.scale = 0.20;
        }else if(val === '1'){
            girl = createSprite(60,60);
            girl.addImage(girlImage);
            girl.scale = 0.1;
        }
        name = input.value();
        textSize(20)
        text(name,160,70)

        healthImage =createSprite(60,160);
        healthImage.addImage(healthImage1);
        healthImage.scale = 0.09;
        textSize(20)
        text("Health Points",160,150);

        cashImage =createSprite(60,260);
        cashImage.addImage(cashImage1);
        cashImage.scale = 0.16;
        textSize(20)
        text("Cash",140,250);
        text("$"+cash,140,275);
        
        line(300,0,300,windowHeight);

        workProfile =createSprite(380,130);
        workProfile.addImage(workProfileImage);
        workProfile.scale = 0.16;
        textSize(20)
        text("Work Profile",490,130);

        dishWasher =createSprite(380,260);
        dishWasher.addImage(dishWasherImage);
        dishWasher.scale = 0.04;
        textSize(20)
        text("Dishwasher",490,245);
        text("$1",450,285);

        clerk =createSprite(380,350);
        clerk.addImage(clerkImage);
        clerk.scale = 0.16;
        textSize(20)
        text("Clerk",460,340);
        text("$10",455,370);
        
    }
}

function update(input){
    database.ref('/').update({
        Username:input
    });
}

function gameOn(){
    gameState = 2
    //update();

}


