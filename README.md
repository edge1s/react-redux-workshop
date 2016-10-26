# React Redux project prepared for workshop

## You need to have instaled
		node

## install & run project
open terminal(unix)/command line(windows) and write
```
mkdir projectName
cd projectName
git clone https://github.com/edge1s/react-redux-workshop.git
```
In terminal write
```
npm install
```
next
```
npm run debug
```		
to start webpack dev server with hot reloading.  
Then start browser and go to `localhost:8080/webpack-dev-server/` to open app with hot reloading or to `localhost:8080` to open app directly.  
TIP: routes urls are visible only under direct `localhost:8080` url.

## How to go step by step with workshop:
Open terminal and type:
```
git checkout step-1-simple-components
```
to go to first step

You can go to next step with `git checkout tagname`.  
You can get whole list with `git tag`

## Known Issues
Sometimes on Windows Webpack doesn't see files changes after `git checkout` (you won't see changes in browser then).  
You have to kill already running webpack server and start it again with `npm run debug` to see updated version of app.
