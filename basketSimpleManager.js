var basket = {};

var countItems = function (e) {

    var current = basket[e.detail.name];
    if (current) {
        // the entry exists, so add the quantity to it
        current.quantity += e.detail.quantity;
    } else {
        // it's a new entry so just use the detail object
        current = e.detail;
        basket[e.detail.name] = current;
    }

    console.log(basket);
};

document.addEventListener('basket', countItems);
