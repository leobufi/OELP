import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="onload"
export default class extends Controller {
  static targets = [
    "loader",
    "mouette1",,
  ]

  connect() {
    console.log('hi from onload');
    console.log();
    this.loader();
    this.birdFly();
    setTimeout(() => {
      this.loaderTarget.classList.remove("loader");
      this.loaderTarget.classList.remove("fade-out");
    }, 3000);
  }

  loader() {
    this.loaderTargets.forEach(loader => {
      loader.classList.add("fade-out");
    })
  }

  birdFly() {
    this.mouette1Targets.forEach(mouette => {
      mouette.classList.add("fly");
    })
  }
}
