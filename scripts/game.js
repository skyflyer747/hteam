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
        "upgrades": [
            {
                "name": "Mechanical Wings",
                "effect": {
                    "target": "incrDel",
                    "action": "decrease",
                    "amount": 10,
                }
            },
        ],
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

    function updateUpgrades() {
        var upgradeTable = $("#upgrades");
        var tableContents = "<tbody>";
        for (int i=0; i < gameState.upgrades.length; ++i) {
            var current = gameState.upgrades[i];
            var currentObject = $("<span index=\"" + i + "\" class=\"upgradeData\"></span>");
            currentObject(current.name);
            currentObject.click(function() {
                var upgradeData = gameState.upgrades[$(this).get("index")];
                console.log(upgradeData);
            });
        }
        upgradeTable.html(tableContents);
    }

    $("#moneyButton").click(moneyClick);
    setInterval(updateDisplay, 100);
    setInterval(updateUpgrades, 100);
});
