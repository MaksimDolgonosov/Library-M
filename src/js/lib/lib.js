import $ from "./core";
import "./modules/display";

function Animal(name, age) {
    this.name = name;
    this.age = age;
    // this.say = function () {
    //     console.log("Hello");
    // }
}

Animal.prototype.say = function () {
    console.log("Hello");
};

console.log(Animal.prototype);
function Cat(name, age, hasTail) {
    this.tail = hasTail;
}
let Myrzik = new Cat("Murzik", 3, true);
Myrzik.prototype=Animal.prototype;
Myrzik.prototype.say();
console.log(Myrzik);

export default $;