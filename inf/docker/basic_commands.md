# Basic Docker commands

## IMAGES
<hr>

### Pull an image
- docker pull imagename

### Inspect an image
- docker inspect imagename
- *This returns a config created by the dockerfile as opposed to the dockerfile itself*

&nbsp;
## CONTAINERS
<hr>

### Run a container
- docker container run

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
- docker container inspect containername

### List running containers
- docker container ls

### Shell session in container
- docker container exec -it nginx1 bash
- *-it is actually 2 flags: --interactive and --tty
  1. interactive: keeping stdin open even if it's not attached
  2. tty: Allocate a pseudo-TTY (prints the filename of the terminal - gives you the `user:directory` at the beginning of each line in the shell session) *

### See container logs
- docker container logs containername
- FLAGS:
  - -f ... stand for follow and will watch as logs continue to come in

&nbsp;
## VOLUMES
<hr>

### List volumes
- docker volume ls

### Inspect a volume
- docker volume inspect <volumeid>
- *You don't have to type the whole thing. Type the first few characters and hit tab to complete it.*

### Creating volumes
- 3 ways:
  1. dockerfile
  2. during the docker run command
  3. `docker volume create`
- *Why would you want to use this command?*
- This command is the only you can specify a driver
- Also if you want to put labels on the volume

## BIND MOUNTING

### Basic command
- docker container run -v /path/somewhere/on/host:/path/to/map/to/on/container imagename

### Make a file/directory read-only
- Add :ro to your volume value
- Ex: docker container run -v ./file.conf:/path/to/default.conf:ro imagename

### Refer to current directory
- docker container run -v ${pwd}:/path/to/map/to/on/container imagename
- *Host is on the left and the container is on the right*

## Running database containers like mysql, postgres, etc
- At least both mysql and postgres docker images require a password to run
- Add to MSYQL run command:
  1. -e MYSQL_ALLOW_EMPTY_PASSWORD=True (to ignore needing to set a pw)
  2. -e MYSQL_ROOT_PASSWORD=
  - See for more info: https://hub.docker.com/_/mysql
- Add to POSTGRES run command:
  1. -e POSTGRES_HOST_AUTH_METHOD=trust (to ignore needing to set a pw)
  2. -e POSTGRES_PASSWORD=