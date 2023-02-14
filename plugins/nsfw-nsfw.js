
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {
	
	if (!global.db.data.chats[m.chat].nsfw) throw `ʟᴏs ᴄᴏᴍᴀɴᴅᴏ ɴsғᴡ ᴇsʀᴀ ᴅᴇsᴀᴄᴛɪᴠᴀᴅᴏ\n\nʟᴏs ᴘᴜᴇᴅᴇ ᴀᴄᴛɪᴠᴀ ᴄᴏɴ ᴇʟ sɪɢᴜɪᴇɴᴛᴇ ᴄᴏᴍᴀɴᴅᴏ\n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 15) throw m.reply(`😐ᴇʀᴇs ᴍᴇɴᴏʀ ᴅᴇ ᴇᴅᴀᴅ! ᴠᴜᴇʟᴠᴇ ᴄᴜᴀɴᴅᴏ ᴛᴇɴɢᴀs ᴍᴀs ᴅᴇ 15 ᴀñᴏs`) 
   
m.react(rwait)
let type = (command).toLowerCase()

switch (type) {

case 'ass':
case 'culos':
    let as = await (await fetch(global.API('fgmods', '/api/nsfw/ass', { }, 'apikey'))).json() 
    conn.sendButton(m.chat, `🥵 Random *${command}*`, fgyt, as.result, [['▷▷ sɪɢᴜɪᴇɴᴛᴇ', `${usedPrefix + command}`]], m)
   m.react(xmoji) 
break

case 'boobs':
case 'boobies':
   let xb = await (await fetch(global.API('fgmods', '/api/nsfw/boobs', { }, 'apikey'))).json()
    conn.sendButton(m.chat, `🥵 Random *${command}*`, fgyt, xb.result, [['▷▷ sɪɢᴜɪᴇɴᴛᴇ', `${usedPrefix + command}`]], m)
   m.react(xmoji) 
break

case 'pussy':
   let xp = await (await fetch(global.API('fgmods', '/api/nsfw/pussy', { }, 'apikey'))).json()
    conn.sendButton(m.chat, `🥵 Random *${command}*`, fgyt, xp.result, [['▷▷ sɪɢᴜɪᴇɴᴛᴇ', `${usedPrefix + command}`]], m)
   m.react(xmoji) 
break

case 'lesbians':
case 'lesbian':
   let les = await (await fetch(global.API('fgmods', '/api/nsfw/lesbian', { }, 'apikey'))).json()
   conn.sendButton(m.chat, `😈 Random *${command}*`, fgyt, les.result, [['▷▷ sɪɢᴜɪᴇɴᴛᴇ', `${usedPrefix + command}`]], m)
   m.react(xmoji) 
break

case 'pack':
case 'cosplay':
	     let img = await conn.getFile(global.API('fgmods', '/api/nsfw/cosplay', {}, 'apikey'))
	     conn.sendButton(m.chat, `😈 Resultado 🤭\n Random *${command}*`, wm, img.data, [['▷▷ sɪɢᴜɪᴇɴᴛᴇ', `${usedPrefix + command}`]], m)
	     m.react(xmoji) 
	break


default:
 }
}
handler.help = ['ass', 'boobs', 'lesbian', 'pussy', 'pack']
handler.tags = ['nsfw']
handler.command = /^(ass|culos|boobs|boobies|lesbian|lesbians|pussy|cosplay|pack)$/i
handler.diamond = true
handler.register = true
handler.group = true

export default handler
