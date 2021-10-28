# NPMJS Basics

## Create a Package
- Go online to npmjs.com and create an account
- In your terminal run: npm login
- Enter your username, pw, and email you want to use
- Create a minimal package.json
  - Must include name and version like:
  - { "name": "package-name", "version": "1.0.0" }
- Write whatever other files you want to actually include in the package in the same dir
- Run: npm publish
- Your package will be available via an open source CDN called https://unpkg.com/
- Add a link tag to your index.html
  - `<link rel="stylesheet" href="https://unpkg.com/package-name@1.0.0/file-name.ext">`

## Publish a new version
- Login: npm login
- Change version in package.json
- RUN: npm publish
