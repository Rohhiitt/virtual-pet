class Food
{ constructor(){
    var option = {
        isStatic : true
    }
    var foodStock
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Images/Milk.png");
    World.add(world, this.body);
    }
    display(){
      var x=80, y=100;
    
      imageMode(CENTER);
      this.image(this.image,720,220,70,70);

      if(this.foodStock!=0){
          for(var i=0;i<this.foodStock;i++){
              if(i%10==0){
                  x=80;
                  y=y+50;
              }
              this.image(this.image,x,y,50,50);
              x=x+30;
          }
      }
    }
}