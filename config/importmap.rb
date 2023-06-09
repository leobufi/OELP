# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "trix"
pin "@rails/actiontext", to: "actiontext.js"
pin "three", to: "https://ga.jspm.io/npm:three@0.152.2/build/three.module.js"
pin "three/addons", to: "https://ga.jspm.io/npm:three@0.152.2/examples/jsm/loaders/GLTFLoader.js"
pin "three/controls", to: "https://ga.jspm.io/npm:three@0.152.2/examples/jsm/controls/OrbitControls.js"
pin "howler", to: "https://ga.jspm.io/npm:howler@2.2.3/dist/howler.js"
