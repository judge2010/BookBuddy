function apply_new(){
     var Book=document.getElementById("Title").value;
     localStorage.setItem("Title_n",Book);
     var Publisher=document.getElementById("publisher").value;
     localStorage.setItem("publisher_n",Publisher);
     var Class=document.getElementById("class").value;
     localStorage.setItem("class_n",Class);
     var Subject=document.getElementById("subject").value;
     localStorage.setItem("Subject_n",Subject);
     window.location="confirmation.html";
    };
    function add_m(){
     var Book=document.getElementById("Title").value;
     localStorage.setItem("Title_n",Book);
     var Publisher=document.getElementById("publisher").value;
     localStorage.setItem("publisher_n",Publisher);
     var Class=document.getElementById("class").value;
     localStorage.setItem("class_n",Class);
     var Subject=document.getElementById("subject").value;
     localStorage.setItem("Subject_n",Subject);
     window.location="New_b2.html";
    };