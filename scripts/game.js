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
        $("#moneyDisplay").html("€" + gameState.money);
    };

    function progress(percent, $element) {
        var progressBarWidth = percent * $element.width() / 100;
        $element.find("div").animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
    }

    function moneyClick(millis) {
        console.log("MILLIS: " + millis);
        if (isNaN(millis)) {
            millis = gameState.startProgr;
        }
        else if (millis >= 100) {
            gameState.money += 1; 
            return;    
        }
        progress(millis, $("#exploreBar"))
        setTimeout(moneyClick(millis+1), gameState.incrDel);
    }

    $("#moneyButton").click(moneyClick);
    setInterval(updateDisplay, 100);
});
