 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
    
         var background
     //ground
         var ground,ground2,ground3
     //stage 1 level 1
          var box,box2,box3,box4,box5,box6,box7
     //stage 1  level 2
         var box8,box9,box10,box11,box12
     //stage 1 level 3
         var box13,box14,box15
     //stage 1 level 4
         var box16

     //stage 2 level 1
         var box17,box18,box19,box20,box21
     //stage 2 level 2
         var box22,box23,box24 
     //stage 2 level 3
         var box25  

     //image
     var ball
     var polygon
    //shot
     var sling 
    // background image 
     var bg
    // score
     score=0 

     var backgroundImg
 function preload() {
   polygon = loadImage("hexagon.png")
   settime()
 }



     function setup(){
     var canvas = createCanvas(1300,600)
 
    engine = Engine.create()
    world = engine.world;
        
      

        // ground and stage 
            ground = new Ground(600,570,1400,10);
            ground2 = new Ground(450,320,300,10);
            ground3 = new Ground(1000,320,250,10);
        //stage 1 level 1
            box = new Box(330,300,40,50);
            box2 = new Box(370,300,40,50);
            box3 = new Box(410,300,40,50);
            box4 = new Box(450,300,40,50);
            box5 = new Box(490,300,40,50); 
            box6 = new Box(530,300,40,50);
            box7 = new Box(570,300,40,50); 
        //stage 1 level 2
            box8 = new Box(370,200,40,50); 
            box9 = new Box(410,200,40,50);
            box10 = new Box(450,200,40,50);
            box11 = new Box(490,200,40,50); 
            box12 = new Box(530,200,40,50); 
        //stage 1 level 3
            box13 = new Box(410,150,40,50); 
            box14 = new Box(450,150,40,50); 
            box15 = new Box(490,150,40,50); 
        //stage 1 level 4
            box16 = new Box(450,100,40,50);

        //stage 2 level 1
            box17 = new Box(920,300,40,50);
            box18 = new Box(960,300,40,50);
            box19 = new Box(1000,300,40,50);
            box20 = new Box(1040,300,40,50);
            box21 = new Box(1080,300,40,50);
        //stage 2 level 2
            box22 = new Box(960,200,40,50);
            box23 = new Box(1000,200,40,50);
            box24 = new Box(1040,200,40,50);
        //stage 2 level 3
            box25 = new Box(1000,150,40,50); 
        //ball     
            ball = Bodies.circle( 50, 200 , 20 ) ;
            World.add( world , ball ) ;
        //slingshot
        sling = new Slingshot(this.ball,{x:100,y:200});    

         
 }




 function draw(){
 if(backgroundImg){
  background(backgroundImg);
 }
 textSize(43)
    fill("lightblue")
    text("score = " + score ,300,50)
    Engine.update(engine);
        
     imageMode(CENTER)
     image(polygon,ball.position.x,ball.position.y, 50,50);
     
    // Ground
       fill("green")
        ground.display()
        fill("lightblue")
        ground2.display()
        ground3.display()
    // stage 1
    // level 1
        fill("red")
        box.display()
        box.score()
        box2.display()
        box2.score()
        box3.display()
        box3.score()
        box4.display()
        box4.score()
        box5.display()
        box5.score()
        box6.display()
        box6.score()
        box7.display()
        box7.score()
    // level 2
        fill("yellow")
        box8.display()
        box8.score()
        box9.display()
        box9.score()
        box10.display()
        box10.score()
        box11.display()
        box11.score()
        box12.display()
        box12.score()
    // level 3
        fill("blue")
        box13.display()
        box13.score()
        box14.display()
        box14.score()
        box15.display()
        box15.score()
    //level 4
        fill("brown")
        box16.display()
        box16.score()
    //stage 2
    //level 1
        fill("orange")
        box17.display()
        box17.score()
        box18.display()
        box18.score()
        box19.display()
        box19.score()
        box20.display()
        box20.score()
        box21.display()
        box21.score()
    //level 2
       fill("cyan")
        box22.display() 
        box22.score()
        box23.display()
        box23.score()
        box24.display() 
        box24.score()
    //level 3
       fill("red")
       box25.display()
       box25.score()
    // sling
    sling.display()   
 }



 function mouseDragged(){
    Matter.Body.setPosition(ball ,{x:mouseX , y:mouseY})
 }
 function mouseReleased(){
	sling.fly() 
  }
  function keyPressed(){
    if(keyCode === 32){
        sling.comeback(ball)
    }
 }
 async function settime(){
     var respone = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
     var resJson = await respone.json()
     var time = resJson.datetime
     var h = time . slice(11,13)
     console.log(h)
     if(hour>=6 && hour<=19){
        bg="lightwood.jpg"
    }
    else{
        bg="darkwood.jpg"
    }
    backgroundImg=loadImage(bg)
    
 }