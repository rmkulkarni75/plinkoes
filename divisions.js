class divisions{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }
    display(){
        var Pos=this.body.position
         
        rectMode(CENTER)
        fill(128,128,128)
        rect(Pos.x,Pos.y,this.w,this.h)
   
    }
}