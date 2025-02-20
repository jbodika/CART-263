class Bush{
    constructor(x,y,size,color){
        this.x=x;
        this.y=y;
        this.size=size;
        this.color=color; 
        this.bushImg = "https://img.freepik.com/free-vector/bush-garden-plant_24908-80964.jpg?t=st=1740084820~exp=1740088420~hmac=d958909852a220527a6ea1c830d1e76d8852a30bc37ff1326170b6068940e402&w=1380"
    }

    renderBush(){

    this.bushDiv = document.createElementNS(this.bushImg,'svg');
    console.log(this.bushDiv)

   // this.bushDiv.append(this.bushImg)
   // let svg = document.createElement('');

    }
}