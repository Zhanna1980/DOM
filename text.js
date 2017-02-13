Text.prototype = Object.create(Element.prototype);

function Text (string){
    Element.call(this, "", "");
    this.string = string;
}

Text.prototype.append = function() {
    return;
};

Text.prototype.toHTML = function(){
    return this.string;
};