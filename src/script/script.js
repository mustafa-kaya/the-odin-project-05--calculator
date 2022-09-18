import {
  clearButton,
  deleteButton,
  addButton,
  subtractButton,
  divideButton,
  multiplyButton,
  assignmentButton,
  button0,
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
  firstOperand,
  secondOperand,
  operator,
  equalSign,
  currentOperand,
} from "./elements";

let numbers = [
  button0,
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
];

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button);
  });
});
