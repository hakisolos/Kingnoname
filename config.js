//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348133286181";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU010N2hpcDBFMDR4bk9ISFF4MUNNZ2dkN3lNQTgySi9CL0NTb1hET1NVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieENUSXBNdDI4LzF2aEtmZVZZN3lhOUsrc1BIT0JjT0dCLzIwSzBxRkVqcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4R3ZKR3R1SnZ0enRkZWoyZ2hScGVBODZyaGxMOERUYlVqQnlTTUpCT2xNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRkY3a25CMG8vVk51TGVkL2VVajJIbDVMSHJ4Z21IclBGRjlzM3I4RVFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktGZ1lJRjN5ZldKTXRzQ0ZLc05taDVQZzgrMUN2OXhZaEN6UGpDVEJJWEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImszcDNkcGhlMjJsNEphLzBTQU5pUnY2OHJzK3Y1Y2ppa01sYUVTOWdpMjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JEZWRJMnhqZVJ1aE9XU1lWRFRBTHJ1Q0RyeWJHVHZZcDJ4SU13Z0VIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjRqU0k5blVua1krb3h1NzdReHQrUkFPdXU4SnRQeitnTCs3a3FVNVdGOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJJbFBNdHNpWmk0aFNveGhOSGlCdUV5TjVEUVN5VXcwZEdDZXJtdHZobktuTGprS01VeEJLZ0JCY1B0aEZ3RDcxVXhRK3RrZmpkWForU2NWN1RSYWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU0LCJhZHZTZWNyZXRLZXkiOiJUVWtxSytJY2VpOEJRa0hoSVcydmhQenBmOTN1NUlWZlNxUDZKUnU5YndZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDZ1FrR1BpS1F1aTZnOXAtSEVOUnVRIiwicGhvbmVJZCI6ImJjNDlhMzRlLTI1ZGQtNDY3MC1iMWQ0LTc0MGMyMDhiYTgwOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxc3dkQ0JNRWxnZFk2cE54T0dEczNFSU1nbzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHZIdHRJbFpNN1VmWWpWOUlpVWVmcmhXekxVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJSSDExSDgxIiwibWUiOnsiaWQiOiIyMzQ4MTMzMjg2MTgxOjQyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC8hOKBt+KBuOKBtuG1iOGthOC8hOKBt+KBuOKBtuG1iOGthNC4zrHQvNGU4oST0ZTRldGVINC6zrnQuGfgvITigbfigbjigbbhtYjhrYTgvITigbfigbjigbbhtYjhrYQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05yNSsrWUVFS3FpZ3JjR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Iit6Z1dkVFNmQ1JmVmZUWGdFVjh2dkQ2QTA4M0VzMzNxVXNUZUNTRllBamM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJmVmVZd0w1Y3dnMy9jYVlFOHk1WVQxMVBmREczYTJKT2xyWWZ6dTJqUnVaVFI5TXNmN1NZd0VrYXhMSHIwOElmQ1ZVRE9VN01yZmpOZGR4QkFyS0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpbG9EYXI4OEVjWjVUYXIwZlNGcGQyNzFMa0hMVWxxdlRTZURPSS9mdHNVZTVwWVRnWGx0anZPbFBqdWFaalo4blcvNFV6SCthNlpYZTZBazlZZVNqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzMyODYxODE6NDJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZnM0Rm5VMG53a1gxWDAxNEJGZkw3dytnTlBOeExOOTZsTEUzZ2toV0FJMyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTk5MzI3MX0="
module.exports = {
  githubToken: process.env.GITHUB_TOKEN || "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",
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-qxpQpJ-Mq1E6PIJ0q10PMNpQ2dZHJLIpNuLxv_SXdgT3BlbkFJuJuesP4lz39WGcqglcdoYDxTRUrkvHZGeNX_-klnsA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
