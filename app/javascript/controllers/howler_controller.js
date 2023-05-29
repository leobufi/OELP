import { Controller } from "@hotwired/stimulus"
import {Howl, Howler} from 'howler';

// Connects to data-controller="howler"
export default class extends Controller {
  static targets = [
    "playBtn",
    "pauseBtn"
  ]

  connect() {
    console.log('howler');
  }

  startSound() {
    this.sound = new Howl({
      src: ['https://res.cloudinary.com/dcnaxhee4/video/upload/v1685351924/Holger_Czukay_-_Cool_In_The_Pool_TubeRipper.com_jwboed.mp3'],
      html5: true,
      autoplay: true,
      loop: true,
      volume: 0.5,
      onload: () => {
        this.playBtnTarget.style.display = 'none';
      },
      onplay: () => {
        this.playBtnTarget.style.display = 'none';
        this.pauseBtnTarget.style.display = 'block';
        this.pauseBtnTarget.classList.add = 'bump';
      },
      onpause: () => {
        this.playBtnTarget.style.display = 'block';
        this.pauseBtnTarget.style.display = 'none';
      },
    });

    this.sound.play();
  }

  play() {
    this.startSound();
  }

  pause() {
    this.sound.pause();
    // this.sound.resume();
  }
}
