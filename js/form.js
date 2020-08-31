class Form{

    constructor(){

        this.create = createButton("create+");

        this.width = createInput("Enter Width");
        this.height = createInput("Enter Height");

        this.next = createButton("Next");

        
    }

    display(){

        this.create.position(displayWidth/2 - 40 , displayHeight/2 - 80);

        this.create.mousePressed(()=>{

            this.width.position(displayWidth/2 - 40 , displayHeight/2 - 80);
            this.height.position(displayWidth/2 - 40 , displayHeight/2 - 120);

            this.next.position(displayWidth/2 - 100 , displayHeight/2 - 40);

            this.create.hide();
           
          });

          this.next.mousePressed(()=>{

            screenWidth = this.width.value();
            screenHeight = this.height.value();

            this.width.hide();
            this.height.hide();

            this.next.hide();
           
          });



    }
}