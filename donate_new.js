
    

function giving_newB(){
        var Publisher=localStorage.getItem("publisher_n");
            var Book=localStorage.getItem("Title_n");
            var Subject=localStorage.getItem("Subject_n");
            var Class=localStorage.getItem("class_n");
        document.getElementById("book_info").innerHTML= "Book 1 - " + Book + "," + Publisher + "," + Subject + "," + Class;
        var Publisher2=localStorage.getItem("publisher_o2");
            var Book2=localStorage.getItem("Title_n2");
            var Subject2=localStorage.getItem("Subject_n2");
            var Class2=localStorage.getItem("class_n2");
        document.getElementById("book_info2").innerHTML= "Book 2 - " + Book2 + "," + Publisher2 + "," + Subject2 + "," + Class2;
        var Publisher3=localStorage.getItem("publisher_n3");
        var Book3=localStorage.getItem("Title_n3");
        var Subject3=localStorage.getItem("Subject_n3");
        var Class3=localStorage.getItem("class_n3");
    document.getElementById("book_info3").innerHTML= "Book 3 - " + Book3 + "," + Publisher3 + "," + Subject3 + "," + Class3;
    document.getElementById("Donate").innerHTML="<button id='Donate' onclick='DHL()' class='btn btn-primary' >Donate</button>"
};
    function DHL(){
        window.location="Amazon.html";
    };