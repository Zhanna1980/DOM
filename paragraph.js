/**
 * Created by zhannalibman on 13/02/2017.
 */
Paragraph.prototype = Object.create(Element.prototype);

function Paragraph (){
    Element.call(this, "<paragraph>", "</paragraph>");
    this.addStyleAttribute({"display" : "block"});
}

Paragraph.prototype.append = function(text) {
    if (text instanceof Text){
        this.children.push(text);
    } else {
        throw new Error ("Invalid parameter type.")
    }
};