const textAreaEL = document.getElementById("textarea");
const statChar = document.querySelector(".stat_character");
const statFacebook = document.querySelector(".stat_facebook");
const statTwitter = document.querySelector(".stat_twitter");
const statWords = document.querySelector(".stat_word");

const inputHandler = () => {
  if (textAreaEL.value.includes("<script>")) {
    textAreaEL.value = textAreaEL.value.replace("<script>", "");
  }

  statChar.textContent = textAreaEL.value.length;
  const statFacebookLeft = 2200 - textAreaEL.value.length;
  statFacebook.textContent = statFacebookLeft;
  const statTwitterLeft = 280 - textAreaEL.value.length;
  statTwitter.textContent = statTwitterLeft;
  statWords.textContent = textAreaEL.value.split(" ").length;
  if (textAreaEL.value.length === 0) {
    statWords.textContent = 0;
  }

  if (parseInt(statTwitterLeft) < 0) {
    console.log("Adding class");
    statTwitter.classList.add("stat-number--limit");
  } else {
    statTwitter.classList.remove("stat-number--limit");
  }

  if (parseInt(statFacebookLeft) < 0) {
    console.log("Adding class");
    statFacebook.classList.add("stat-number--limit");
  } else {
    statFacebook.classList.remove("stat-number--limit");
  }
};

textAreaEL.addEventListener("input", inputHandler);
