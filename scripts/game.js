$(document).ready(function() {
    var gameState = {
        "money": 0,
        "areas": 0,
        // Delay between progress bar increments.
        "incrDel": 100,
        // Initial progress bar filling.
        "startProgr": 0,
    };



    function updateDisplay() {
        $("#moneyDisplay").html(gameState.money + " Areas");
    };

    function progress(percent, $element, time, afterwards) {
        var progressBarWidth = percent * $element.width() / 100;
        $element.find("div").animate({ width: progressBarWidth }, time || 500);
        if (typeof afterwards === "function") {
            afterwards()
        }
    }

    function moneyClick() {
        progress(100, 
                 $("#exploreBar"), 
                 gameState.incrDel*100,
                 function() {
                    gameState.money += 1;
                    progress(0,
                             $("#exploreBar"),
                             10);
                 }
        );
    }

    $("#moneyButton").click(moneyClick);
    setInterval(updateDisplay, 100);
});
