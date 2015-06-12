$(document).ready(function() {
    var gameState = {
        // Represents Areas.
        "money": 0,
        // Delay between progress bar increments.
        "incrDel": 100,
        // Initial progress bar filling.
        "startProgr": 0,
        // Self explanatory.
        "barFilling": false,
    };



    function updateDisplay() {
        $("#moneyDisplay").html(gameState.money + " Areas");
    };

    function progress(percent, $element, time, afterwards) {
        var progressBarWidth = percent * $element.width() / 100;
        $element.find("div").animate({ width: progressBarWidth }, time || 500);
        if (typeof afterwards === "function") {
            setTimeout(afterwards, time || 500);
        }
    }

    function moneyClick() {
        // Keeps you from clicking more than once.
        if (gameState.barFilling) {
            return;
        }
        gameState.barFilling = true;
        progress(100, 
                 $("#exploreBar"),
                 gameState.incrDel*100,
                 function() {
                    gameState.money += 1;
                    gameState.barFilling = false;
                    progress(0,
                             $("#exploreBar"),
                             10);
                 }
        );
    }

    $("#moneyButton").click(moneyClick);
    setInterval(updateDisplay, 100);
});
