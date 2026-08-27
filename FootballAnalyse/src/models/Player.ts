export class Player{
id: number;
name: string;
firstname: string;
lastname:string;
age:number;
height:string;
weight:string;
number: 10;
position:string;
photo: string;
constructor(
id: number,
name: string,
firstname: string,
lastname:string,
age:number,
height:string,
weight:string,
number: 10,
position:string,
photo: string,
)
{
    this.id = id
    this.name = name
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.height = height
    this.weight = weight
    this.number = number
    this.position = position
    this.photo = photo
}
}