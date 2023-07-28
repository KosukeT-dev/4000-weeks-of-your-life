document.getElementById('calculateBtn').addEventListener('click', function() {
  const ageInput = document.getElementById('age');
  const age = parseInt(ageInput.value);

  const weeksInALife = 4000;
  const weeksLived = age * 52;
  const remainingWeeks = weeksInALife - weeksLived;

  const resultElement = document.getElementById('result');

  if (age >= 77 && age <= 110) {
    resultElement.innerHTML = `You have approximately ${remainingWeeks} weeks left in your life. The number of weeks displayed may be negative. You are healthy!`;
  } else {
    resultElement.innerHTML = `You have approximately ${remainingWeeks} weeks left in your life.`;
  }
  
  const imageUrl = "https://source.unsplash.com/featured/?life";
  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imageElement);
});