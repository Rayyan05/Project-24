class Ball{
    constructor(x,y,radius){
     var options = {
         'restitution': 1.0
     }   
     this.body = Bodies.circle(x,y,radius,options)
     this.radius = radius
    
     World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        var angle = this.body.position

        ellipseMode(RADIUS)
        fill('pink')
        ellipse(pos.x,pos.y,this.radius)

        
    }
}