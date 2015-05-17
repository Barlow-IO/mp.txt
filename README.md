# mp.txt
Literally a text based adventure

# Prerequisites

 1. [**nvm**](https://github.com/creationix/nvm) [(nvmw for windows)](https://github.com/hakobera/nvmw)

 2. **node.js:** `nvm install node`

 3. **io.js:** `nvm install iojs`

#How to use

 1. Clone this repository

 2. run `npm install -g nodemon`  
    (if you have problems with this step, use `sudo` at the beginning of the command)

 3. run `cd /path/to/this/repo`

 4. run `npm install`

 5. run `grunt` to start the server

 6. open a browser and go to `localhost:3001`

Any time you save changes to code, `nodemon` will update the server.
Just refresh the web page, and you're good to go.

#Trouble Shooting

 1. `-bash: node: command not found` nvm means "node version manager" and it's using `iojs` somehow. run `nvm use node` and you're good to go

#Naming Conventions

 1. Globals should be `IN_ALL_CAPS`

 2. Files should be `lower-case-with-dashes.extension`

 3. Instance variables should be `camelCased`

 4. Classes should be `Capitalized`
