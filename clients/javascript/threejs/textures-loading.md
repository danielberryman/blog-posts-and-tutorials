# Loading Textures

## 2 Ways
1. Manual
2. TextureLoader

## Manual TDLR
- Get the image URL
- Load the image

### Get the image URL
- Put the image in the /src/ folder and import it
```javascript
import imageSource from './image,png';
```
- Place in the static folder with webpack and reference the file based on the path within the static folder
- Access it directly
```javascript
const imageSource = '/image.png';
```

### Loading the image
- Native JS
```javascript
const image = new Image()
image.onload = () => {  }
image.src = '/textures/door/color.jpg'
```

### Convert the image object to a texture (better for the GPU)
- Create a texture
```javascript
const texture = new THREE.Texture(image)
```
- In the onload function for the image we need to tell Three JS that the texture's image has been updated
```javascript
image.onload = () => { texture.needsUpdate = true }
```

## TextureLoader class
*simpler version*

### TDLR
- Use 1 loader to load multiple fonts
```javascript
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/textures/door/color.jpg')
```

### Callback functions (these are the 3 args after the initial arg of the TextureLoader)
- Load
- Progress
- Error

### Loading Manager
- Managing multiple kinds for assets (textures, models, etc)