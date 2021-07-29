# Persistence with Docker

### Problems:
- Immutable inf: don't change things once they're running
- Containers being naturally ephemeral
- These means unchanging bit disposable
- What about the data? Ideally data shouldn't have data in it
- Most things people have built in the past were persistent by default
- Docker has 2 answers
  - Volumes
    - make special location outside the containers file system to store unique data
  - Bind mounts
    - link container path to host path

### Volumes
- require manual deletion
- Command in dockerfile: Volume
- If you do: docker container inspect containername
  - You can look for the 'Mounts' property
  - It's an arrayof objects and it will have a destination property and a source property
  - Destination: the path in the container the container thinks it's writing to
  - Source: the path on the host where the data is actually being written
- You can also see the volume name or id and you can inspect it doing
  - docker volume inspect <volumeid>
  - This will return config with a property of `mountpoint`
  - If you're working on a linux machine you can actually go to that path and you'll find some databases
  - *If you're on mac or windows docker is actually running linux on a linux VM so the databases will actuall be on that VM*
- How do we find the container a volume is connected to?
  - When you remove containers the volumes remain thus the dbs outlive containers!
  - It lies in what you can specify in the docker run command

### Bind Mounting
- Maps a host file or directory into a container file or directory
- 2 locations poitning the same file(s) on disk
- Skips UFS 'Union File System', and host files overwrite any in container
- Can't specify them in a dockerfile you have to use container run because they need things on the host to work
- Command: -v /Path/to/stuff:/path/container
- *Docker can tell between a named volume and a bind mount because of the forward slash*
- *This is going from the host => the container*
- This works really well in development because running services that are running/changing on your host
- A bind mount doesn't require a volume to work because the host always wins
- Example: docker container run -d --name nginx1 -p 80:80 -v $(pwd):/usr/share/nginx/html nginx
- $(pwd) gets the current directory path in mac and linux