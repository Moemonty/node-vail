// readonly will make it so you can't change text after assignment
// text? question marker after property makes it optional
// TODO -  create a ColoredButtonProps interface that extends ButtonProps
var BuyButton = {
    text: "Buy",
    onClick: function () { return console.log("Buy"); }
};
console.log(BuyButton.onClick());
var GreenBuyButton = {
    color: "Green",
    text: "Buy",
    onClick: function () { return console.log("Buy"); }
};
console.log(GreenBuyButton.color);
