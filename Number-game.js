<!DOCTYPE html>
<html>
  <head>
    <title>Guess the Number Game</title>
  </head>
  <body>
    <h1>Guess the Number Game</h1>
    <p>Guess a number between 1 and 100</p>
    <input type="text" id="guessField">
    <input type="submit" value="Submit guess" id="guessSubmit">
    <p class="message"></p>

    <script>
      // Generate a random number between 1 and 100
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      let attempts = 0;

      const guessSubmit = document.getElementById("guessSubmit");
      const guessField = document.getElementById("guessField");
      const message = document.querySelector(".message");

      guessSubmit.addEventListener("click", checkGuess);

      function checkGuess() {
        const userGuess = parseInt(guessField.value);
        attempts++;

        if (userGuess === randomNumber) {
          message.textContent = `Congratulations! You got it right in ${attempts} attempts!`;
          message.style.color = "green";
          guessField.disabled = true;
          guessSubmit.disabled = true;
        } else if (userGuess > randomNumber) {
          message.textContent = "Too high! Try again.";
          message.style.color = "red";
        } else {
          message.textContent = "Too low! Try again.";
          message.style.color = "red";
        }
      }
    </script>
  </body>
</html>
