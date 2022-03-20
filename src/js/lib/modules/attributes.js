import $ from "../core";

$.prototype.setAtr= function(attr, attrName){
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attr, attrName);
    }
    return this;
};

$.prototype.getAtr= function(attr){
    if (!attr){
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].getAttribute(attr);
        return this[i].getAttribute(attr);
    }
    
};
