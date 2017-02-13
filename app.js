/**
 * Created by zhannalibman on 13/02/2017.
 */
(function ($) {
    var myDiv = new Div();
    myDiv.addStyleAttribute({"background-color" : "green"});
    var paragraph = new Paragraph();
    paragraph.addStyleAttribute({"font-size" : "30px"});
    var text = new Text("Hello World");
    paragraph.append(text);
    myDiv.append(paragraph);
    myDiv.toHTML();
    var myElements = $(myDiv.toHTML());
    $("body").append(myElements);

})(jQuery);
