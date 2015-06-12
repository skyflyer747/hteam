$(document).ready(function() {
    var gameState = {
        "money": 0,
        "areas": 0
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
            millis = 1000;
        }
        else if (millis < 1) {
            return;    
        }
        progress(millis/100, $("#exploreBar"));
        setTimeout(function () {moneyClick(millis-100)}, 100);
    }

    $("#moneyButton").click(moneyClick);
    setInterval(updateDisplay, 100);
});
