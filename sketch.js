   const Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

    var engine,world;

    var balls = [];
    var divisions = [];
    var particles = [];
    var divisionsHeight = 150;

function setup() 
{
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(599,590,1200,30);

    for(var p = 40; p<= width; p = p+50)
    {
      balls.push(new Ball(p, 75))
    }
    for(var p = 15; p<= width-10; p = p+50)
    {
      balls.push(new Ball(p,125))
    }
    for(var p = 40; p<= width-10; p = p+50)
    {
      balls.push(new Ball(p,175))
    }
    for(var p = 15; p<= width-10; p = p+50)
    {
      balls.push(new Ball(p ,225))
    }
    for(var p = 40; p<= width-10; p = p+50)
    {
      balls.push(new Ball(p ,275))
    }
    for(var p = 15; p<= width-10; p = p+50)
    {
      balls.push(new Ball(p ,325))
    }
    for(var p = 40; p<= width-10; p = p+50)
    {
      balls.push(new Ball(p ,375))
    }
    for(var p = 15; p<= width-10; p = p+50)
    {
      balls.push(new Ball(p ,425))
    }
 
    for(var d = 0;d <=width; d = d+90)
    {
      divisions.push(new Divisions(d, height-divisionsHeight/2, 10, divisionsHeight));
    }

  }

function draw() 
{ 
  if(frameCount % 60 === 0)
  {
    particle = new Particle(random(120, 1180), 0, 7, random(0, 360));
    particles.push(particle);
  }

  background("blue");

  Engine.update(engine); 

for(var i = 0; i < particles.length; i++)
{
  particles[i].display();
}

for(var d = 0; d<divisions.length;d++)
{
  divisions[d].display();
}

for(var p = 0; p<balls.length;p++)
{
    balls[p].display();
}

  ground.display();  

}
 