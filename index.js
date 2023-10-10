document.addEventListener("keydown", function (event) {
    let keyMappings = {
      "W": "b1",
      "A": "b2",
      "S": "b3",
      "D": "b4",
      "J": "b5",
      "K": "b6",
      "L": "b7",
    };
  
    let buttonId = keyMappings[event.key.toUpperCase()];
    if (buttonId) {
      let button = document.getElementById(buttonId);
      if (button) {
        button.click();
      }
    }
  });
  

function clickDrum(audioId, buttonId) {
  let isPlaying = false;
  let audioPlayer = document.getElementById(audioId);
  let playButton = document.getElementById(buttonId);

  playButton.addEventListener("click", function () {
    if (!isPlaying) {
      audioPlayer.play();
      isPlaying = true;
    } else {
      audioPlayer.play();
      audioPlayer.currentTime = 0;
      isPlaying = true;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  clickDrum("a1", "b1");
  clickDrum("a2", "b2");
  clickDrum("a3", "b3");
  clickDrum("a4", "b4");
  clickDrum("a5", "b5");
  clickDrum("a6", "b6");
  clickDrum("a7", "b7");
});


