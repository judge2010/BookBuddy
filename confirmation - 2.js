        function done(){        
        window.location="confirmation.html";
 window.location="adress - 2.html";
};
function check_b(){
    var Publisher=localStorage.getItem("publisher_o");
    var Book=localStorage.getItem("Title_o");
    var Subject=localStorage.getItem("Subject_o");
    var Class=localStorage.getItem("class_o");
    document.getElementById("book_info").innerHTML= Book + " / "  + Publisher + " / " + "Class " + Class + " / "  + Subject;
    var Publisher2=localStorage.getItem("publisher_o2");
    var Book2=localStorage.getItem("Title_o2");
    var Subject2=localStorage.getItem("Subject_o2");
    var Class2=localStorage.getItem("class_o2");
    document.getElementById("book_info2").innerHTML= Book2 + " / "  + Publisher2 + " / " + "Class " + Class2 + " / "  + Subject2;
   var Publisher3=localStorage.getItem("publisher_3");
    var Book3=localStorage.getItem("Title_3");
    var Subject3=localStorage.getItem("Subject_3");
    var Class3=localStorage.getItem("class_3");
    document.getElementById("book_info3").innerHTML= Book3 + " / "  + Publisher3 + " / " + "Class " + Class3 + " / "  + Subject3;
   };
  