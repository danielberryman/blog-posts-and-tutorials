# Deploying Django to production on Digital Ocean via Gunicorn, Caddy, and Docker

## Digitial Ocean Ubuntu

### Create a droplet
- Sign up for account
- Sign in
- Create a new project
- Add a droplet
- Choose Ubuntu 20.0.4
- Choose ssh or password (it doesn't matter for this tutorial but ssh ids recommended for security)
- Once you've created it will take several moment for the droplet to finish spinning up

### Install docker/docker-compose on your droplet
- ssh into your droplet
  - RUN: ssh root@<droplet_ip>
  - *You'll see the "The authenticity of host can't be established." message means your local computer hasn't connected to the IP address before and thus it's not a known host.*
  - *If you're really concerned about this you can login to the web console through the DO GUI and run: ssh localhost and compare*
- Run the following commands in the terminal or in a sh script to install Docker:
  - *add to the top of the shell script if going that route* #!/bin/sh
  - sudo apt update
  - sudo apt install apt-transport-https ca-certificates curl software-properties-common
  - curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
  - sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
  - sudo apt update
  - apt-cache policy docker-ce
  - sudo apt install docker-ce
  - sudo systemctl status docker
  - From: *https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04*
- Run the following commands in the terminal or in a sh script to install docker-compose:
  - *add to the top of the shell script if going that route* #!/bin/sh
  - sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  - sudo chmod +x /usr/local/bin/docker-compose
  - docker-compose --version

### Expose ports
- Use UFW (Uncomplicated firewall) to open ports on the droplet
  - Check status: sudo ufw status
  - Allow various types of connections:
    - sudo ufw allow ssh *MAKE SURE YOU DO THIS!!!*
    - *BECAUSE IF YOU ENABLE UFW AND EXIT THE SSH SESSION YOU WON'T BE ABLE TO SSH BACK IN. YOU'LL HAVE TO ROOT PASSWORD RESET.*
    - sudo ufw allow http
    - sudo ufw allow https
    - *This will open ports on ipv4 and ipv6*
  - Enable ufw if it's inactive: sudo ufw enable

## Basic Django App

### Basic Setup
- Create a fresh project with django-admin: `django-admin startproject testapp`
- Create a requirements.txt file: `touch requirements.txt`
- Add 4 deps to requirements.txt:
  - Django==3.0.5
  - gunicorn==20.1.0
  - cryptography==3.4.7
- Create a .env file and add the following:
  - SECRET_KEY=`secret_key` TODO: where do you get one?
  - DEBUG=True
- In your Django app settings.py file add the following:
  - import os
  - SECRET_KEY = os.getenv('SECRET_KEY')
  - DEBUG = os.getenv('DEBUG')
  - ALLOWED_HOSTS = [ '<your_ip_address>' ]
  - STATIC_ROOT = '/static/'

### Setup MySql in Django
- Add a 4th dep to the requirements.txt file:
  - pymysql==1.0.2
- Add the following to the .env file:
  - MYSQL_ROOT_PASSWORD=`mydjangoapp`
  - MYSQL_USER=`mydjangoapp`
  - MYSQL_PASSWORD=`mydjangoapp`
  - MYSQL_DATABASE=`mydjangoapp`
- In your Django app settings.py file add the following
  - Top of the file:
    - import pymysql
  - Replace database default with:
    ```
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': os.getenv("MYSQL_DATABASE"),
            'USER': os.getenv("MYSQL_USER"),
            'PASSWORD': os.getenv("MYSQL_PASSWORD")
        }
    }
    ```
  - Below the DATABASES object add:
    - pymysql.version_info = (1, 4, 2, "final", 0)
    - pymysql.install_as_MySQLdb()
    - TODO: Explain in detail why this is needed

## Docker
- Create docker-compose.yml file
- Add `version: '3.x'`

### Caddy Container
- Add caddy service block to docker-compose.yml:
```
services:
    caddy:
        image: <image name here>
        container_name: <name for your container>
        volumes:
            - static:/static
        ports:
            - "80:80"
            - "443:443"
```
- Create a directory to store the Caddyfile and Dockerfile: `mkdir caddy`
- Create the Caddyfile
```
<ip-address-or-www-domain> {
    redir https://danielexplorestheweb.cyou{URI} permanent
}

<ip-address-or-non-www-domain> {
	root * /
	@notStatic {
		not path /static/*
	}
	reverse_proxy @notStatic <name for your container>:8000
	file_server /static/*
}
```
- Create the Dockerfile
```
FROM caddy:2.4.3

COPY Caddyfile /etc/caddy/Caddyfile
```

### Django/Gunicorn Container
- Add web service block to docker-compose.yml:
```
web:
    image: <image name here>
    container_name: <name for your container>
    ports:
        - "8000:8000"
    volumes:
        - static:/static
    env_file:
        - .env
    restart: always
    depends_on: 
        - db
```
- Add the `depends_on: web` directive to the `caddy` container
- Create a Dockerfile in the root project directory for the web container image
```
FROM python:3
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY ./<your-app-name> /app

WORKDIR /app/

COPY ./entrypoint.sh /

ENTRYPOINT [ "sh", "/entrypoint.sh" ]
```
- Create entrypoint.sh script
```
#!/bin/sh

gunicorn <app_name>.wsgi:application --bind 0.0.0.0:8000

TODO:
- see if you can install get this image to wait to start until the db container has loaded fully
- Add logs here as well
- May need to use a healthcheck
- Wanting to run the following here in this script before gunicorn
# python manage.py migrate --no-input
# python manage.py collectstatic --no-input
```

### MySql Container
- Add db service block to docker-compose.yml:
```
db:
    image: mysql:8.0.26 or other version
    container_name: 
    ports:
        - 3306
    env_file:
        - .env
    restart: always
    volumes:
        - mysql_data:/var/lib/mysql
```
- Add the following volumes at the bottom of the docker file
```
volumes:
    static:
    mysql_data:
```
- Add the following to the databases block in the django settings.py
```
'HOST': 'db',
'PORT': '3306'
```

### Build images and push to docker hub
- Sign up for docker hub
- Create a repository for your project
- Build you containers with the tag to match your username/reporsitory:custom_image_name
- Login via command line: `docker login -u username -p password`
- RUN: `docker build -t username/reporsitory:custom_image_name .`
- Then RUN: `docker push username/reporsitory:custom_image_name`
- Do this for the caddy Dockerfile in the caddy dir
- Do this for the main Dockerfile in the root of the project

## Back on Digital Ocean

### Docker
- Create docker-compose.yml file in the /home dir and paste local contents into it
- Add image names based on whatever you used to push to docker hub
- Use the full path on docker hub: `image: username/reporsitory:custom_image_name`
- Create .env file and add local contents to it
- docker-compose up -d
- exec into web container
  - run collectstatic
  - run migrate
  - create super user