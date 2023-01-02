//here the event starts
const config = require("../../botconfig/config.json")
module.exports = client => {
  try{
    client.user.setActivity(client.user.username, { type: "PLAYING" });
  }catch (e) {
      console.log(String(e.stack).red);
  }
  //Change status each 10 minutes
  setInterval(()=>{
    try{
      client.user.setActivity(client.user.username, { type: "PLAYING" });
    }catch (e) {
        console.log(String(e.stack).red);
    }
  }, 10*60*1000)
}