/**
 * Created by zhannalibman on 13/02/2017.
 */

function Element(prefixTag, suffixTag) {
    this.children = [];
    this.prefixTag = prefixTag;
    this.suffixTag = suffixTag;
    this.css = {};
}

Element.prototype.append = function(element) {
    if (element instanceof Element){
        this.children.push(element);
    } else {
        throw new Error ("Unexpected element type. Should inherit from Element.");
    }
};

Element.prototype.toHTML = function() {
    var html = [];
    html.push(this.prefixTag.replace(">", " "  + parseCSS(this.css) + ">"));

    for (var i = 0; i < this.children.length; i++) {
        html.push(this.children[i].toHTML());
    }
    html.push(this.suffixTag);
    var result = html.join("");
    return result;

    function parseCSS(cssObject){
        var keys = Object.keys(cssObject);
        if (keys.length == 0){
            return "";
        }

        var style = "style=\'";
        for (var i = 0; i < keys.length; i++){
            style += keys[i] + " : " + cssObject[keys[i]] + "; ";
        }
        return style + "\'";
    };
};

Element.prototype.addStyleAttribute = function (attributeKeyValuePair) {
    var key = Object.keys(attributeKeyValuePair);
    if (key.length == 1) {
        this.css[key[0]] = attributeKeyValuePair[key];
    } else {
        throw new Error ("Invalid css object.");
    }
};
