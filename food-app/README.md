# A REACT E-COMMERCE FOOD APPLICATION

## INTRODUCTION

## Welcome to Racheal's e-commerce food application!

This project was bootstrapped with Create React App for the Frontend and a Json server template for the backend. This project consist of over 20 components, a RESTful API and over 5 client-side Routes using react-router and navigation links. Styled Components was used for the styling, i also made use of the react use-context hook for some of the components which allows us to share "global" data between components without passing the data via props. It fetches data from the backend db.json file using the GET request and displays them in the right components. This application allows a user to send data to the backend using the POST request, to delete a data using the DELETE request and also add foods to the cart using the PATCH request. A user can sign, login and also log out.

## SETUP

All the food data about can be found in the db.json file. We'll be using json-server to create a RESTful API for our database.

Run npm install to install our dependencies.

Run npm run server to start up json-server on http://localhost:3001.

In the project directory, run npm start to start up our React app at http://localhost:3000 to view it in your browser.

The page will reload when you make changes You may also see any lint errors in the console.

### npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

### npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify