const display = document.querySelector('input[name="display"]');

function appendToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    const expr = display.value
      .replace(/sin\(/g, "Math.sin(degToRad(")
      .replace(/cos\(/g, "Math.cos(degToRad(")
      .replace(/tan\(/g, "Math.tan(degToRad(")
      .replace(/log\(/g, "Math.log10(")
      .replace(/sqrt\(/g, "Math.sqrt(")
      .replace(/abs\(/g, "Math.abs(")
      .replace(/PI/g, "Math.PI")
      .replace(/E/g, "Math.E");
    display.value = eval(expr);
  } catch {
    display.value = "Error";
  }
}

function degToRad(deg) {
  return (deg * Math.PI) / 180;
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  display.value = "";
}

function percentage() {
  try {
    display.value = parseFloat(display.value) / 100;
  } catch {
    display.value = "Error";
  }
}

function toggleAdvanced() {
  const panel = document.getElementById("advancedPanel");
  panel.classList.toggle("show");
}

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || "+-*/().".includes(key)) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
