1. protected route
2. authorized function / process - (if you are not an admin then it should not work)
3. also there are some things that should not be visible to normal user only maybe the admin can see it on the frontend, like the ability to remove a particular user. 
4. if a user tries to access the dashboard without logging in redirect them to the login page
5. after creating protected route, if a user directly inputs the link to the protected route in the browser url it will not work propely fix that (done)
[Stackoverflow Question](https://stackoverflow.com/questions/70713340/logged-in-user-redirects-to-login-page-when-entering-url-manually-react-js)
6. create an admin dashboard 
7. work with passport and credentials for register (done)
8. work with passport and credentials for login (done)
9. what if a user signup with google and the next time they come they want to login with credential how do i handle that scenario 
-- solution -- For users who choose to log in with credentials, you'll need to prompt them to create a password for their account / prompt them to use forgot password since they did remember that they never made use of credentials to signup in the first place. This password will be used in conjunction with their username/email for future logins.
10. create forgot-password 

according to chat gpt user role, and email address are considered non-sensitive information however,
1. the user name and email can be accessed easily by attackers and used for cross-site scripting attacks, 
2. also if the user information is updated on the server or database the localstorage will not pick up the new changes
3. also there are privacy concerns, for example, in europe they have what is called the GDPR - General Data Protection Regulation, in places like this the lawa maybe that a company cannot store the user information in the browser local storage, so all this things should be taken into account.

solution
1. Encrypt the data to be stored in the localstorage
2. fetching data anytime i need it in my client and not actually persisting it in the localstorage, i think this is where libraries like react-query and swr really shine because it makes it very easy to fetch, persist and it handles some other really nice quirks that can come in handly for the developer.

useful links
<!-- I love this code -->
[github](https://github.com/forinda/react-router-protected-routes-ts)

[stack_overflow](https://stackoverflow.com/questions/70713340/logged-in-user-redirects-to-login-page-when-entering-url-manually-react-js)

[serve-vite-on-express](https://stackoverflow.com/questions/51227859/react-router-doesnt-work-on-express-server)

[yt-lama-dev](https://www.youtube.com/watch?v=7K9kDrtc4S8)

[yt-coder-one](https://www.youtube.com/watch?v=yICiz12SdI4)

[why-token-based-auth-is-better](https://www.digitalocean.com/community/tutorials/the-ins-and-outs-of-token-based-authentication#how-token-based-works)

[doing-microservice-user-session-right](https://hackernoon.com/doing-microservices-user-sessions-right-the-fundamentals-hj3z34nu)

## advantages of token based authentication 
- this has many advantages such as scalability, using jwt as a means of authentication means that your application can be scalable,
- another things is, if other applications require a token from my application to work, using token based authentication is very good in this scenario
- it is stateless and by this we don't have to store information on the server

>  No session information means your application can scale and add more machines as necessary without worrying about where a user is logged in.

## disadvantages of token based authentication
- security reason: if someone is able to get your token then u are screwed

## how to solve this problem
- reduce/limit the validity time for a token
- using server side session with redis to check the validity of the token anytime there is a request to the api
- 
