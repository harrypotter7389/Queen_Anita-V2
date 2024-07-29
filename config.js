//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "263784812740";
global.owner = process.env.OWNER_NUMBER || "916260273863";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/7bf93cedbd0579b1a8a23.jpg,;
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUs0aFl2SUFEdW1QSzhCRkpicmtIMEJIREt0cThUeFhWRlFpUVNqTHkxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjY5Vkx6TmNqMCtVdUc3SWlxMUhVQzJ4ZGQ5MFZDbHdZZVhDK0U2MGJIbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLR0RnZWREZUE0b2VTZTNVbU1mbU8yY1pJVDZ2bXl1Y3FtM0FLTlJvNEhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0TzVTbmZmVEs1QjJhdGkzblZlMXpzYSsydVBZUVRnNTUvOFl3dDNKd3lJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLU3BDYUJQK1VmY0JzK3hDZVk3Q1Jab09VZDFacmwxbStXVERyS0hBR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhXcVByQnpWQWdoTUdxRC80L3VISU8zSWl3WmN3cms5TlAreWtxd1A2d3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUo3NVlwS0NBWFRwSFlnamFOT2hWZ3RXMitCVVh5Vjc2eTYzUkdObzluTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWg1elBJUkNha0ExWUN0a29uLzdLeFdnU1lIZmdtcklHYWtqdk9XMXZrQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iko2dGRncFkzcWRYNkJFeEZZdnRBZUFwY05rRjA4aDZ0a0VjV1BDNitVWnpadVE2SmwzUkd5SkhRWDIwcHB3aCs5SDhZZWhyM1pvTmxhMFAxSTdkVmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiJ1NVJ4WUZZOHA3blo1RTlmRmovTjJVTzZnLy9VYzNSYnRacU9yaVJHWmFnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQVTJTZ1pPOFF2YU55bVA0R3ZqS2ZnIiwicGhvbmVJZCI6ImFmMGJjOTQxLTBhNjQtNDVjZS05MTc1LTM2MmU1NWJlNjI3ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQNkVNdjh0ZUE2MmZSNUoydDJRTmVMc05DeGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0lNWktDYWNjTW1KL1oydnF3RjhMRHlMbnNVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpXV1hGRFFCIiwibWUiOnsiaWQiOiIyNjM3ODQ4MTI3NDA6NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3VCcHlnUWgrcWJ0UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSUt2ODI5amh5dlBhdlF3aU93VkZIRG9lN3R3NVlYSGxUQUY1ZXNadTVXND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTDNJSTAwMXBzSEVndUJwaEV3K0dZWHlxeEZyNzBGZm1wc3orc2dVU1dFR3o3MFg2dVRqa2s4R1FFN0JZK0JIbFBBOXZONHFjem40eUdpWjRlKysyQUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImRJNERSaEVFLzd3aVVJaGUyNW41SmQ3ak1MUFlMYkJwQjVWRWgwN0lXNnhPWStnUEJxckZ4WUkzNElSVTJOMVBmMlZCRENDTi91RENBUjJUMnBBWmhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzg0ODEyNzQwOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU0NyL052WTRjcnoycjBNSWpzRlJSdzZIdTdjT1dGeDVVd0JlWHJHYnVWdSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjIxNzc0OH0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝚳𝚪 𝐒𝚮𝐔𝚩𝚮𝚫𝚳™`",
  author: process.env.PACK_AUTHER || "𝚳𝚪 𝐒𝚮𝐔𝚩𝚮𝚫𝚳",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "𝚳𝚪 𝐒𝚮𝐔𝚩𝚮𝚫𝚳-V2",
  ownername: process.env.OWNER_NAME || "𝚳𝚪 𝐒𝚮𝐔𝚩𝚮𝚫𝚳",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
