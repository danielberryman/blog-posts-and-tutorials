# UFW config

## General
- In order to allow connections (http, https, ssh) on a digital ocean droplet you need to configure what's called UFW
- UFW stands for uncomplicated firewall
- Guide: https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands

### Allow connections
- Check status: sudo ufw status
- Allow various types of connections:
  - sudo ufw allow http
  - sudo ufw allow https
- Enable ufw if it's inactive: sudo ufw enable