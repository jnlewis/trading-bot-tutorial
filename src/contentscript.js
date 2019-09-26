console.log("Executing action: " + page_action);

if (page_action == "open-position") {
    if (canEnterPosition()) {
        // Open position by clicking the buy button
        document.getElementsByClassName("btn-trade-up")[0].click();
    }
}

if (page_action == "close-position") {
    if (canExitPosition()) {
        // Close position by clicking the sell button
        document.getElementsByClassName("btn-trade-stop")[0].click();

        // Close the trade summary popup
        setTimeout(function() {
            document.getElementsByClassName("resultpop")[0].click();
            document.getElementsByClassName("losepop")[0].click();
        }, 1000);
    }
}

function canEnterPosition() {
    // Algorithm/Trading strategy code goes here to determine if it is time to buy.
    return true;
}

function canExitPosition() {
    // Algorithm/Trading strategy code goes here to determine if it is time to sell.
    return true;
}
