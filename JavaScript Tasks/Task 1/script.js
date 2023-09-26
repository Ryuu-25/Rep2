function revNum() {
  const Input = document.getElementById("Input").value;

  if (!isNaN(Input) && Input != "") {
    const revNum = parseFloat(Input.toString().split("").reverse().join(""));
    document.getElementById("output").innerHTML = `Reversed number: ${revNum}`;
  } else {
    document.getElementById("output").innerHTML =
      "Invalid input. Please enter a valid number.";
  }
}