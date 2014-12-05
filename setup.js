"strict mode";

var fireBasketEvent = function(detail, quantity) {
	detail.quantity = quantity;
	document.dispatchEvent(
		new CustomEvent(
			'basket', {
    			detail: detail
			}
		)
	);
};

var clicked = function(e) {
	fireBasketEvent(
		JSON.parse(e.currentTarget.dataset.detail),
		1
	);
}

var buttons = document.querySelectorAll("button");

for (var b=buttons.length-1; b>=0; b--) {
  buttons[b].addEventListener('click', clicked);
}
