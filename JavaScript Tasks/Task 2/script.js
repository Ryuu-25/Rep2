function sortString() {
  const userInput = document.getElementById("userInput").value;
  const sortedString = userInput.split('').sort().join('');
  document.getElementById("output").innerHTML = `Sorted string: ${sortedString}`;
}