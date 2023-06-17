// Get the display element
const display = document.getElementById("display");

// Function to update the display
function updateDisplay(value) {
  display.value += value;
}

// Function to calculate the result
function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Add event listeners to the keypad buttons
const buttons = document.querySelectorAll(".keypad button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const value = this.getAttribute("data-value");
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      clearDisplay();
    } else {
      updateDisplay(value);
    }
  });
});
