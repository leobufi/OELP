import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="flashes"
export default class extends Controller {
  static targets = [
    "flash"
  ]

  connect() {
    console.log('Flashes')
  }

  close() {
    this.flashTarget.style.display = 'none';
  }
}
