const { spawn } = require("child_process");
const path = require("path");

const bots = [
  { name: "Bot 1", file: "bot1.js" },
  { name: "Bot 2", file: "bot2.js" },
  { name: "Bot 3", file: "bot3.js" },
  { name: "Bot 4", file: "bot4.js" }
];

function startBot(bot) {
  const filePath = path.join(__dirname, bot.file);
  const proc = spawn("node", [filePath], {
    env: process.env,
    stdio: "inherit"
  });

  proc.on("exit", (code) => {
    console.log(`[${bot.name}] exited with code ${code} — restarting in 5s...`);
    setTimeout(() => startBot(bot), 5000);
  });

  console.log(`[${bot.name}] started (${bot.file})`);
}

for (const bot of bots) {
  startBot(bot);
}
