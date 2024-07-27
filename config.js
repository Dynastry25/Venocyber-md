//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://dynastry_user:2Qovyjbimr380zhxcrQYPGD1V7OZ9zhV@dpg-cqilqq2j1k6c739h410g-a.oregon-postgres.render.com/dynastry";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255753266350";
global.owner = process.env.OWNER_NUMBER || "255753266350";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU5JdFRYV213bG9vNzI0Qk5qYUN5RzFKRWE1U1hROEFhU3VhU21HQjhrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienhjZ3BxdTJoeENXczlNNXNMM1VoRzU5blpQdWx3RXZlaEFOT0hrc3YzTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjR0hvM3QwN1dvZXR3RXZvK3hKQjVDVTJHajBEb0tyazg5Q3JqZEdwVVhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4R292MWQvNVcrLytpZXI1bUp5blNMaURwMjBjRXdzOEdYQkV6cHpSOTM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNGejRtM25XS1Vac1ZLek80MEtGNGtaVmhLbGtOeDBndGs4bm85aDM2a289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRzSFpKdU5BOGRQNFFhS0xPc05hVDJ3MlFxRXpLeGkySGV1RTc1TVlialk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0VPZnJmU3JBVG0wZWQvLzI3RG5RU3VQS1E3VmNmMGk0MGZza3ZFaWNWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk9OZzk0ZzhsWnhubHBMTktHMlQyTDB5ekhIRFZ3NXlHelFqZEpOZDFEYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpJTE9SQnBIWkJGUjNtVFNSQlpya0tVS0FVdkZtRFJWZWpkRVVBZ0pxc2lGZUZ3N1dYcTRzRlRmVS9IZnBkT2hYNm5YemdGYXhGSmtSYXJGdXUydUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc0LCJhZHZTZWNyZXRLZXkiOiJJckhJRUJWZDJqNmxvM2x3cmJ1TERaS2Q4Z2FpQUxpTDRVOEZyMmRzMnNNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTc1MzI2NjM1MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2QjA0NkY3RTI1MEE0MTNGMkU2MTI5NUQ3MjdDQ0Y1QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMTI0MjY3fV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0SHE2LTNpRVJocXdKdENCeDdkOTVRIiwicGhvbmVJZCI6ImM2MmE3MjMyLTE3YWUtNGNhNi1iODNkLTQ1Yzc0OGExNWVhNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtc29rVlo2M1pwYy9CdjRWbnNzUXpVRkZPMGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjYwYlFYSWs5WDQzdWQxSnFVUnIwTnMyMVlZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilc3MlkxVlZEIiwibWUiOnsiaWQiOiIyNTU3NTMyNjYzNTA6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRHluYXN0cnkgQnVzaW5lc3MifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09hVmpid0NFTnFQbHJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlJCem1rY2dud0NUQ0RQK3NyRjdIdVpVTmJuZkEvNGtsQnIrOWlRRUxTV009IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilp1blF6RjAwUW1ISllkdUowVGpFYWRRYWsvdkxtbHlyR1pjRVpabndEdXpKaXh2cXpyTTNzYkRzWjBLZUNhTFJYZnRIdzgvNDI5dS9RdjM0RGo2RUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOTVBHeHZGVDU4R2tjR2t4YWl6RlYrWFdvUFdNaktjajVmbWR1Yitpd3p5TlRUbWVvZEVQNDc2S0xFUi83QVFjWm9YNGM4UVEyZ21qUDFpZVpoNldEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTc1MzI2NjM1MDoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVUWM1cEhJSjhBa3dnei9yS3hleDdtVkRXNTN3UCtKSlFhL3ZZa0JDMGxqIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMTI0MjY0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdwcSJ9
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "Dynastry Business",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Dynastry-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Dynastry",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
