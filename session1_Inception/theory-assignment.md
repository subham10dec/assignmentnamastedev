Q1. What is Emmet?
Emmet is built-in feature of any code-editors. It prevents us from writing the entire code by yourself but providing Emmet abbreviation.Emmet is enabled by default in html, haml, pug, slim, jsx, xml, xsl, css, scss, sass, less and stylus files.

eg- 1. html:5 will give boilerplate code of basic html.

Q2. Difference between a Library and Framework
Library - collection of pre-defined helper functions, objects, classes, modules that can be used in code to boost the development. By using a library, you can control the flow of the application and call the library. Eg: React, JQuery, Lodash

Framework - Foundation upon which applications are built. In contrast, when you use a framework, the control is inverted, i.e., the framework controls the flow and calls your code. Eg: Node JS, Angular, Spring

When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed

eg- REACT(library), Vue JS(framework)
Reference : https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/ (credit:Brandon Wozniewicz )
Added resource: Inversion of control-
https://www.youtube.com/watch?v=vFzP2SaMyA0

Q3. What is CDN? Why do we use it?
A content delivery network (CDN) refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content. The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.They provide cached internet content from a network location closest to a user to speed up its delivery.

Resource: https://www.youtube.com/watch?v=Bsq5cKkS33I

Q4. Why is React known as React?
React is named React because of its ability to react to changes in data. React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces. The name React was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner. React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.

Q5. What is cross-origin in script tag ?
The crossorigin attribute provides support for CORS , defining how the element handles cross-origin requests. CORS stands for Cross-Origin Resource Sharing. If cross-origin is set to "user-credential", then user authentication is required to access the file.
The purpose of crossorigin attribute is used to share the resources from one domain to another domain.It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

6. What is difference between React and ReactDOM?
   React library contains functionality utilised in web and mobile apps (react native). ReactDOM library contains functionality utilised in web browser. ReactDOM contains DOM manipulation utilities.

7. What is the difference between react.production.js and react.development.js ?
   react.production.js - production code of react library that is minified and production ready. react.development.js - More readable and developer friendly react library code that can be used to debug.
   Development is the stage of an application before it's made public while production is the term used for the same application when it's made public. Development build is several times (maybe 3-5x) slower than the production build.

8.What is async and defer - check Akshay Saini's Youtube channel ?

Without async/defer : Browser stops the html parsing once script tag is encountered. It resumes parsing only after script is fetched and executed.

Async : Html parsing is done in parallel while scripts are being fetched from the network and executed. Once the script is done with execution, html parsing is resumed. This can be used for external scripts like google analytics. It is better to avoid async for scripts that are dependent on other scripts since we dont know in which order script will be executed.

Defer : Similar to async, Html parsing is done in parallel while scripts are being fetched from the network. But scripts are executed only after the html parsing is done.
