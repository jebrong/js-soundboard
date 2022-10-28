const sounds = ["arp", "bass", "drums"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.innerText = sound;

  btn.classList.add("btn");

  btn.addEventListener("click", () => {
    const song = document.getElementById(sound);

    song.play();
    song.currentTime = 0;
  });

  document.querySelector("#buttons").appendChild(btn);
});

const allSounds = document.querySelectorAll(".btn");
const mute = document.querySelector(".pause");
