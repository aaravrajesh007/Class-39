class Form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting=createElement('h3');
        this.title=createElement('h2');

    }
    formHide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-100,0);

        this.input.position(displayWidth/2-100,displayHeight/2-100);

        this.button.position(displayWidth/2-40,displayHeight/2-75);


        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            pc+=1
            player.index=pc
            player.update();
            player.updatepc(pc);
            
           this.greeting.html("Hello "+player.name);
           this.greeting.position(displayWidth/2-100,displayHeight/4);
        })
    }
}