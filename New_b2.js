function apply_new2(){
     var Book=document.getElementById("Title").value;
     localStorage.setItem("Title_n2",Book);
     var Publisher=document.getElementById("publisher").value;
     localStorage.setItem("publisher_n2",Publisher);
     var Class=document.getElementById("class").value;
     localStorage.setItem("class_n2",Class);
     var Subject=document.getElementById("subject").value;
     localStorage.setItem("Subject_n2",Subject);
     window.location="confirmation.html";
    };
    function add_more(){
     var Book=document.getElementById("Title").value;
     localStorage.setItem("Title_n2",Book);
     var Publisher=document.getElementById("publisher").value;
     localStorage.setItem("publisher_n2",Publisher);
     var Class=document.getElementById("class").value;
     localStorage.setItem("class_n2",Class);
     var Subject=document.getElementById("subject").value;
     localStorage.setItem("Subject_n2",Subject);
     window.location="New_b3.html";
    };