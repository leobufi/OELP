import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="scrolled-animations"
export default class extends Controller {
  static targets = ["can"]

  connect() {
    console.log("Connected to Scrolled Animations")
  }

  rotate(event) {
    event.preventDefault()
    this.canTargets.forEach (can => {
      console.log("Tourne");
      can.classList.add("animate__animated")
      can.classList.add("animate__bounce")
      can.classList.add("animate__infinite")
    })
  }
}
