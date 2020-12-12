
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint
var engine, world;
var bg=0
 var s=0

function preload(){

get_background();

}

function setup(){
createCanvas(1600,600)
engine=Engine.create();
world=engine.world




ground=new Ground(800,590,1600,10)
shelf1=new Ground(685,400,360,15)
//shelf1 level 1
b1=new Block(700,373,30,50)
b2=new Block(670,373,30,50)
b3=new Block(640,373,30,50)
b4=new Block(610,373,30,50)
b5=new Block(580,373,30,50)
b6=new Block(550,373,30,50)
b7=new Block(520,373,30,50)
b8=new Block(730,373,30,50)
b9=new Block(760,373,30,50)
b10=new Block(790,373,30,50)
b11=new Block(820,373,30,50)
b12=new Block(850,373,30,50)

//shelf1 level 2
bl1=new Block(700,350,30,50)
bl2=new Block(730,350,30,50)
bl3=new Block(760,350,30,50)
bl4=new Block(790,350,30,50)
bl5=new Block(670,350,30,50)
bl6=new Block(640,350,30,50)
bl7=new Block(610,350,30,50)
bl8=new Block(580,350,30,50)

//shelf1 level3
b13=new Block(640,300,30,50)
b14=new Block(670,300,30,50)
b15=new Block(700,300,30,50)
b16=new Block(730,300,30,50)

//shelf1 level4
b17=new Block(670,250,30,50)
b18=new Block(700,250,30,50)

//shelf2
shelf2=new Ground(1200,250,360,15)

//shelf2 level1
block1=new Block(1100,220,30,50)
block2=new Block(1130,220,30,50)
block3=new Block(1160,220,30,50)
block4=new Block(1190,220,30,50)
block5=new Block(1220,220,30,50)
block6=new Block(1250,220,30,50)
block7=new Block(1280,220,30,50)
block8=new Block(1310,220,30,50)

//shelf2 level3
block9=new Block(1130,170,30,50)
block10=new Block(1160,170,30,50)
block11=new Block(1190,170,30,50)
block12=new Block(1220,170,30,50)
block13=new Block(1250,170,30,50)
block14=new Block(1280,170,30,50)

//shelf2 level4
block15=new Block(1160,120,30,50)
block16=new Block(1190,120,30,50)
block17=new Block(1220,120,30,50)
block18=new Block(1250,120,30,50)

//shelf2 level5
block19=new Block(1190,70,30,50)
block20=new Block(1220,70,30,50)

//polygon
polygon=new Polygon(100,400,50)

//launcher
l=new SlingShot(polygon.body,{x:100,y:400})

}
function draw(){
background(bg)
Engine.update(engine);

ground.display();
shelf1.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();

bl1.display();
bl2.display();
bl3.display();
bl4.display();
bl5.display();
bl6.display();
bl7.display();
bl8.display();

b13.display();
b14.display();
b15.display();
b16.display();

b17.display();
b18.display();

shelf2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();

block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();

block15.display();
block16.display();
block17.display();
block18.display();

block19.display();
block20.display();

polygon.display();
l.display();


b1.score();
b2.score();
b3.score();
b4.score();
b5.score();
b6.score();
b7.score();
b8.score();
b9.score();
b10.score();
b11.score();
b12.score();

bl1.score();
bl2.score();
bl3.score();
bl4.score();
bl5.score();
bl6.score();
bl7.score();
bl8.score();

b13.score();
b14.score();
b15.score();
b16.score();

b17.score();
b18.score();

//shelf2.display();
block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();
block19.score();
block20.score();


//fill("red")
//stroke("blue")
//strokeWeight(5)
text("SCORE = "+s,1400,50)



}

function mouseDragged(){

	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
	
	
	}
	
	
	function mouseReleased(){
	
	l.fly()
	
	}
    
    function keyPressed(){

        if(keyCode===32){
        l.attach(polygon.body)
        }
    }

    async function get_background(){
        var responce=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responceJSON= await responce.json()
    console.log(responceJSON.datetime)
    var hour=responceJSON.datetime.slice(11,13)
    console.log(hour)
    
    if(hour>=06 && hour<=18){
        bg=200
    
    }
    else{
        bg=50
    }


}
