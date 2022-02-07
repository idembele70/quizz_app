export function getAllScore() {
  let scores = ""
  if (localStorage.getItem("quizz"))
    scores = JSON.parse(localStorage.getItem("quizz"))
  return scores
}

export function addScore(score) {
  let scores = ""
  if (localStorage.getItem("quizz")) {
    scores = JSON.parse(localStorage.getItem("quizz"))
    scores = [...scores, score]
    localStorage.setItem("quizz", JSON.stringify(scores))
  } else {
    scores = [score]
    localStorage.setItem("quizz", JSON.stringify(scores))
  }
  return scores
}

export function resetScore() {
  return localStorage.setItem("quizz", "")

}