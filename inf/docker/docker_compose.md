# Docker compose
Purpose: replaces docker run command

## docker-compose.yml
<hr>

### General
- There are versions to what you can put in this file: 1, 2, 2.1, 3, 3.1
  - version statement is the 1st thing in the file
  - version will default to 1 if you don't specify
- Used with docker-compose CLI which is mainly for local development
- Can be used in production directly now with Swarm 
- Doesn't matter what you name it:
  1. use docker-compose.yml (default)
  2. If you name it something else use -f during docker-compose command to specify the name (must be .yml) 

&nbsp;
### Specifiers/properties
  - version
  - services
    - servicename (also DNS name used inside the docker network - similar to `--name` on `docker run`)
      - image
      - command
      - environment
        - i.e. variables like MYSQL_ROOT_PASSWORD
      - volumes
      - depends_on (relationships between services)
  - volumes
  - networks

&nbsp;
## CLI tool: docker-compose
<hr>

### Up/down
- docker compose up (sets up all volumes and networks and containers)
- docker compose down (stops all containers and removes cont/volumes/networks)


