# Textures (Types)

- Definition: images that will cover the surface of the geometries (many diff effects)

## Most Used Types
- *You can create your own as well*
- These textures follow PBR principles (Physically Based Rendering - realistic real-life calculations)
  - https://marmoset.co/posts/basic-theory-of-physically-based-rendering/
  - https://marmoset.co/posts/physically-based-rendering-and-you-can-too/

### Alpha
- GreyScale image
- White visible
- Black not visible

### Color
- Most simple
- applied on the geometry

### Height (displacement)
- GreySacle image
- Moves the verticies (white goes up/forward and black goes down/backward)
- Needs enough subdivision (can effect performance)

### Metalness
- GrayScale Image
- White is metallic
- Black is non metallic
- Mostly for reflection of light

### Normal (focuses on light)
- Add details
- Doesn't need subdivision
- The verticies won't move
- Lure the light about the face orientation
- Better performance than adding height texture with a lot of subdivision

### Roughness
- GrayScale Image
- In duo with metalness
- White is rought
- Black is smooth
- Mostly for dissipation of light

### Ambient Occlusion
- GreyScale Image
- Adds fake shadows
- Not physically accurate
- Helps with adding contrast and see details
