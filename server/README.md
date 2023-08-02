- [ ] create protected route
- [ ] create an authorized endpoint 
- [ ] forgot password and reset password

## forgot password
- the user enters thier email
- i check if the email exists
- if the email exists then send a message with a link to reset thier password
- update the password, what if they signed in with google 

[youtube-channel-explainging](https://www.youtube.com/watch?v=QaI7abh4n-8&pp=ygUcbm9kZSBqcyBwcm90ZWN0aW9uIG1lY2hhbmlzbQ==)

owasp recommended security measures for node.js server application
[owasp-top-ten](https://owasp.org/www-project-top-ten/)
[node-js-security-cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html)
- set request size limit - npm i raw-body
- perform input validation - npm i validator
- perform output escaping
- perform applcation activity logging
- monitor the event loop
- take precaution against brute force
- anti-csrf tokens
- prevent http parameter pollution
- use access control list
- use appropriate headers - helmet npm i helmet

[snyk-code-node-protection](https://github.com/davieoba/snyk-goof)
[snyk-code-node-protection-youtube](https://www.youtube.com/watch?v=QSMbk2nLTBk)