class Box{
 constructor(x,y,width,height){
   var position ={
       isStatic:false
   }
    
    this.body=Bodies.rectangle(x,y,width,height,position)
    this.w=width
    this.h=height
    this.visibility = 255
    World.add(world,this.body)
 }
      score(){
       if(this.Visiblity<0 && this.Visiblity>-1005){
         score++
        }
      }
      display(){
    
    
       if(this.body.speed <5)
       {
        var angle = this.body.angle; 
        var pos= this.body.position;
         push();
         translate(pos.x, pos.y);
         rotate(angle);
         rectMode(CENTER)
         rect(0,0,this.w,this.h);
         pop();
       }
       else{
         World.remove(world,this.body); 
         push();
         this.visibility = this.visibility -2;
         tint(255,this.visibility);
         pop();
        }
       
    
  }
};
  
