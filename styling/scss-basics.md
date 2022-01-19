# Sass Basics

## Install
- npm install sass
- Run: node sass

## Benefits
- https://www.mugo.ca/Blog/7-benefits-of-using-SASS-over-conventional-CSS

## TD;LR
### Variables
```scss
$blue: #004BB4;
$font: 'Ubuntu', 'Arial', 'Helvetica', sans-serif;

h1 { font: $font; }
a { background-color: $blue; }
```
### Use variables from another file
```scss
@use './_fonts' as f;

h1 { font-family: f.$font; }
```
### Nested syntax
```scss
.navbar {
  font: $font;
  color: $blue;
  li {
    margin-left: 1rem;
    a {
      padding: 5px;
      font-size: 1.5rem;
      span {
        font-weight: 600;
      }
    }
  }
}
```
### Mixins
```scss
@mixin set-font( $family: 'Ubuntu' , $weight: 400 , $style: normal ) {
  font-family: $family , 'Arial', 'Helvetica', sans-serif;
  font-style: $style;
  font-weight: $weight;
}

h1 {
  @include set-font;
  color: $blue;
}

// Pass other values like a function
h1.callout {
  @include set-font('Nunito',600);
  color: $blue;
}
```