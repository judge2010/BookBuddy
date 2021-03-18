function apply_new(){
     var Book=document.getElementById("Title").value;
     localStorage.setItem("Title_n3",Book);
     var Publisher=document.getElementById("publisher").value;
     localStorage.setItem("publisher_n3",Publisher);
     var Class=document.getElementById("class").value;
     localStorage.setItem("class_n3",Class);
     var Subject=document.getElementById("subject").value;
     localStorage.setItem("Subject_n3",Subject);
     window.location="confirmation.html";
    };
    