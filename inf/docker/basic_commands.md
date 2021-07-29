# Basic Docker commands

## IMAGES

### Pull an image
docker pull imagename

### Inspect an image
docker inspect imagename
*This returns a config created by the dockerfile as opposed to the dockerfile itself*

## CONTAINERS

### Run a container
docker container run

### Run container flags
- -d ... run container in detached mode
- -p ... specify port mapping (hostport:containerport) Ex: -p 8080:80 meaning 8080 on the host and 80 on the container
- --name ... assign a name to the container
- -e ... set ENV variable
- -v ... naming volumes: create a new volume OR create a named volume
  1. New volume: -v /var/lib/mysql (This is exactly what the VOLUME command does in your dockerfile)
  2. Create a named volume: -v image-name:/var/lib/mysql
  - *You can create multiple containers that work with the sanme volume by using the same volume namne when creating new containers*

### Inspect container config
docker container inspect containername

### List running containers
docker container ls

### Shell session in container
docker container exec -it nginx1 bash
*-it is actually 2 flags: --interactive and --tty
  1. interactive: keeping stdin open even if it's not attached
  2. tty: Allocate a pseudo-TTY (prints the filename of the terminal - gives you the `user:directory` at the beginning of each line in the shell session) *

## VOLUMES

### List volumes
docker volume ls

### Inspect a volume
docker volume inspect <volumeid>
*You don't have to type the whole thing. Type the first few characters and hit tab to complete it.*

### Creating volumes
3 ways:
1. dockerfile
2. during the docker run command
3. `docker volume create`
*Why would you want to use this command?*
- This command is the only you can specify a driver
- Also if you want to put labels on the volume

## BIND MOUNTING

### Basic command
docker container run -v /path/somewhere/on/host:/path/to/map/to/on/container imagename

### Refer to current directory
docker container run -v ${pwd}:/path/to/map/to/on/container imagename
*Host is on the left and the container is on the right*