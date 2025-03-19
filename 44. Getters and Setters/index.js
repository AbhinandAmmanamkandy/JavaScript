// // getter - a special method that makes a property readable
// // setter - a special method that makes a property writable

// // validate and modify a value when reading/writing a property

// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth>0){
//             this._width = newWidth;
//         }else{
//             console.error("Width must be a pisitive number");
//         }
//     }

//     set height(newHeight){
//         if(newHeight>0){
//             this._height = newHeight;
//         }else{
//             console.error("Height must be a pisitive number");
//         }
//     }

//     get width(){
//         return this._width;
//     }

//     get height(){
//         return this._height;
//     }

//     get area(){
//         return this._width * this._height;
//     }
// }

// const rectangle = new Rectangle(3, 4);

// rectangle.width = 5;
// rectangle.height = 6;

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }else{
            console.error("First name must be a non empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }else{
            console.error("Last name must be a non empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }else{
            console.error("Age must be a non negative number");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("Spongebob", "Squarepants", 30);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);