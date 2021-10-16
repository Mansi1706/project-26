constructor(x,y,width,height){
    var options ={
        isStatic:true
    };

    this .body=Bodies.rectangle(x,y,width,height,options);

    this.width=width;
    this.height=height;t
    this.image=loadIamge("./assets/board.png");

    World.add(worldd,this.body);
}


display() {
    var pos=this.body.position ;
    push();
    imageMode(CENTRE);
    image(this.image,pos.x,pos.y,this.width,this.height);
    pop();

}
