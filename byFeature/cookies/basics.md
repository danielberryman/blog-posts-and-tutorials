# Cookies Basics

Cookies
- Stored in the browser
- Sent to the web server they originated from on every request to that web server
- They can be changed directly in the browser (like in dev tools) and will actually be updated
- Node: use package cookie-parser to see cookies
    - app.use(cookieParser()) to load it
    - In a route you can log request.cookies to see them
- Client side: access the cookies for the current url in your tab
    - Use document.cookie
    - *You can disable client side access via javascript add the config option { httpOnly: true } to the cookie. Config object is the 3rd argument
    - Other config
        - When deploying to prod
            - secure: true (makes it only work on https domains)
            - maxAge: milliseconds (browser will automatically delete it)
- Biggest security exploit
    - Cross Site Request Forgery (CSRF)
    - It takes advantage of the fact that cookies are always sent along to a server from the browser whenever a request is made
    - Use package: csurf
    - Using csurf on routes makes a csrfToken available which you can place in the html Dom (the Dom isn’t accessible to attackers) so when the request comes in csurf checks if the csrfToken is available and correct and if not throws an error
- Sessions with cookies
