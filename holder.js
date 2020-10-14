class Holder{
constructor(x,y,width,height){
var holder_option={
    isStatic:true
}

    this.body=Bodies.rectangle(x,y,width,height,holder_option);
this.width=width;
this.height=height;
    World.add(world,this.body)

}
display(){
    var pos=this.body.position;
    rectMode(CENTER)    
    fill("red");
    rect(pos.x,pos.y,this.width,this.height)
    
}
}
