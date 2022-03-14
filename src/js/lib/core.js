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
        Object.assign(this, document.querySelectorAll(selector).length);
        return this;
    }
};

window.$ = $;