const username =document.getElementById("username");
const submitBtn =document.getElementById("submitBtn");
const finalScore =document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  submitBtn.disabled = !username.nodeValue;  
});


submitHighScore = e => {
e.preventDefault();
};