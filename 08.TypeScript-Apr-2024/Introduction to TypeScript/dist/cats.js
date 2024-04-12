class Cat {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    meow() {
        return `${this.name}, age ${this.age} says Meow`;
    }
}
function getCat(inputArr) {
    let data = inputArr.slice();
    for (let line of data) {
        let token = line.split(" ");
        let name = token[0];
        let age = token[1];
        let cat = new Cat(name, age);
        console.log(cat.meow());
    }
}
getCat(["Mellow 2", "Tom 5"]);
getCat(["Candy 1", "Poppy 3", "Nyx 2"]);
