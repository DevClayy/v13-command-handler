# Discord.js@v13 Command Handler (W/Moderation Commands)
This is a Simple Moderation Bot made by `ItsNoah#3408` you can use it on VSC, Glitch, or Replit. Replit will have a different version of using the bot so make sure to read the instructions below. Please make sure to leave credits and support my future projects! THanks




## Hosting on Replit.com
Replit automatically has the node.js version set to @12.5, so we are gonna have to change that. Please follow the instructions below.

Inside your project on the right-hand side, you have a console, and a shell, you want to click on the "Shell", and copy/pate in the following.

**Note:** This is a terminal, control c + control v does not work, you need to click it then 2 click it and copy and paste it in that way.

```sh
npm init -y && npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH
```

2. Create the [`.replit`](https://docs.repl.it/repls/dot-replit) to execute node from the shell instead of the console.
```
run="npm start"
```

3. Make sure to add the start script in your package.json file
```js
  "scripts": {
    "start": "node ."
  }
```

