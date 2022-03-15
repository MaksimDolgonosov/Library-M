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

// const $ = function(selector){
//     return new $.prototype.init(selector);
// };

// $.prototype.init = function(selector){
// if (!selector){
//     return this;
// }else{
//     Object.assign(this, document.querySelectorAll(selector));
//     this.length = document.querySelectorAll(selector).length;
//     return this;
// }
// };

const $ = function (selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
    if (!selector) {
        return this; // {} пустой объект
    } else {
        Object.assign(this, document.querySelectorAll(selector));

        return this;
    }
};
$.prototype.init.prototype = $.prototype;
window.$ = $;
console.log($(".active"));

function P(a,b,c){
    this.a =a,
    this.b=b,
    this.c = function init (){
        console.log(c);
    }
}
const person = new P("sdgf", "asf", 1);
person.c();

