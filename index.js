const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`http://localhost:${port}`));
const Discord = require("discord.js")
const colors = require("colors");
const fs = require("fs");
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  disableEveryone: true,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
//Client variables to use everywhere
client.commands = new Discord.Collection(); //an collection (like a digital map(database)) for all your commands
client.aliases = new Discord.Collection(); //an collection for all your command-aliases
client.categories = fs.readdirSync("./commands/"); //categories
client.cooldowns = new Discord.Collection(); //an collection for cooldown commands of 
const srza = require('discord.js');

client.on("ready", () => {
  function sobhan() {
        let vazyiat = ["dnd", "idle","online"] // online | dnd | idle |
        let godrat = Math.floor(Math.random() * vazyiat.length)
        client.user.setPresence({
        status: vazyiat[godrat] })
  }; setInterval(sobhan, 1000)
});
//Loading files, with the client variable like Command Handler, Event Handler, ...
["command", "events"].forEach(handler => {
  try{
    require(`./handlers/${handler}`)(client);
  }catch (e){
    console.log(e)
  }
});
["erela_js_handler", "erela_js_node_log"].forEach(handler => {
  try{
    require(`./handlers/lavalink/${handler}`)(client);
  }catch (e){
    console.log(e)
  }
});
//login into the bot
client.login(require("./botconfig/config.json").token);

const Enmap = require("enmap")
client.settings = new Enmap({name: "settings", dataDir: "./database/settings"})




process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at: " + promise)
  console.log("Reason: " + reason)
})
process.on("uncaughtException", (err, origin) => {
  console.log("Caught exception: " + err)
  console.log("Origin: " + origin)
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log(err);
  console.log("Origin: " + origin)
});
process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});
process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});
process.on('multipleResolves', (type, promise, reason) => {
  console.log(type, promise, reason);
});