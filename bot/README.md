# Discord AFK Bots — Free 24/7 Hosting Guide

## Deploy to Railway.app (Free)

### Step 1 — Upload to GitHub
1. Go to [github.com](https://github.com) and create a new **public repository** (e.g., `discord-afk-bots`)
2. Download just this `discord-bots-deploy` folder
3. Upload its files to your new GitHub repo

### Step 2 — Deploy on Railway
1. Go to [railway.app](https://railway.app) and sign in with GitHub
2. Click **New Project → Deploy from GitHub repo**
3. Select your repo

### Step 3 — Add Environment Variables
In your Railway project, click **Variables** and add these 12 variables:

| Variable | Value |
|---|---|
| `DISCORD_BOT_TOKEN` | (Bot 1 token) |
| `DISCORD_CHANNEL_ID` | `1301864186254594118` |
| `DISCORD_GUILD_ID` | `1301864185411534890` |
| `DISCORD_BOT_TOKEN_2` | (Bot 2 token) |
| `DISCORD_CHANNEL_ID_2` | `1302214503739555872` |
| `DISCORD_GUILD_ID_2` | `1301864185411534890` |
| `DISCORD_BOT_TOKEN_3` | (Bot 3 token) |
| `DISCORD_CHANNEL_ID_3` | `1398379073633386558` |
| `DISCORD_GUILD_ID_3` | `1301864185411534890` |
| `DISCORD_BOT_TOKEN_4` | (Bot 4 token) |
| `DISCORD_CHANNEL_ID_4` | `1301864186124439680` |
| `DISCORD_GUILD_ID_4` | `1301864185411534890` |

### Step 4 — Done!
Railway will auto-deploy and run `npm start`, which launches all 4 bots.
They'll run 24/7 with auto-restart if any bot crashes.

## Free Tier Limits
Railway gives you **$5 credit/month free** — enough for these 4 bots.
