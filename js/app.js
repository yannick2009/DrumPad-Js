const drumButton = document.querySelectorAll(".drumpad-btn button");
const screen = document.querySelector(".screen");

drumButton.forEach(async (e) => {
  await e.addEventListener("click", () => {
    const song = new Audio(`/audio/drum/${e.dataset.nom}.WAV`);
    song.play();
    screen.textContent = `${e.dataset.nom}`;
  });
});

document.addEventListener("keydown", async (e) => {
  await drumButton[Number(e.key) - 1].click();
  drumButton[Number(e.key) - 1].classList.add("active");
});

document.addEventListener("keyup", async (e) => {
  drumButton[Number(e.key) - 1].classList.remove("active");
});
