# Various utilities related to textures

## UV Unwrapping
- It's like unwrapping oragami or a candy wrapper to make it flat
- Each vertex will have 2D coordinates on that square (usually a square)
- The UV unwrapping provides UV coordinates which you match to your model
- Access them:
```javascript
console.log(geometry.attributes.uv)
```
- It's a Float32BufferAttribute
  - 2 x 2
  - The first coordinate is the first 2 numbers and so on
*If you create your own geometry then you have to specify your own UV coordinates*

## Transformations

### Repeat
- Repeat:
```javascript
texture.repeat.x = value;
texture.repeat.y = value;
```
- Wraps:
```javascript
texture.wrapS = THREE.RepeatWrapping // or MirroredRepeatWrapping
texture.wrapT = THREE.RepeatWrapping // or MirroredRepeatWrapping
```

### Offset
```javascript
texture.offset.x = value;
texture.offset.y = value;
```

### Rotation
- In radians (Math.PI, Math.PI * 2, etc)
```javascript
colorTexture.rotation = Math.PI / 4
colorTexture.center.x = 0.5
colorTexture.center.y = 0.5
```
- center property sets the point around which the rotation happens

## Mip Mapping & Filters
- Def: is technique that consists of creating half a smaller version of a texture again and again until we get a 1x1 texture
- This creates a blur effect
- *You don't have to think about this. it's built in*
- GPU will use different version depending on how many pixels are being used
- 2 main algorithms
  - Minification Filter (When the renderer's image is smaller than the actual image)
  - Magnification Filter (When the image isn't big enough)
- *NearestFilter is great for performance*
- Deactivate mipmapping
  - texture.generateMipmaps = false
  - texture.minFilter = THREE.NearestFilter
  - texture.magFilter = THREE.NearestFilter

## Preparing your textures (images)
- Keep these things in mind
  - Weight
    - Keep as low as possible
    - .jpg lossy compression but usually lighter
    - .png lossless compression but usually heavier
    - compress using TinyPNG (Try Basis)
  - The size or resolution
    - Textures have to be sent to the GPU
    - GPU has limitations
    - *Because we're using mimapping you need to resolution that's a power of 2*
  - The data
    - Textures support transparency (But you could use 2 jpegs instead)
    - Normals are usually PNG
    - Sometimes you can combine different data into one texture using the red, green ,blue, and alpha channels

## Where to find textures?
- poliigon.com
- 3dtextures.me
- arroway-textures.ch
- substancedesigner