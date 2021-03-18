function apply_old(){
     var Book=document.getElementById("Title").value;
     localStorage.setItem("Title_3",Book);
     var Publisher=document.getElementById("publisher").value;
     localStorage.setItem("publisher_3",Publisher);
     var Class=document.getElementById("class").value;
     localStorage.setItem("class_3",Class);
     var Subject=document.getElementById("subject").value;
     localStorage.setItem("Subject_3",Subject);
     window.location="confirmation - 2.html";
    };
    