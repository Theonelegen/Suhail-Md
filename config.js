const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_16_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDk4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICA1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MixcbiAgICAgICAgODYsXG4gICAgICAgIDc3LFxuICAgICAgICA5NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MSxcbiAgICAgICAgODYsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk2LFxuICAgICAgICA4NyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2LFxuICAgICAgICA5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDg5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQxLFxuICAgICAgICA5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcwLFxuICAgICAgICAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzksXG4gICAgICAgIDQyLFxuICAgICAgICAxNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU3LFxuICAgICAgICA4MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNixcbiAgICAgICAgMjI4LFxuICAgICAgICAzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDgwLFxuICAgICAgICA5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTOWNjQ2t0ZjROeWxqeGh4aWN2cytpSTJ5YXFremlVQm0yTjFydzdHYitrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMzgyOTY3MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE4RkUwQUM4REMyOEMxMzNCRUZFMzQ0MzEzQjFCRkVDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI3ODk4MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCS2dBLWdpS1N1T050VFliM0tWOXN3XCIsXG4gIFwicGhvbmVJZFwiOiBcImVhNDk0ZGI4LTQ0NDEtNDE1Yi05NzNmLTQwMzM4MDBkZWQ3OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDEsXG4gICAgICAxMjAsXG4gICAgICAxODksXG4gICAgICAyNTIsXG4gICAgICAyNDMsXG4gICAgICAyMzksXG4gICAgICAzNixcbiAgICAgIDYyLFxuICAgICAgMTQ3LFxuICAgICAgMjA3LFxuICAgICAgNDQsXG4gICAgICA4NCxcbiAgICAgIDE0NCxcbiAgICAgIDIwMixcbiAgICAgIDE5OSxcbiAgICAgIDkyLFxuICAgICAgMjA5LFxuICAgICAgMjMwLFxuICAgICAgMjIxLFxuICAgICAgMTAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgMTUxLFxuICAgICAgNjEsXG4gICAgICAxODcsXG4gICAgICAxOCxcbiAgICAgIDksXG4gICAgICAyNDksXG4gICAgICAxNTMsXG4gICAgICAyMTQsXG4gICAgICAyMjEsXG4gICAgICAyMDAsXG4gICAgICA3NyxcbiAgICAgIDE0NSxcbiAgICAgIDYzLFxuICAgICAgMTU4LFxuICAgICAgMTg3LFxuICAgICAgODIsXG4gICAgICAxMzYsXG4gICAgICAyMzMsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVDE4NlZBMTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzgyOTY3Mzk6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJXT1d+XCIsXG4gICAgXCJsaWRcIjogXCIyNTI2NDMxOTY4NDYxNjU6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTS9hOVo4QkVMeS9wYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtbmdwZHQzVit0cVBTSE1CYW9oQkVPeThHRTByaGNOcEFpYzZqcXQxN1FnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlETlhreExtZlMrMlNhRHBrVzZRTHJva2FCRm5hMmhhTjJrTjFGakszQnFJMXBmYWUzbWpyeHBJenJTcHJFMG1xL0MyeGloOTVqV1EwTk80Y1ZJdUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm16MjEyZG5aZDBWRHphVVpBWnNtTVRXZEZCR0Qrc2x2K054MGNEQTQ4ME1FK0ZXVjgvcVFhOTFoTlBmZWc1Si9zMTNHOHZsL3pqak9sRTVIemF5dWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzgyOTY3Mzk6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNzg5NzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKM0ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUozRi5qc29uIjogIntcImtleURhdGFcIjpcIjVKbVJCUzJhQnRUN2ppK0N2S2k3OUdNT1NYN01udjJUb3FJK3UxWWdRU1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzM1Mzc1NjkzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMjc3Mzc1NzMxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
