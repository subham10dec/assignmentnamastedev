1. What is npm ?
   npm is one of the popular package manager / Software registery for managing development and sharing utilities/ packages.

   It comes with a command-line interface (CLI) used to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database.

   React app is powered by a lot of helper packages for bundling, optimizing, minifying which can be installed and tracked through npm.
   One more popular package manager is yarn.
   Simple Analaogy for better understanding : maven : java :: npm : javscript(react)

How to initialize npm?
npm init
npm init -y can be used to skip the setup step, npm takes care of it and creates the package.json json file automatically , but without configurations.

2. What is `Parcel/Webpack`? Why do we need it?
   Parcel and Wepack are popular Web application bundlers. Bundler comes with many powerful features to simplify the development of complex web applications with multiple dependecies that is production-ready and easily loadable in the browser.

   Parcel/Webpack is type of a web application bundler used for development and productions purposes or power our application with different type functionalities and features.

Parcel Features:
HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
File watcher algorithm - made with C++
Minification
Cleaning our code
DEV and production Build
Super fast building algorithm
Image optimization
Caching while development
Compresses
Compatible with older version of browser
HTTPS in dev
Port Number
Consistent hashing algorithm
Zero Configuration
Automatic code splitting

installation commands:
Install:
npm install -D parcel
-D is used for development and as a development dependency.

Parcel Commands :
For development build:
npx parcel <entry_point>
For production build :
npx parcel build <entry_point>

3. What is .parcel-cache?
   .parcel-cache is used by parcel(bundler) to reduce the building time. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

4. What is npx?
   npx is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

5. What is difference between dependencies vs devDependencies
   dependencies:Packages that are required in the production environment
   Command : npm install <package-name>
   Eg : react, react-dom, redux, express, nodemon, babel, mocha (testing)
   devDependencies :Packages that are required only in the development environment, and not in prod/testing environment
   Eg: parcel
   eg. Command : npm install -D <package-name>or npm install --save-dev <package-name>

6. What is Tree Shaking?
   Tree shaking is a concept in javascript to describe the removal of dead code.
   Tree shaking is done by bundlers like parcel/webpack while bundling multiple javscript files into single files thus improving web performance.

Steps to implement tree shaking :

1.  Declare ES6 import and export for the modules.
2.  Bundler analyses the dependency tree during compilation phase
3.  Any unused code is removed from the final build

4.  What is Hot Module Replacement?
    The process of adding, removing or updating the modules while the apllication is running without full reload is call Hot Module Replacement. This feature is available in all module bundlers like Parcel, Webpack,etc.,There are many advantages of this features :
    a. The application state is retained which is usually lost during full reload
    b. Insantly updates the browser when source css/js code is modified.

Parcel automatically does HMR while the application uses a framework (Eg:React, Vue). If no framework is used, then HMR can be opted using module.hot API

Webpack needs some configuration to be done for using HMR

8. List down your favourite superpowers of Parcel and describe any 3 of them in your own words.
   a. minification(remove indentation)
   b. image optimizations.
   c. compression(renaming variables)
   d.cleaning our code
   e. super fast build
   f. dev and prod builds
   g. caching while development
   h. works with older version of browsers
   i. Https on dev as well npx parcel index.html (--https)
   j. Consistent Hashing Algorithm
   k.Zero configuration
   l.Tree shaking - Removing unwanted code
   m. API proxy

   My top favourites are : 1.Tree shaking (described about it in q.no 6) 2.Caching - Parcel caches everything it builds. f you restart the dev server, Parcel will only rebuild files that have changed since the last time it ran. Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build 3.Image optimization - Bzy default, Parcel includes lossless image optimization for JPEGs and PNGs in prod. mode, which reduces the size of images without affecting their quality. No configuration or query parameters are required to use.

9. What is .gitignore? What should we add and not add into it?
   .gitignore file is a text file where we can mention the files/directories to ignore. That is, those files/directories will not be pushed into the git repositories. The great advantage of putiing them in .gitignore file is that those can be huge in size and those files can be generated with the help of package.json or package-lock.json file. It's very important to put node_modules in the .gitignore file since it contains a lot of packages which can be installed later by using package.json file. Other directories that should be placed in .gitignore file are .parcel-cache and dist. package.json and package-lock.json must not be put in .gitignore file.
   for example, For security, the security key files and API keys should get added to the gitignore. package-lock.json should not add into your .gitignore file.
10. What is the difference between package.json and package-lock.json
    package.json: a. This file is created as soon as npm init command is fired
    b.It contains metadata about the project like name, version, author, scripts and dependencies required by the project
    c. It contains only direct dependencies
    d.This file must not be put in .gitignore file
    e.During deployment, there is no gurantee that if the version number of the dependencies with which the project was developed (package.json file has the least version of dependencies), will be reproduced and thus the project might not be working as intended
    f.^ or ~ or >,<,|| can be used in version of dependencies in package.json

    package-lock.json :a. This file is automatically generated when npm modifies either node_modules tree or package.json
    b. It contains dependencies required by the project with the exact version with which it was created
    c. It contains nested/transitive dependencies (dependencies of dependencies)
    d. This file must also not be put in .gitignore file
    e. During deployment, the exact version of dependencies will be reproduced and thus the project will be working as intended
    f. Only exact version of dependencies must be used in package-lock.json

11. Why should I not modify package-lock.json?
    package-lock.json file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

As the name suggests, it locks the package-lock.json file, since it contains sensitive data which are not indened to modify. As it contains the entire tree of dependencies, modifying any of the entries which might have a dependency to that entry might be affected. This causes inconsistency in the project

12. What is node_modules ? Is it a good idea to push that on git?

In simple words, node_modules holds the source code of the packages that are installed through npm. It is a very bad practice to push node_modules to git (source control) since it is huge in size and blow up the project capacity and moreover all the packages in node_modules can be re-generated using package.json file.

13. What is the dist folder?
    dist folder is created once the application is build using parcel web application bundler. It contains the output of the bundler i.e all js files, css files and html files bundled into a single js file, css file and html file that is compressed and minified

14. What is browserlists. Read about dif bundlers: vite, webpack, parcel
    The browserslist field in package.json can be used to specify which browsers/node.js versions the application supports. The value of this object can be an array of statistics ( % coverage), last versions, Node.js versions, Browser versions or even unreleased versions.
    "browsersList" : ["last 2 versions", "> 1%", "not dead"]

15. Read about: ^ - caret and ~ - tilda
    ^ version: In package.json, if a dependency's version [majorversion.minorversion.patchversion] is prefixed with ^ , then it will be updated to all future minor versions and patch versions and not any major version
    Eg: "react": "^18.2.0" will use releases from 18.2.0 to < 19.0.0

~ version : In package.json, if a dependency's version [majorversion.minorversion.patchversion] is prefixed with ~ , then it will be updated to all future patch versions and not minor/major versions

Eg: "~18.2.0" will use releases from "18.2.0" < 18.3.0

Patch version is used for any bug fixes. Minor version is used for adding new functionality. Major version may contain major functionality changes/ some existing features may be deprecated. So if ~ is used , user will be updated to all bug fixed patch versions. If ^ is used, user will be updated to all new functionality/ features included minor version.

16. Read about Script types in html (MDN Docs)-
    type attribute of the <script> tag indicates the type of script.Until HTML 4, type is a required attribute. The value of type can be any of the following :

<script type="" src="app.js"></script>

In HTML5, type attribute is not mandatory. If type attribute is not present(default), or an empty string (type="") or javascript MIME type (text/javascript or application/ecmascript), it is treated as classic "javascript" file.

<script type="module" src="app.js"></script>

If the type attribute is set module, then the code in that js file is treated as module.

<script type="importmap" src="app.js"></script>

f the type attribute is set importmap, the body of the element contains importmap ie an JSON object using which the browser can resolve the module specifiers while importing modules.

<script type="{$anyothervalue}" src="app.js"></script>

If the type attribute contains anyother value, then the code is treated as data block and will not be processed by the browser. A valid MIME type other than Javascript MIME type (Eg: image/png or text/css) must be mentioned. All the other attributes for this type will be ignored even the src attribute.

17, What is module
A module is just a file. One script is one module. As simple as that.

Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:

export keyword labels variables and functions that should be accessible from outside the current module.
import allows the import of functionality from other modules.

For instance, if we have a file sayHi.js exporting a function:

// 📁 sayHi.js
export function sayHi(user) {
alert(`Hello, ${user}!`);
}

// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
