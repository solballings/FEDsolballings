function increment(event, value) {
    let parent = event.target.parentElement;
    let article = parent.parentElement;

    let amountElement = article.querySelector("span[data-amount]");
    let newAmount = parseInt(amountElement.getAttribute("data-amount")) + 1
    amountElement.setAttribute("data-amount", newAmount);
    amountElement.innerHTML = newAmount;

    let valueElement = article.querySelector("p[data-value]");
    let total = document.getElementById("total");

    let newTotal = parseFloat(total.getAttribute("data-value")) + parseFloat(value);
    total.setAttribute("data-value", newTotal); 
    total.innerHTML = "€" + newTotal.toFixed(2);
    
    let newValue = parseFloat(valueElement.getAttribute("data-value")) + parseFloat(value);
    valueElement.setAttribute("data-value", newValue);
    valueElement.innerHTML = "€" + newValue.toFixed(2);
}

function decrement(event, value) {
    let parent = event.target.parentElement;
    let article = parent.parentElement;

    let amountElement = article.querySelector("span[data-amount]");
    let newAmount = parseInt(amountElement.getAttribute("data-amount")) - 1
    let stop = false
    if (newAmount < 0) {
        newAmount = 0;
        stop = true;
    }
    amountElement.setAttribute("data-amount", newAmount);
    amountElement.innerHTML = newAmount;

    if (stop) {
        return;
    }

    let valueElement = article.querySelector("p[data-value]");
    let total = document.getElementById("total");

    let newTotal = parseFloat(total.getAttribute("data-value")) - parseFloat(value);
    if (newTotal < 0) {
        newValue = 0;
    }
    total.setAttribute("data-value", newTotal); 
    total.innerHTML = "€" + newTotal.toFixed(2);
    
    let newValue = parseFloat(valueElement.getAttribute("data-value")) - parseFloat(value);
    if (newValue < 0) {
        newValue = 0;
    }
    valueElement.setAttribute("data-value", newValue);
    valueElement.innerHTML = "€" + newValue.toFixed(2);
}