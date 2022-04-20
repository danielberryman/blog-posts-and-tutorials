# Notes on transferring data across the internet

## TCP & IP
- In a nutshell these a protocols
- Protocols are a set of rules that 2 side are programmed to understand (client and server)
- Each computer has an IP address that identifies it
- IP stands for Internet Protocol
- When they connect a socket is opened
- Socket: the line across which information flows
  - Sockets have been around for a long time
  - When using sockets to send a receive data across the wire we're generally opening and closing sockets constantly
  - Web Sockets are the idea of keeping the socket open
- Then the data sent via the socket has a structure which is usually a protocol like http, ftp, smtp
- How then do we send them? This is the Transmission Control Protocol (TCP)
  - TCP splits the data into pieces and sends those pieces across the wire
  - Each piece is called a packet
- Your operating system has the capability to do the above SO node makes these capabilities available to you as a developer
- You can build node to build an email server or file server as well as a web server
- Node treats the packets coming along wire as streams

## Ports
- This is how an OS knows where to send a packet coming
- Programs "listen" to a speific number or port
- IP:PORT is the "Socket Address"

## HTTP
- How the data is structured