function apply_old(){
     var Book=document.getElementById("Title").value;
     localStorage.setItem("Title_o",Book);
     var Publisher=document.getElementById("publisher").value;
     localStorage.setItem("publisher_o",Publisher);
     var Class=document.getElementById("class").value;
     localStorage.setItem("class_o",Class);
     var Subject=document.getElementById("subject").value;
     localStorage.setItem("Subject_o",Subject);
     window.location="confirmation - 2.html";
    };
    
    function add_more(){
     var Book=document.getElementById("Title").value;
     localStorage.setItem("Title_o2",Book);
     var Publisher=document.getElementById("publisher").value;
     localStorage.setItem("publisher_o2",Publisher);
     var Class=document.getElementById("class").value;
     localStorage.setItem("class_o2",Class);
     var Subject=document.getElementById("subject").value;
     localStorage.setItem("Subject_o2",Subject);
     window.location="Old_b(3).html";
    };
     
    