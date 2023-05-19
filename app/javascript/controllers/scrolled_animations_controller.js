import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="scrolled-animations"
export default class extends Controller {
  static targets = ["bubble", "can", "mouette", "word", "insta", "canPosition", "brandPosition", "contactPosition", "instaPosition"]

  connect() {
    console.log("Connected to Scrolled Animations")
  }

  translate() {
    let position = this.canPositionTarget.getBoundingClientRect()
    let coordinates = position.y - window.innerHeight;
    console.log()
    this.canTargets.forEach (can => {
      if (coordinates <= 0) {
        can.classList.add("translate")
      } else {
        can.classList.remove("translate")
      }
    })
  }

  translateX() {
    let position = this.brandPositionTarget.getBoundingClientRect()
    let coordinates = position.y - window.innerHeight;
    console.log()
    this.mouetteTargets.forEach (mouette => {
      if (coordinates <= 0) {
        mouette.classList.add("translate")
      } else {
        mouette.classList.remove("translate")
      }
    })
  }

  fontGrow() {
    let position = this.contactPositionTarget.getBoundingClientRect()
    let coordinatesTop = position.y - window.innerHeight;
    let coordinatesBottom = position.y;
    console.log()
    this.wordTargets.forEach (word => {
      if (coordinatesTop <= 0) {
        word.classList.add("translate")
      } else {
          word.classList.remove("translate")
      }
    })
  }

  instaGrow() {
    let position = this.instaPositionTarget.getBoundingClientRect()
    let coordinatesTop = position.y - window.innerHeight;
    this.instaTargets.forEach (insta => {
      if (coordinatesTop <= 0) {
        insta.classList.add("translate")
      } else {
          insta.classList.remove("translate")
      }
    })
  }

  hoverBtn() {
    this.bubbleTargets.forEach (bubble => {
        bubble.classList.toggle("active")
    })
  }
}
