const textInput = document.getElementById("text-input");
const btnCheck = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkPalindrome = input => {
  const originalInput = input;

  //alert
  if (input === ""){
    alert("Please input a value");
    return
  }

  resultDiv.replaceChildren();

  //upper case and all non-alphanumeric
  const inputUpperCase = input.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

  const resultCheck = (inputUpperCase) => {
    return inputUpperCase === [...inputUpperCase].reverse().join('') ? 'is' : 'is not';
  }

  var result = `${originalInput} ${resultCheck(inputUpperCase)} a palindrome`;

  //add result text no result-div 

  const resultText = document.createElement("p");
  resultText.classList.add("presult");
  resultText.innerText = result;
  resultDiv.appendChild(resultText);

  resultDiv.classList.remove('hidden');
}

// button click
btnCheck.addEventListener("click", () => {
  checkPalindrome(textInput.value);
  textInput.value = '';
})