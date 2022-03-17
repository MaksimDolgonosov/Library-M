import $ from "../core";

$.prototype.classAdd = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...classNames);
    }
    return this;
};

$.prototype.classRemove = function (...classNames) {
    for (let i = 0; i < this.length; i++) {


        this[i].classList.remove(...classNames);
    }
    return this;
};
$.prototype.classToggle = function (className) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].classList.contains(className)){
            this[i].classList.remove(className);
        } else {
            this[i].classList.add(className);
        }
        
    }
    return this;
};