/**
 * Created by zhannalibman on 13/02/2017.
 */
Div.prototype = Object.create(Element.prototype);

function Div (){
    Element.call(this, "<myDiv>", "</myDiv>");
    this.addStyleAttribute({"display" : "block"});
}

