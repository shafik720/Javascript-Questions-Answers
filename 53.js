// class এর একটা এক্সাম্পল দাও । 

class cars{
    brand;
    color;
    start(){
        console.log(`Start the damn ${this.brand} car`)
    }
    constructor(brandName, brandColor){
        this.brand = brandName;
        this.color = brandColor;        
    }
}
let x = new cars('Mercedez', 'Yellow');
x.start();