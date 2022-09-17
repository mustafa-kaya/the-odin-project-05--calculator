function Key(context, classes = ["key"]) {
  this.context = context;
  this.classes = classes;

  this.generateHTML = function () {
    // Create div
    let div = document.createElement("div");
    div.classList.add("key");
    // Add classes to div
    classes.forEach((keyClass) => {
      div.classList.add(keyClass);
    });
    // Add textContent to div
    div.innerHTML += context;
    return div;
  };
}

// Create keys from Key Object
const keysDiv = document.querySelector(".keys");

let keyClear = new Key("CLEAR", ["key--long", "key--dark"]);
let keyDel = new Key("<", ["key--dark"]);
let keyDivider = new Key("÷", ["key--dark"]);
let key7 = new Key("7");
let key8 = new Key("8");
let key9 = new Key("9");
let keyMultiplier = new Key("×", ["key--dark"]);
let key4 = new Key("4");
let key5 = new Key("5");
let key6 = new Key("6");
let keySubtraction = new Key("-", ["key--dark"]);
let key1 = new Key("1");
let key2 = new Key("2");
let key3 = new Key("3");
let keyAddition = new Key("+", ["key--dark"]);
let key0 = new Key("0", ["key--long"]);
let keyPeriod = new Key(".");
let keyEqual = new Key("=", ["key--dark"]);

let keys = [
  keyClear,
  keyDel,
  keyDivider,
  key7,
  key8,
  key9,
  keyMultiplier,
  key4,
  key5,
  key6,
  keySubtraction,
  key1,
  key2,
  key3,
  keyAddition,
  key0,
  keyPeriod,
  keyEqual,
];

keys.forEach((key) => {
  keysDiv.appendChild(key.generateHTML());
});

export { Key, keys };
