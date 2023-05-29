import { Controller } from "@hotwired/stimulus"
import * as THREE from "three";
import {GLTFLoader} from "three/addons";
import {OrbitControls} from "three/controls";

// Connects to data-controller="three"
export default class extends Controller {
  static values = {
    label: String
  }
  static targets = ["canva"]

  connect() {
    // console.log("Hi from three js", this.canvaTarget, this.canvaTarget.offsetWidth, this.canvaTarget.offsetHeight);

    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color("rgb(254, 223, 146)");

    this.camera = new THREE.PerspectiveCamera(
      75,
      this.canvaTarget.offsetWidth / this.canvaTarget.offsetHeight,
      0.1,
      1000
    );

    this.renderer = new THREE.WebGLRenderer({
      alpha:true,
    });

    // this.renderer.shadowMap.enabled = true;
    // this.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.renderer.setSize( this.canvaTarget.offsetHeight, this.canvaTarget.offsetHeight, false );
    this.element.appendChild( this.renderer.domElement );

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // console.log(this.controls);
    // this.controls.maxDistance = 10;
    // this.controls.minDistance = 5;
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
    this.controls.minPolarAngle = 0.5;
    this.controls.maxPolarAngle = 1.5;

    this.camera.position.set(0, 0, 8);
    this.controls.update();

                                    //  LIGHTS \\

    {
      this.color = 0xFFFFFF;
      this.intensity = 1.3;
      this.light = new THREE.AmbientLight(this.color, this.intensity);
      this.scene.add(this.light);
      this.scene.add(this.light.target);
    }

    {
      this.color = 0xFFFFFF;
      this.intensity = 1.3;
      this.light = new THREE.DirectionalLight(this.color, this.intensity);
      this.light.position.set(-8, 8, 3);
      this.light.target.position.set(-5, -4, -2);
      this.scene.add(this.light);
      this.scene.add(this.light.target);
    }

    // TEXTURE \\

    {
      this.textureLoader = new THREE.TextureLoader();
      this.url = this.labelValue
      this.texture = this.textureLoader.load(this.url, texture => {
        texture.center.x = 0.5;
        texture.center.y = 0.5;
        texture.anisotropy = 1;
      });
      this.texture.offset.set(0, -0.375);
      this.texture.repeat.set(1.15, 1.75);
      this.texture.colorSpace = THREE.SRGBColorSpace;
      this.texture.flipY = false;
      // console.log(this.texture)
    }

    // FORMES \\

    {
      // RATIO FOR CAN SCALLING \\
      this.canX = (window.innerWidth / window.innerHeight) * 28;
      this.canY = (window.innerWidth / window.innerHeight) * 33;
    }

    {
      this.gltfLoader = new GLTFLoader();
      this.gltfLoader.load("https://res.cloudinary.com/dcnaxhee4/image/upload/v1684909005/25cl_can_yfipvc.gltf", (gltf) => {
        this.model = gltf.scene;
        this.model.traverse((child) => {
          if ( child.isMesh && child.name == "250ml") {
            this.tempMaterial = new THREE.MeshStandardMaterial({
              map: this.texture,
              metalness: 0.5,
            });
            child.material = this.tempMaterial;
            // console.log(child);
          }
        })
        this.model.scale.set(this.canX, this.canY, this.canX);
        this.model.rotation.y = 4.5;
        this.model.position.set(0, -4, 0);
        this.model.receiveShadow = true;
        this.model.castShadow = true;
        this.scene.add(this.model);
        // console.log(this.model);
      });
    }

    // this.camera.position.y = 4;
    // this.camera.position.z = 7.5;
    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.model.rotation.y += 0.008;
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

}
