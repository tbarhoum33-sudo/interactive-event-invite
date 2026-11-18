
const nameInput = document.getElementById("guestName");
const response = document.getElementById("response");
const count = document.getElementById("count");

function updateDisplay() {
  const saved = JSON.parse(
    localStorage.getItem("neonRSVP") || "null"
  );

  if (!saved) {
    count.textContent = "Your RSVP: Not submitted";
    return;
  }

  count.textContent =
    `Your RSVP: ${saved.attending ? "Going" : "Not going"}`;

  nameInput.value = saved.name;
}

function submitRSVP(attending) {
  const name = nameInput.value.trim();

  if (!name) {
    response.textContent = "Please enter your name.";
    return;
  }

  const data = { name, attending };
  localStorage.setItem("neonRSVP", JSON.stringify(data));

  response.textContent = attending
    ? `Awesome, ${name}! See you there!`
    : `Thanks for letting us know, ${name}!`;

  updateDisplay();
}

document.getElementById("yesBtn").addEventListener(
  "click", () => submitRSVP(true)
);

document.getElementById("noBtn").addEventListener(
  "click", () => submitRSVP(false)
);

updateDisplay();
