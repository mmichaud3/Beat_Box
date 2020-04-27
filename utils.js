class Beat {
  constructor(audioSrc) {
    this.audio = new Audio(audioSrc);
  }

  play = () => {
    this.audio.currentTime = 0;
    this.audio.play();
  };
}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
  constructor(color, keyCode) {
    this.color = color;
    this.keyCode = keyCode;
    this.element = document.getElementById(keyCode);
    this.setButtonColorInHTML();
    this.setTransitionEndListener();
  }

  setTransitionEndListener = () => {
    this.element.addEventListener("transitionend", () => {
      this.deselect();
    });
  };

  setButtonColorInHTML = () => {
    this.element.style.borderColor = this.color;
  };

  select = () => {
    this.element.style.backgroundColor = this.color;
    this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
  };

  /**
   * Deselect function to reset background color and boxShadow
   */
  deselect = () => {
    this.element.style.backgroundColor = "transparent";
    this.element.style.boxShadow = "none";
  };
}
