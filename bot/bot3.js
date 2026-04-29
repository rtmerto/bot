const { Client, GatewayIntentBits } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");

const DISCORD_TOKEN = process.env.DISCORD_BOT_TOKEN_3;
const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID_3;
const GUILD_ID = process.env.DISCORD_GUILD_ID_3;

if (!DISCORD_TOKEN || !CHANNEL_ID || !GUILD_ID) {
  console.error("Bot 3: Missing env vars (DISCORD_BOT_TOKEN_3, DISCORD_CHANNEL_ID_3, DISCORD_GUILD_ID_3)");
  process.exit(1);
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]
});

client.once("clientReady", async () => {
  console.log(`Bot 3 logged in as ${client.user.tag}`);
  try {
    const channel = await client.channels.fetch(CHANNEL_ID);
    if (!channel) return console.error("Bot 3: channel not found");
    joinVoiceChannel({
      channelId: CHANNEL_ID,
      guildId: GUILD_ID,
      adapterCreator: channel.guild.voiceAdapterCreator,
      selfDeaf: true,
      selfMute: true
    });
    console.log(`Bot 3 joined: ${channel.name}`);
  } catch (err) {
    console.error("Bot 3 error:", err.message);
  }
});

client.on("error", (err) => console.error("Bot 3 client error:", err.message));
client.login(DISCORD_TOKEN);
