// readonly will make it so you can't change text after assignment
// text? question marker after property makes it optional

// readonly scores: readonly number[];
// will error out on change of the array as well, not just reference

interface ButtonProps {
  readonly text: string;
  onClick?: () => void;
}

// TODO -  create a ColoredButtonProps interface that extends ButtonProps
const BuyButton: ButtonProps = {
  text: "Buy",
  onClick: () => console.log("Buy")
}


console.log(BuyButton.onClick());
// BuyButton.text = 'Some Other text';

interface ColoredButtonProps extends ButtonProps {
  color: string
}

const GreenBuyButton: ColoredButtonProps = {
  color: "Green",
  text: "Buy",
  onClick: () => console.log("Buy")
}

console.log(GreenBuyButton.color);