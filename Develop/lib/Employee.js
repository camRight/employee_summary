// TODO: Write code to define and export the Employee class

class Employee{
    constructor(name, id, email) {
    this.name = name
    this.id = id
    this.email = email
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
}

module.exports = Employee

// var dog={
//     name:"wolfy",
//     haircolor:"black"
// }

// var cat={
//     name:"meow",
//     haircolor:"brown"
// }
// class Food{
//     constructor(type,brand){
//         this.type=type
//         this.brand=brand
//     }
//     getType(){
//         return this.type
//     }   
//     getBrand(){
//         return this.brand
//     }
// }
// class Human extends Food{
//      constructor(type,brand){
//         super(type,brand)
//      }
// }

// class Animals extends Food{
//     // setting is storing data
//     constructor(name,haircolor,type,brand){
//         super(type,brand)

//         this.name = name
//         this.haircolor = haircolor
//     }
//     // "get" is a convention. You're getting data
//     getName(){
//         return this.name
//     }
//     getHaircolor(){
//         return this.haircolor
//     }

// }

// var dog=new Animals("wolfy","meow","dog","purina")
// var cat=new Animals("meow","brown","cat","iAMs")

