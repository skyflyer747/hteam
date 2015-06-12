$(document).ready(function() {
    var gameState = {
        "money": 0,
        "areas": 0
    };
    $("#moneyButton").click(function() {
        gameState.money += 1;
    });    

    function updateDisplay() {
        $("#moneyDisplay").html("€" + gameState.money);
    };

    setInterval(updateDisplay, 100);
});
