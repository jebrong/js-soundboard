const sounds = ["arp", "bass", "drums"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.innerText = sound;

  btn.classList.add("btn");

  btn.addEventListener("click", () => {
    const song = document.getElementById(sound);

    song.play();
    song.currentTime = 0;
    console.log(song.duration);
  });

  document.querySelector("#buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
