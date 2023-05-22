import { Controller } from "@hotwired/stimulus"
import * as THREE from "three";
import {GLTFLoader} from "three/addons";

// Connects to data-controller="three"
export default class extends Controller {

  static targets = ["canva"]

  connect() {
    console.log("Hi from three js", this.canvaTarget, this.canvaTarget.offsetWidth, this.canvaTarget.offsetHeight);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.canvaTarget.offsetWidth / this.canvaTarget.offsetHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({
      alpha:true,
    });

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.renderer.setSize( this.canvaTarget.offsetHeight, this.canvaTarget.offsetHeight, false );
    this.element.appendChild( this.renderer.domElement );

                                    //  LIGHTS \\

    {
      this.color = 0xFFFFFF;
      this.intensity = 1.5;
      this.light = new THREE.AmbientLight(this.color, this.intensity);
      // this.light.position.set(0, 0, 0);
      // this.light.target.position.set(5, -4, -1.5);
      this.scene.add(this.light);
      this.scene.add(this.light.target);
    }

    {
      this.color = 0xFFFFFF;
      this.intensity = 1.5;
      this.light = new THREE.DirectionalLight(this.color, this.intensity);
      this.light.position.set(0, 0, 0);
      this.light.target.position.set(-5, -4, -2);
      this.light.castShadow = true;
      this.scene.add(this.light);
      this.scene.add(this.light.target);
    }

    // {
    //   this.light.shadow.mapSize.width = 512; // default
    //   this.light.shadow.mapSize.height = 512; // default
    //   this.light.shadow.camera.near = 0.5; // default
    //   this.light.shadow.camera.far = 500; // default
    // }

    console.log(this.light);

    // TEXTURE \\

    {
      this.textureLoader = new THREE.TextureLoader();
      this.url = "http://localhost:8080/app/assets/images/3D/OELP_stickers_texture_sparkling.png"
      this.texture = this.textureLoader.load(this.url, texture => {
        texture.center.x = 0.5;
        texture.center.y = 0.5;
        texture.anisotropy = 1;
      });
      this.texture.offset.set(0, -0.375);
      this.texture.repeat.set(1.15, 1.75);
      this.texture.colorSpace = THREE.SRGBColorSpace;
      this.texture.flipY = false;
      console.log(this.texture)
    }

    // FORMES \\

    {
      this.gltfLoader = new GLTFLoader();
      this.gltfLoader.load("http://localhost:8080/app/assets/images/3D/25cl_can.gltf", (gltf) => {
        this.model = gltf.scene;
        this.model.traverse((child) => {
          if ( child.isMesh && child.name == "250ml") {
            this.tempMaterial = new THREE.MeshStandardMaterial({
              // transparent: true,
              map: this.texture,
              metalness: 0.5,
            });
            child.material = this.tempMaterial;
            console.log(child);
          }
        })
        this.model.scale.set(45, 75, 45);
        this.model.position.set(0, -5, -3);
        // this.model.castShadow = true;
        this.scene.add(this.model);
        console.log(this.model);
      });
    }

    this.camera.position.z = 5;
    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    // this.originCube.rotation.y += 0.01;
    this.model.rotation.y += 0.008;
    this.renderer.render(this.scene, this.camera);
  }

}
