
function show_infoN(){
var ad=localStorage.getItem("adress");
var Publisher=localStorage.getItem("publisher_n");
    var Book=localStorage.getItem("Title_n");
    var Subject=localStorage.getItem("Subject_n");
    var Class=localStorage.getItem("class_n");
document.getElementById("adrress_of_d").innerHTML="Address - " + ad;
document.getElementById("book_info").innerHTML= "Book Information - " + Book + "," + Publisher + "," + Subject + "," + Class;
};
function work_done_2(){
window.location="Final screen donor.html";
};