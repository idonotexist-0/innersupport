// Element getter
const submitBtn = document.querySelector(".submit");
const resultText = document.querySelector("#result");
const submitError = document.getElementById("submit-error");
const questions = document.querySelector(".questions");
const textWithResult = document.getElementById("text-with-result");

// Function to calculate the score based on the selected options
function calculateScore() {
  let score = 0;

  // Loop through each question
  for (let i = 1; i <= 10; i++) {
    const question = document.getElementsByName("question" + i);

    // Check if any option is selected for the question
    if (Array.from(question).some((option) => option.checked)) {
      // Loop through each option to calculate the score
      for (let j = 1; j <= 4; j++) {
        const option = document.getElementById("q" + i + "-option" + j);

        // Check if the option is selected and add the corresponding score
        if (option.checked) {
          if (j === 1) {
            score += 2;
          } else if (j === 2) {
            score += 4;
          } else if (j === 3) {
            score += 6;
          } else if (j === 4) {
            score += 8;
          }
        }
      }
    } else {
      // If any question is unanswered, return -1 to indicate incomplete form
      return -1;
    }
  }

  return score;
}

// Function to handle form submission
function submitForm() {
  const score = calculateScore();

  if (score === -1) {
    submitError.style.display = "block";
  } else {
    submitError.style.display = "none";
    resultText.style.display = "block";
    questions.style.display = "none";
    textWithResult.style.display = "block";
    if (score <= 20) {
      resultText.innerHTML =
        "Your result - Depression Test: Minimal Depression";
    } else if (score <= 40) {
      resultText.innerHTML = "Your result - Depression Test: Mild Depression";
    } else if (score <= 60) {
      resultText.innerHTML = "Your result - Depression Test: Severe Depression";
    } else if (score <= 100) {
      resultText.innerHTML =
        "Your result - Depression Test: Very Severe Depression";
    }
  }
}

// Add event listener to the submit button
submitBtn.addEventListener("click", submitForm);
