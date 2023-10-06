// class person{
//     constructor(name,age) 
//     {
//         this.name = name;
//         this.age = age; 
//     }
// }
//     const p1 = new person('Ram',22);
//     console.log(p1);

class car{
    constructor(name,color,price)
    {
        this.name = name;
        this.color = color;
        this.price = price;
    }

  //getter
  get getname()
  {
    return this.name;
  }

  //setter
  set setPrice(newPrice)
  {
    this.price=newPrice;
  }

}
class RacingCar extends car
{
    constructor(name,color,price,maxspeed)
    {
        super(name,color,price);
        this.maxspeed=maxspeed;
    }
}
const C1 = new car('lamborgini','yellow',30000);
const C2 = new RacingCar('ferrari','red', 10000000,400); 
  console.log(C2);
//   C1.setPrice="40000000"
//   console.log(C1)

// let collage ={
//     name : "Saitm",
//     city : "Delhi"
// }

// let {name,city} = collage;

// console.log(name,city);

// let arr1=[1,2,3,4];
// let arr2=[5,6,7,8];
// let arr3=[...arr1,...arr2];
// console.log(arr3);

