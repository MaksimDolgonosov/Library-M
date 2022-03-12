// (() => {
//     const $ = function (selector) {
//         const elements = document.querySelectorAll(selector);
//         console.log(elements);
//         const obj = {};
//         obj.hide = () => {
//             elements.forEach(element => {
//                 element.style.display = 'none';

//             });
//             return obj;
//         };
//         obj.show = () => {
//             elements.forEach(element => {
//                 element.style.display = '';

//             });
//             return obj;
//         };
//         return obj;
//     };
//     window.$ = $;
// })();

const person = {
    name: "Max",
    age: 31,
    sex: "famele",
    say: function(){
        console.log("hello");
    }
};


let person2 = new person.prototype.say();

//console.log(new person.prototype);

