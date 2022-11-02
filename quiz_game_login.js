function addUser(){
    player1_name = document.getElementById("player1_name input").value;
    player2_name = document.getElementById("player2_name_input").value;

    lacalStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    windows.location = "quiz_game_page.html"
}
