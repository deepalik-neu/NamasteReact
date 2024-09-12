# NamasteReact

#What is JSX? 
- It is not necessary to use it with React instead we can use React and React dom APIs.

# React 
- it is  JavaScript Library.
- We can use React just in small piece of page.

# Episode 02
- Adding npm to our project.
- It will add package.json

What is a bundler?
A bundler is a tool in web development that takes multiple files (like JavaScript, CSS, images, etc.) and packages them together into a single file (or smaller number of files) that can be efficiently loaded by the browser. It helps optimize the delivery of your code by combining all your project's assets into bundles, reducing the number of requests the browser needs to make and improving page load performance.

create-react-app uses bundler(webpack)

- what is package-lock.json? it keeps the tracks of exact version which is on the project.
- what is node_modules? The node_modules folder is a directory in a Node.js project where all the project's dependencies (packages or modules) are stored after running npm install. These dependencies are defined in the project's package.json file, and the node_modules folder houses the actual code for those dependencies.

- what is transitive dependency? a dependency which is dependent on many other dependencies
every dependency has its own package.json.

# Parcel
- npx parcel index.html 
- npx: executing a package
- builds local server
- automatically refreshing (hot module replacement)HMR
- File Watching algorithtm (C++)
- Cache (binary files)
- Image Optimization
- production build- bundle our files -> minimize
- files are compressed (remove spaces)
- consistent hashing
- Code spliting
- Differential bundling ( any browser can open our appp)
- HTTPS
- Tree shaking removed unused code
- different bundle dev and prod

# BowswerList
- Compatible with older version of browsers
- npm package