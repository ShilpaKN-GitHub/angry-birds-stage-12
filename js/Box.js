class Box extends BaseClass
{
  constructor(x, y, width, height)
  {
    super(x, y, width, height, "Box");
    this.image = loadImage("sprites/wood1.png");
    this.visibility = 255;
  }

  display()
  {
    if(this.body.speed < 5)
    {
      super.display();
    }
    else
    {
      World.remove(world, this.body);

      var pos = this.body.position;
      push();
      this.visibility = this.visibility - 2;
      tint(255, this.visibility);
      image(this.image, pos.y, pos.x, this.width, this.height);
      pop();
    }
  }
}