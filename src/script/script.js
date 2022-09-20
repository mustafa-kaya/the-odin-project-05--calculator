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
  operatorSign,
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

let operators = [addButton, subtractButton, divideButton, multiplyButton];

/********************************* 
EVENT LISTENERS
*********************************/
// EventListeners for digits
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (equalSign.textContent !== "=") {
      // Char limit to 12
      if (currentOperand.textContent.length < 12) {
        inputNumber(e);
      }
    } else {
      clearDisplay();
      if (currentOperand.textContent.length < 12) {
        inputNumber(e);
      }
    }
  });
});

// Keydown EventListeners for digits
window.addEventListener("keydown", (e) => {
  if (/\d/.test(e.key)) {
    inputKeydownNumber(e);
  }
});

// EventListeners for period
periodButton.addEventListener("click", () => {
  if (equalSign.textContent !== "=") {
    let arr = [...currentOperand.textContent];
    // We protect us for double or triple period
    if (!arr.includes(".")) {
      currentOperand.textContent += ".";
    }
  }
});

// Keydown EventListeners for period
window.addEventListener("keydown", (e) => {
  if (e.key === ".") {
    if (equalSign.textContent !== "=") {
      let arr = [...currentOperand.textContent];
      // We protect us for double or triple period
      if (!arr.includes(".")) {
        currentOperand.textContent += ".";
      }
    }
  }
});

// EventListener for CLEAR button
clearButton.addEventListener("click", clearDisplay);

// Keydown EventListener for CLEAR button
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    clearDisplay();
  }
});

// EventListener for Delete button
deleteButton.addEventListener("click", deleteNumber);

// Keydown EventListener for Delete button
window.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    deleteNumber();
  }
});

// Event Listener for operators
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    clickOperator(e);
  });
});

// Keydown EventListener for operators
window.addEventListener("keydown", (e) => {
  if (e.key === "+") {
    keydownOperator(e);
  } else if (e.key === "-") {
    keydownOperator(e);
  } else if (e.key === "*") {
    keydownOperator(e);
  } else if (e.key === "/") {
    keydownOperator(e);
  }
});

// Click EventListener for equal Button
assignmentButton.addEventListener("click", () => {
  if (firstOperand.textContent !== "" && equalSign.textContent !== "=") {
    secondOperand.textContent = currentOperand.textContent;
    equalSign.textContent = "=";
    let number1 = parseFloat(firstOperand.textContent);
    let number2 = parseFloat(secondOperand.textContent);
    if (operatorSign.textContent === "+") {
      let result = number1 + number2;
      displayLimitControl(result);
    } else if (operatorSign.textContent === "-") {
      let result = number1 - number2;
      displayLimitControl(result);
    } else if (operatorSign.textContent === "×") {
      let result = number1 * number2;
      displayLimitControl(result);
    } else if (operatorSign.textContent === "/") {
      let result = number1 / number2;
      displayLimitControl(result);
    }
  }
});

// Keyboard EventListener for equal Button
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === "=") {
    if (firstOperand.textContent !== "" && equalSign.textContent !== "=") {
      secondOperand.textContent = currentOperand.textContent;
      equalSign.textContent = "=";
      let number1 = parseFloat(firstOperand.textContent);
      let number2 = parseFloat(secondOperand.textContent);
      if (operatorSign.textContent === "+") {
        let result = number1 + number2;
        displayLimitControl(result);
      } else if (operatorSign.textContent === "-") {
        let result = number1 - number2;
        displayLimitControl(result);
      } else if (operatorSign.textContent === "×") {
        let result = number1 * number2;
        displayLimitControl(result);
      } else if (operatorSign.textContent === "/") {
        let result = number1 / number2;
        displayLimitControl(result);
      }
    }
  }
});

/********************************* 
 FUNCTIONS
*********************************/
// when I call this function it append to a new char to 'currentOperand'
function inputNumber(e) {
  if (currentOperand.textContent === "0" && equalSign.textContent !== "=") {
    currentOperand.textContent = "";
    currentOperand.textContent += e.target.textContent;
  } else if (equalSign.textContent !== "=") {
    currentOperand.textContent += e.target.textContent;
  }
}

function inputKeydownNumber(e) {
  if (currentOperand.textContent === "0" && equalSign.textContent !== "=") {
    currentOperand.textContent = "";
    currentOperand.textContent += e.key;
  } else if (equalSign.textContent !== "=") {
    currentOperand.textContent += e.key;
  }
}

function clearDisplay() {
  firstOperand.textContent = "";
  secondOperand.textContent = "";
  operatorSign.textContent = "";
  equalSign.textContent = "";
  currentOperand.textContent = "0";
}

clearDisplay();

function deleteNumber() {
  if (equalSign.textContent !== "=") {
    let tempArray = [...currentOperand.textContent];
    tempArray.pop();
    let tempString = tempArray.join("");
    currentOperand.textContent = tempString;
  }
}

function clickOperator(e) {
  if (
    operatorSign.textContent === "" &&
    currentOperand.textContent !== "" &&
    equalSign.textContent !== "="
  ) {
    firstOperand.textContent = currentOperand.textContent;
    if (e.target.textContent === "÷") {
      operatorSign.textContent = "/";
    } else {
      operatorSign.textContent = e.target.textContent;
    }
    currentOperand.textContent = "";
  }
}

function keydownOperator(e) {
  if (
    operatorSign.textContent === "" &&
    currentOperand.textContent !== "" &&
    equalSign.textContent !== "="
  ) {
    firstOperand.textContent = currentOperand.textContent;
    if (e.key === "*") {
      operatorSign.textContent = "×";
    } else {
      operatorSign.textContent = e.key;
    }
    currentOperand.textContent = "";
  }
}

function displayLimitControl(resultInt) {
  let result = resultInt.toString();
  if (result.length > 12) {
    result = result.substr(0, 12);
  }
  currentOperand.textContent = result;
}
