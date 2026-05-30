function getValues() {
  let num1 = parseFloat(document.getElementById("num1").value) || 0;
  let num2 = parseFloat(document.getElementById("num2").value) || 0;
  return { num1, num2 };
}

function add() {
  let { num1, num2 } = getValues();
  document.getElementById("result").innerText = "Result: " + (num1 + num2);
}

function subtract() {
  let { num1, num2 } = getValues();
  document.getElementById("result").innerText = "Result: " + (num1 - num2);
}

function multiply() {
  let { num1, num2 } = getValues();
  document.getElementById("result").innerText = "Result: " + (num1 * num2);
}

function divide() {
  let { num1, num2 } = getValues();
  if (num2 === 0) {
    document.getElementById("result").innerText = "Result: Cannot divide by 0";
  } else {
    document.getElementById("result").innerText = "Result: " + (num1 / num2);
  }
}

function clearFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText = "Result: 0";
}

const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change button text
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "Light Mode";
  } else {
    toggleBtn.textContent = "Dark Mode";
  }
});