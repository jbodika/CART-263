class Bush{
    constructor(x,y,size,color){
        this.x=x;
        this.y=y;
        this.size=size;
        this.color=color; 
        this.bushImg = "../assets/images/bush.svg";
        this.bush

    }

    renderBush(){
       
    this.bush = document.createElement('img');
   this.bush.setAttribute('src', this.bushImg)
   this.bush.style.width = this.size +'px'
   this.bush.style.height = this.size +'px'

//    this.bush.style.top=this.y;
//    this.bush.style.width=this.size;
//    this.bush.style.height=this.size;
    document.querySelector(".grass").appendChild(this.bush)

   console.log(this.bush.style.left)


    }
}