import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="scrolled-animations"
export default class extends Controller {
  static targets = [
    "target",
    "bubble",
  ]

  connect() {
    console.log("Connected to Scrolled Animations")
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        root: null,
        threshold: 0,
      }
    );
    this.targetTargets.forEach((target) => this.observer.observe(target));
  }

  translate(entry) {
    const target = entry.target;

    if (entry.isIntersecting) {
      // console.log("Cible visible :", target);
      target.classList.remove("untranslate")
      target.classList.add("translate");
    } else {
      // console.log("Cible invisible :", target);
      target.classList.remove("translate");
      target.classList.add("untranslate")
    }
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      this.translate(entry);
    });
  }

  hoverBtn() {
    this.bubbleTargets.forEach (bubble => {
      bubble.classList.toggle("active")
    })
  }
}

// >> Se déclenche lorsque la position du déclencheur est
//      en dessous de la position supérieure de l'écran

// translate() {
//   let position = this.declencheurPositionTarget.getBoundingClientRect()
//   let coordinatesTop = position.y - window.innerHeight;
//   this.targetTargets.forEach (target => {
//     if (coordinatesTop <= 0) {
//       target.classList.add("translate")
//     } else {
//         target.classList.remove("translate")
//     }
//   })
// }

// >> Déclenche uen classe lorsque scroll vers le bas ou le haut
//
// à appeler dans connect >> this.lastScrollPosition = window.pageYOffset;

// translate() {

//     const currentScrollPosition = window.pageYOffset;

//       if (currentScrollPosition > this.lastScrollPosition) {
//         this.targetTargets.forEach (target => {
//           target.classList.remove("untranslate")
//           target.classList.add("translate")
//         })
//       } else if (currentScrollPosition < this.lastScrollPosition) {
//         this.targetTargets.forEach (target => {
//           target.classList.remove("translate")
//           target.classList.add("untranslate")
//         })
//       }

//     this.lastScrollPosition = currentScrollPosition;

// }
