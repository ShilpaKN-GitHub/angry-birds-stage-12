class Bird extends BaseClass
{
    constructor(x, y)
    {
        super(x, y, 50, 50, "Bird");
        this.image = loadImage("sprites/bird.png");
        this.smokeImage = loadImage("sprites/smoke.png");
        this.trajectory = [];
        this.Visiblity = 255;
    }

    display()
    {
        super.display();

        var pos = this.body.position;
        
        if(this.body.velocity.x > 10 && pos.x > 200)
        {
            var position = [pos.x, pos.y];
            this.trajectory.push(position);
        }

        for(var i = 0; i< this.trajectory.length; i++)
        {
            push();
            this.Visiblity = this.Visiblity - 0.5;
            tint(255, this.Visiblity);
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
            pop();
        }
    }
}