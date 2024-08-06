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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_12_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDYwLFxuICAgICAgICA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzOCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDksXG4gICAgICAgIDk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM5LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjExLFxuICAgICAgICA1MixcbiAgICAgICAgMTcwLFxuICAgICAgICA1MixcbiAgICAgICAgMjAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWUlEc2VJNVRBcG8wZVN6TXovN1RobjI0b25oM0xKbC9LR3cxY0ZhTmxDWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN210ZURwQXFRNGFRRGJXeGR6RzJFQVwiLFxuICBcInBob25lSWRcIjogXCJkYzFmYzUyMS1jOGZiLTQxMDgtOGU1My1jNWY2NDIyMDNjMTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMTU5LFxuICAgICAgNjksXG4gICAgICA5MixcbiAgICAgIDE2LFxuICAgICAgMTM4LFxuICAgICAgMTc0LFxuICAgICAgMTMzLFxuICAgICAgOTQsXG4gICAgICAyMDUsXG4gICAgICAyNDYsXG4gICAgICA3NixcbiAgICAgIDEzOCxcbiAgICAgIDE2NyxcbiAgICAgIDk5LFxuICAgICAgMjM3LFxuICAgICAgMTQ3LFxuICAgICAgNzgsXG4gICAgICAxNTQsXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICAzNSxcbiAgICAgIDQ2LFxuICAgICAgMjI4LFxuICAgICAgMTI3LFxuICAgICAgMjIwLFxuICAgICAgMzQsXG4gICAgICAyMTEsXG4gICAgICA3NixcbiAgICAgIDU1LFxuICAgICAgMTQ0LFxuICAgICAgMjQyLFxuICAgICAgMTEsXG4gICAgICAxMjUsXG4gICAgICA1MixcbiAgICAgIDk2LFxuICAgICAgNjEsXG4gICAgICAyMCxcbiAgICAgIDUwLFxuICAgICAgMTQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJRUFBCU1JWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDg5NzE1ODMwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJvbmx5b25lYmlnZ2VzdGJhZGRlc3RkcmF5XCIsXG4gICAgXCJsaWRcIjogXCI4NjY1OTk1NzgzMzc2Njo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B1N3JaTUNFTld5eWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN091VTNxOGxSUkhacXJCMVlDQUFYY0ptd1lDbUhmWE9GeFFlemVib3ZYQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0RlhIaisvRnpLczNVUU5JdHhDNTJaTmlleURHejRVb2txb3BDeHZhSytPL1FiS1hicXgxR09RZE1rWnNiNTQ3QmM4ajY5UWZsdXY0eU5UeHQvenBDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGNzNTUHNseWYyb2Zoc1N5Wi9tM2ZnNHBCN1J5SmozQjlJaWRUZGU2cmRwalM5ejE0QWw3RnJqa0llRlNoeXhFcHd2TGdZQkkzOHBUOVhSOGxOQkVCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDg5NzE1ODMwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5NjQzMTNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "onlyonebiggestbaddestdray",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
