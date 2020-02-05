# Yazamut Amit
## About
seed app for students projects. contains:
### 1. client:
    a. vue js.
  b. botstrap 4.
    c. prime vue.
    d. axios.
### 2. server:
    a. express js.
    b. mongoos orm, stores data at mongo atlas.

## Intall manual
[manual](https://docs.google.com/document/d/1Aukk75HqhIS5e3QuvmvgoghLv0Id0OWGNk7wvAE4Qu4/edit?usp=sharing )

## make accounts for:
 [mongo] (https://www.mongodb.com/) -say hellow to our database.
 [github]. where our repo will be stored <https://github.com/>.

## download and install :
 [vs-code from] <https://code.visualstudio.com/download>
 node.js and NPM  from <https://nodejs.org/en/download/>
 git from <https://git-scm.com/download/win>
 install vue devtool for chrome extension from: <https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en>


## make sure they all work:
 go to folder at file manager.
 at url line write cmd, press enter- console is open (?)
 type : `git --version` (press enter) should be something like “git version 2.21.0.windows.1”
 type: `npm -v` . (press enter) should be something like “6.9.0”
 type: `node -v` . (press enter) should be something like “v10.16.0”
 init project:
 create project folder at c/yazamut.
 right click folder, Open with Code. 
 press ctrl + ` to open console. make sure you are in terminal tab.


## download and install project:
 at console, write : `git clone https://github.com/ilanbenyos/yazamut-lehava.git`
 type: `npm run install:all`.
 at right side of terminal press Split terminal button (between + and delete)
 on the left side type: `npm run server:start`. should be “app listen on port:  3000”
 on the right side type: `npm run client:start`. should be <http://localhost:8080/>
 ctrl + click on <http://localhost:8080/> (or copy-paste into chrome url)
 site should open with “ברוכים הבאים לאתר יזמות אמית 2020”
 in chrome, press `f12` ( or `fn + f12`) to open chrome devtool.
 in devtool. make sure you have Vue tab at top-right side.
 at page, press send!!! button. you should have “Hi From Server!” note.


## “make it yours”:
 go to guthub site. make sure you’re logged in.
 at top right- press + icon (new repository)
 at page “Create a new repository” Repository name and press Create repository.
 at top section- make sure you’re on HTTP and copy repo link.
 go to vs code terminal and type: `git remote -v`.
 type: `git remote set-url origin` +  repo link (the link you’ve copied earlier!).
  type: `git remote -v`. validate that the upstream url changed.
 type: `git push`.
 at github page, go to repo page and see if you have all files and folders like in your local pc.
 you are now the proud owner of a git repo!



## languages needed: html, css, js.
## important libraries to know:
### cient:
 vue.js- client framework. https://vuejs.org/v2/guide/
 bootstrap- css ui library https://getbootstrap.com/docs/4.4/getting-started/introduction/
 primeVue- ui library for components like modal, input, buttons ect. https://primefaces.org/primevue/#/
### server:
 express- node js backend framework. https://expressjs.com/
 mongoose- database connector (orm). https://mongoosejs.com/docs/
### devTools:
 git.




