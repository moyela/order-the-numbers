export const playSound = (sound, bool = false, reduceVolume = false) => {
  if (reduceVolume) sound.volume = 0.5;
  if (bool) {
    setTimeout(() => {
      sound.play();
      sound.loop = bool;
      sound.volume = 0.5;
    }, 1000);
  } else sound.play();
};

export const pauseSound = (sound) => {
  sound.pause();
};

export const stopSound = (sound) => {
  sound.pause();
  sound.currentTime = 0;
};
