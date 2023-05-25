import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="scrolled-animations"
export default class extends Controller {
  static targets = [
    "bubble",
    "bottle",
    "title",
    "star",
    "mouette",
    "mouette2",
    "word",
    "insta",
    "bottlePosition",
    "titlePosition",
    "mouettePosition",
    "mouettePosition2",
    "contactPosition",
    "instaPosition"
  ]

  connect() {
    console.log("Connected to Scrolled Animations")
  }

  translate() {
    let position = this.titlePositionTarget.getBoundingClientRect()
    let coordinates = position.y - window.innerHeight;
    console.log()
    this.titleTargets.forEach (can => {
      if (coordinates <= 0) {
        can.classList.add("translate")
      }
    })

    this.starTargets.forEach (star => {
      if (coordinates <= 0) {
        star.classList.add("translate")
      }
    })
  }

  translateX() {
    let position = this.mouettePositionTarget.getBoundingClientRect()
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

  rotate() {
    let position = this.bottlePositionTarget.getBoundingClientRect()
    let coordinates = position.y - window.innerHeight;
    console.log()
    this.bottleTargets.forEach (bottle => {
      if (coordinates <= 0) {
        bottle.classList.add("translate")
      } else {
        bottle.classList.remove("translate")
      }
    })
  }

  translateX2() {
    let position = this.mouettePosition2Target.getBoundingClientRect()
    let coordinates = position.y - window.innerHeight;
    console.log()
    this.mouette2Targets.forEach (mouette => {
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
