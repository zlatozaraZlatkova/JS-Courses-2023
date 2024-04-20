class Animal {
    eat() {
        return `eating...`
    }

}
class Dog  extends Animal{
    constructor() {
        super();

    }
    bark() {
        return`barking...`
    }
}
class Cat extends Animal{ 
    meowing() {
        return `meowing...`
    }
}


const cat = new Cat();
console.log(cat.meowing());
console.log(cat.eat());

const dog = new Dog();
console.log(dog.bark());
console.log(dog.eat());



