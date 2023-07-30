1. protected route
2. authorized function / process - (if you are not an admin then it should not work)
3. also there are some things that should not be visible to normal user only maybe the admin can see it on the frontend, like the ability to remove a particular user. 
4. if a user tries to access the dashboard without logging in redirect them to the login page
5. after creating protected route, if a user directly inputs the link to the protected route in the browser url it will not work propely fix that (done)
[Stackoverflow Question](https://stackoverflow.com/questions/70713340/logged-in-user-redirects-to-login-page-when-entering-url-manually-react-js)

according to chat gpt user role, and email address are considered non-sensitive information however,
1. the user name and email can be accessed easily by attackers and used for cross-site scripting attacks, 
2. also if the user information is updated on the server or database the localstorage will not pick up the new changes
3. also there are privacy concerns, for example, in europe they have what is called the GDPR - General Data Protection Regulation, in places like this the lawa maybe that a company cannot store the user information in the browser local storage, so all this things should be taken into account.

solution
1. Encrypt the data to be stored in the localstorage
2. fetching data anytime i need it in my client and not actually persisting it in the localstorage, i think this is where libraries like react-query and swr really shine because it makes it very easy to fetch, persist and it handles some other really nice quirks that can come in handly for the developer.