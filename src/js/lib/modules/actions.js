import $ from "../core";

$.prototype.html = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
    return this;
};


$.prototype.eq = function (i) {
    let swap = this[i];
    let swapLength = Array.from(this).length;
    for (let i = 0; i < swapLength; i++) {
        delete this[i];
    }
    this[0] = swap;
    this.length = 1;
    return this;
};

$.prototype.index = function () {
    let parent = this[0].parentNode;
    let chlndrn = [...parent.children];



    return chlndrn.findIndex(item => {
        return item == this[0];
    });
};

$.prototype.find = function (selector) {
    const newObj = this[0].querySelectorAll(selector);
    for (let i = 0; i < this.length; i++) {
        delete this[i];
    }
 
    Object.assign(this, newObj);
    this.length = newObj.length;
    return this;
}