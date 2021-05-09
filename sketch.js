const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bruce;
var idle;
var attack;
var running;
var gameState = "Play";
var jump;
var ground;


function preload(){
idle=loadAnimation("images/idle/Idle__000.png","images/idle/Idle__001.png","images/idle/Idle__002.png","images/idle/Idle__003.png",
"images/idle/Idle__004.png","images/idle/Idle__005.png","images/idle/Idle__006.png",
"images/idle/Idle__007.png","images/idle/Idle__008.png","images/idle/Idle__009.png");

attack=loadAnimation("images/attack/Jump_Attack__000.png","images/attack/Jump_Attack__001.png",
"images/attack/Jump_Attack__002.png","images/attack/Jump_Attack__003.png",
"images/attack/Jump_Attack__004.png","images/attack/Jump_Attack__005.png","images/attack/Jump_Attack__006.png",
"images/attack/Jump_Attack__007.png","images/attack/Jump_Attack__008.png","images/attack/Jump_Attack__009.png");


running = loadAnimation("images/running/Run__000.png","images/running/Run__001.png","images/running/Run__002.png","images/running/Run__003.png",
"images/running/Run__004.png","images/running/Run__005.png","images/running/Run__006.png","images/running/Run__007.png",
"images/running/Run__008.png","images/running/Run__009.png")

jump=loadAnimation("images/jump/Jump__000.png","images/jump/Jump__001.png","images/jump/Jump__002.png","images/jump/Jump__003.png",
"images/jump/Jump__004.png","images/jump/Jump__005.png","images/jump/Jump__006.png","images/jump/Jump__007.png",
"images/jump/Jump__008.png","images/jump/Jump__009.png")
}

function setup(){
   var canvas = createCanvas(1500, 600);

   engine = Engine.create();
   world = engine.world;


   bruce=createSprite(700,500,20,20)
   bruce.addAnimation("idle",idle)
   bruce.addAnimation("attack",attack)
   bruce.addAnimation("running",running);
   bruce.scale=0.3;
   
   bruce.addAnimation("jump",jump)


   ground = createSprite(750,590,1500,10);

}

function draw(){
   Engine.update(engine);
   background("lightblue"); 


   if(gameState === "Play"){

      bruce.addAnimation("idle",idle)


      if(keyWentDown("space")){
         bruce.changeAnimation("attack",attack)
      }

      
      if(keyWentUp("space")){
         bruce.changeAnimation("idle",idle)
      }

      if(keyWentDown("right_arrow")){
         bruce.velocityX=2
         bruce.changeAnimation("running",running)
      }

      
      if(keyWentUp("right_arrow")){
         bruce.velocityX=0
         bruce.changeAnimation("idle",idle)
      }
      if(keyWentDown("up_arrow")){
         bruce.velocityY  = -10;
         bruce.changeAnimation("jump",jump)
      }
      if(keyWentUp("up_arrow")){
         bruce.velocityY=0
         bruce.changeAnimation("idle",idle)
         
      }
      bruce.velocityY = bruce.velocityY + 0.3

      bruce.collide(ground);
   }



   drawSprites() 
   
}   

