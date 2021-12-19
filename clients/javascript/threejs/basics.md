# Three.js Basics

## Get Three.js in your project

### Without modules
- Download latest version from https://threejs.org/
- Unzip it and go to 
- Copy/paste file three.min.js to your project
- HTML: Place the following in your index.htmlm body tag
```html
<canvas class="webgl"></canvas>
<script src="./three.min.js"></script>
<script src="./script.js"></script>
```
- JS SCRIPT: Place the following import at the top to see if you have access to Three.js
```javascript
console.log(THREE)
```

### With modules
- https://threejs.org/docs/index.html#manual/en/introduction/Installation
- Run: npm install --save three
- Include `import * as THREE from 'three';` in your script file

## Getting started with a Scene
- Get you canvas element
- Create a scene object
- Create stuff to add to the scene
  - Object
  - Camera
- Add things to the scene
- *This is with a fixed size canvas

```javascript
const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

// Geometry - Red Cube
const geometry = new THREE.BoxGeometry(1,1,1) // The units is up to you
const material = new THREE.MeshBasicMaterial({ color:'red' })
const mesh = new THREE.Mesh(geometry, material)

// Camera - Default is a Perspective Camera
const camera = new THREE.PerspectiveCamera(75, someWidth / someHeight)
camera.position.z = 3

scene.add(mesh)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(someWidth, someHeight)
renderer.render(scene, camera)
```

## Full Screen and Resizing

### Update styling:
- Normalize margin and padding to 0
- Set overflow to hidden on the html and body elements
- Set the following properties on your canvas element: position: fixed; top: 0; left: 0; outline: none;
```css
* { margin: 0; padding: 0; }
html, body { overflow: hidden; }
.webgl {
    position: fixed;
    top: 0;
    left: 0;
    outline: none;
}
```

### Resizing
- Listen to the resize event on the window object and do the following:
  - Reset the width and size based on the window inner width and height
  - Camera: reset the aspect ratio based on the width and height call updateProjectionMatrix()
  - Reset the size of the renderer and reset the pixel count of the renderer
```javascript
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()

  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Set the pixel ratio on the renderer as well
renderer.setSize(width, height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
```

### Not on Pixel Counts:
- A specific device has a pixel count which is the number of pixels programmable within 1 pixel unit
- On a computer you can check the pixel count via browser calling `window.devicePixelCount` property
- *You never need to allow a pixel count greater than 2 in Simon Bruno's opinion*