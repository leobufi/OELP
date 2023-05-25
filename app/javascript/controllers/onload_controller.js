import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="onload"
export default class extends Controller {
  static targets = [
    "loader",
    "mouette1",
    "mouette2",
    "mouette3",
    "mouette4",
    "can",
    "canImg"
  ]

  connect() {
    console.log('hi from onload')
    this.loader();
    this.birdFly();
    this.fadeOut();
    this.fadeIn();
    this.canFall();
    setTimeout(() => {
      this.loaderTarget.classList.remove("loader");
      this.loaderTarget.classList.remove("fade-out");
    }, 2000);
  }

  loader() {
    this.loaderTargets.forEach(loader => {
      loader.classList.add("fade-out");
    })
  }

  // remove() {
  //   this.loaderTargets.forEach(loader => {
  //     loader.classList.remove("loader");
  //     loader.classList.remove("fade-out");
  //   })
  // }

  birdFly() {
    this.mouette1Targets.forEach(mouette => {
      mouette.classList.add("fly");
    })
    this.mouette3Targets.forEach(mouette => {
      mouette.classList.add("fly");
    })
  }

  fadeOut() {
    this.mouette2Targets.forEach(mouette => {
      mouette.classList.add("disappear");
    })
  }

  fadeIn() {
    this.mouette4Targets.forEach(mouette => {
      mouette.classList.add("appear");
    })
  }

  canFall() {
    this.canImgTargets.forEach(can => {
      can.classList.add("appear");
    })
    this.canTargets.forEach(can => {
      can.classList.add("fall");
    })
  }
}
