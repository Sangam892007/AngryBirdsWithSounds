class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.pigSpeak = loadSound("./pig_snort.mp3");
    this.Visibility = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visibility = this.Visibility - 5;
     tint(255,this.Visibility);
     if (this.Visibility <= 245 && this.Visibility > 235 ){
      console.log("Pig");
      this.pigSpeak.play();

     };
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }
  

  score(){
    if (this.Visibility < 0 && this.Visibility > -505){
      score++;
    }
  }



};