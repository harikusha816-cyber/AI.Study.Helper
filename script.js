let progress = {
  "7 Days": 0,
  "30 Days": 0,
  "3 Months": 0,
  "7 Months": 0,
  "1 Year": 0
};

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}

function updateProgress() {
  for (let key in progress) {
    progress[key] += 5;
    if (progress[key] > 100) progress[key] = 100;
  }
}

function searchTopic() {
  let topic = document.getElementById("searchInput").value;
  document.getElementById("searchResult").innerText =
    topic + " is an important concept.";
  updateProgress();
}

function chatDoubt() {
  let doubt = document.getElementById("chatInput").value;
  document.getElementById("chatResult").innerText =
    "Answer for: " + doubt;
  updateProgress();
}

function checkTest() {
  let ans = document.getElementById("testAnswer").value;
  let result = ans == "4" ? "Correct ✅" : "Wrong ❌";
  document.getElementById("testResult").innerText = result;
  updateProgress();
}

function showProgress() {
  let text = "";
  for (let key in progress) {
    text += key + ": " + progress[key] + "%\n";
  }
  document.getElementById("progressData").innerText = text;
}

document.querySelector("button[onclick=\"showSection('progress')\"]")
  .addEventListener("click", showProgress);