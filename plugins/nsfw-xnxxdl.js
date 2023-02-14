
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, {conn, text, usedPrefix, command }) => {
  let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `🚫 ʟᴏs ᴄᴏᴍᴀɴᴅᴏ ɴsғᴡ ᴇsʀᴀ ᴅᴇsᴀᴄᴛɪᴠᴀᴅᴏ\n\n ʟᴏs ᴘᴜᴇᴅᴇ ᴀᴄᴛɪᴠᴀ ᴄᴏɴ ᴇʟ sɪɢᴜɪᴇɴᴛᴇ ᴄᴏᴍᴀɴᴅᴏa \n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 15) throw `😐 ᴇʀᴇs ᴍᴇɴᴏʀ ᴅᴇ ᴇᴅᴀᴅ! ᴠᴜᴇʟᴠᴇ ᴄᴜᴀɴᴅᴏ ᴛᴇɴɢᴀs ᴍᴀs ᴅᴇ 15 ᴀñᴏs`
  if (!text) throw `✳️ ᴘᴀʀᴀ ʙᴜsᴄᴀʀ\n📌 ᴜsᴇ : *${usedPrefix}xnxx <search>*\n\nᴘᴀʀᴀ ᴅᴇsᴄᴀʀɢᴀʀ ᴅᴇsᴅᴇ ᴜʀʟ:\n📌 ᴜsᴇ : *${usedPrefix}xnxxdl <url>*`
 m.react(rwait)

let type = (command).toLowerCase()
switch (type) {
	case 'xnxxsearch':
  case 'xnxx':
  //if (!text) return m.reply(`✳️ ${msg.search()}`)
  try {
  let res = await fetch(global.API('fgmods', '/api/xnxxsearch', { q: text }, 'apikey'))
  let json = await res.json()
   let listSections = []
	Object.values(json.result).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['🎥 MP4', `${usedPrefix}xnxxdl ${v.link}`, `▢ 📌 *Título* : ${v.title}`]
        ]])
	})
	return conn.sendList(m.chat, '  ≡ *xɴxx ᴅʟ*🔎', `\n 🔞 ʀᴇsᴜʟᴛᴀᴅᴏs ᴅᴇ:\n *${text}*`, fgig, `🅗🅐🅖🅐 🅒🅛🅘🅒🅚 🅐🅠🅤🅘`, listSections, m)

	} catch (e) {
    m.reply(`❌️ Error: intenta con otro`)
     }
  break
  case 'xnxxdl':
  // if (!text) return m.reply(`✳️ ${msg.example()} :\n${usedPrefix + command} https://www.xnxx.com/video-9q1wbf7/full_version_https_is.gd_utbgur_cute_sexy_japanese_amature_girl_sex_adult_douga`)
   try {
  let xn = await (await fetch(global.API('fgmods', '/api/xnxxdl', { url: text }, 'apikey'))).json()
  conn.sendFile(m.chat, xn.result.files.high, xn.result.title + '.mp4', `
 ≡  *xɴxx ᴅʟ*
 
🔸️ *📌 ᴛɪᴛᴜʟᴏ*: ${xn.result.title}
🔸️ *⌚ ᴅᴜʀᴀᴄɪᴏɴ:* ${xn.result.duration}
🔸️ *🎞 ️ᴄᴀʟɪᴅᴀᴅ:* ${xn.result.quality}
`.trim(), m, false, { asDocument: chat.useDocument })
 m.react(done)
 } catch (e) {
m.reply(`❌️ Error : intenta con otro link`)
}
  break

default:
} 
}
handler.help = ['xnxx 🔎', 'xnxxdl <link>'] 
handler.tags = ['nsfw', 'prem']
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx'] 
handler.diamond = 2
handler.premium = false
handler.register = true

export default handler
