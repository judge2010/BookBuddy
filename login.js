function log_in(){
    player1_name=document.getElementById("player1un").value;
    player2_name=document.getElementById("player2un").value;
    localStorage.setItem("player_name1",player1_name);
    localStorage.setItem("player_name2",player2_name);
    window.location="donate_or_take.html";
}
function new_a_create(){
window.location="new_acount.html";
};