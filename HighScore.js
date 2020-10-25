const username =document.getElementById("username");
const submitBtn =document.getElementById("submitBtn");
const finalScore =document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  submitBtn.disabled = !username.Value;  
});


submitHighScore = e => {
  e.preventDefault();

  const score = {
  score: mostRecentScore,
  name: userName.value,
  };
  highScores.push(score);

  localStorage.setItem("highScores", JSON.stringify(highScores));
};