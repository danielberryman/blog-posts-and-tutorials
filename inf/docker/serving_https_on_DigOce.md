# Serving over HTTPS on Digital Ocean

### 1. Setup and install docker
- See install_docker.md

### 2. Configure UFW to allow https connections
- See ufw.md

### 3a. Caddy HTTPS
- The official caddy image ships with a default Caddyfile at /etc/caddy/Caddyfile
- You replace it by placing the following line in a Dockerfile
  - Add Caddy as your base image `FROM caddy:<version>`
  - `COPY Caddyfile /etc/caddy/Caddyfile`
  - This replaces the default Caddyfile with yours (*/ must be included in 2nd arg or the file will be placed on the container in /srv directory*)
  - Build the image and push it to your docker hub
- By default Caddy will perform automatic redirects of http requests to https
- The difference in the run command is exposing both ports 80 and 443 and mapping them.
  - docker run -p 80:80 -p 443:443 `<hub-user>/<hub-repo>:your-image-name`
  - *Again, caddy will perform the redirect in the container automatically*
  - You run the container from your digital ocean droplet or something akin and voila!
- That's it for Caddy!

### 3b. Nginx HTTPS
- More complicated because you have to handle getting certificates...
- I haven't had a reason to go off and learn this!
- Might look at something like this: https://medium.com/@agusnavce/nginx-server-with-ssl-certificates-with-lets-encrypt-in-docker-670caefc2e31

### 4. Get the IP address from the droplet and connect via browser over http
- You see one of the following:

<img src="../../img/caddy-default.png" alt="caddy" width="250"/>
<img src="../../img/nginx-default.png" alt="caddy" width="250"/>