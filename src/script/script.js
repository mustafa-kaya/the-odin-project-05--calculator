import {
  clearButton,
  deleteButton,
  addButton,
  subtractButton,
  divideButton,
  multiplyButton,
  periodButton,
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

/********************************* 
EVENT LISTENERS
*********************************/
// EventListeners for digits
numbers.forEach((number) => {
  number.addEventListener("click", function (e) {
    // Char limit to 12
    if (currentOperand.textContent.length < 12) {
      inputNumber(e);
    }
  });
});

// EventListeners for period
periodButton.addEventListener("click", () => {
  let arr = [...currentOperand.textContent];
  // We protect us for double or triple period
  if (!arr.includes(".")) {
    currentOperand.textContent += ".";
  }
});

// EventListener for CLEAR button
clearButton.addEventListener("click", clearDisplay);

// EventListener for Delete button
deleteButton.addEventListener("click", deleteNumber);

/********************************* 
 FUNCTIONS
*********************************/
// when I call this function it append to a new char to 'currentOperand'
function inputNumber(e) {
  if (currentOperand.textContent === "0") {
    currentOperand.textContent = "";
    currentOperand.textContent += e.target.textContent;
  } else {
    currentOperand.textContent += e.target.textContent;
  }
}

function clearDisplay() {
  firstOperand.textContent = "";
  secondOperand.textContent = "";
  operator.textContent = "";
  equalSign.textContent = "";
  currentOperand.textContent = "0";
}

clearDisplay();

function deleteNumber() {
  let tempArray = [...currentOperand.textContent];
  tempArray.pop();
  let tempString = tempArray.join("");
  currentOperand.textContent = tempString;
}
