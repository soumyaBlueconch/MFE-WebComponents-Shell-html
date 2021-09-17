angular-web-component is one MicroFrontend App
angular-web-component2 is 2nd MicroFrontend App

<!-- enter the app -->
cd angular-web-component

<!-- create its build -->
npm run build;

<!-- a dist folder is created with a folder named angular-web-component-->
copy the folder "angular-web-component" into shell-app/dist/


<!-- enter the app -->
cd angular-web-component2

<!-- create its build -->
npm run build;

<!-- a dist folder is created with a folder named angular-web-component-->
copy the folder "angular-web-component2" into shell-app/dist/

<!-- we need to serve the shell app now  -->
cd shell-app
serve