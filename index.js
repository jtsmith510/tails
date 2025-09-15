const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("clientReady", () => {
  console.log("Logged in!");

  client.user.setActivity({
    type: ActivityType.Custom,
    name: "custom",
    state: `🔧 Updating on Sonic’s latest adventures`,
  });
});

// client.on("messageCreate", (message) => {
//   if (message.content === "!ping") {
//     message.reply("Pong!");
//   }
// });

client.login(process.env.TOKEN);
