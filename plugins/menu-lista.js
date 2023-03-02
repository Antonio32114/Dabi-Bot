import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = '.media/menu2.jpg'
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, diamond, registered, self, level, role } = global.db.data.users[m.sender]
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let name = await conn.getName(m.sender)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
}) 
 
const sections = [
{
title: `𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗠𝗘𝗡𝗨𝗦`,
rows: [
     {title: "👑 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 👑", description: '𝗖𝗢𝗡𝗧𝗔𝗖𝗧𝗢 𝗗𝗘𝗟 𝗖𝗥𝗘𝗔𝗗𝗢𝗥', rowId: `${usedPrefix}creador`},
     {title}: " 💎 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝘼 💎 ", description: '𝙋𝘼𝙍𝘼 𝙑𝙀𝙍 𝙀𝙇 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 ', rowId: `${usedPrefix}menucompleto`},
     ]}, ] 
const listMessage = {
text: `*ミ💖 𝗛𝗢𝗟𝗔 _${name}_ 💖彡*
┏  「     •🌐•     」 ┓
┃📡 ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀʟ ᴍᴇɴᴜ ʟɪsᴛᴀ
┃◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┃🎁 ɪɴғᴏ  ᴅᴇʟ ʙᴏᴛ 🎁
┃◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┃➲ ⏱️ *ʜᴏʀᴀ:* ${time}    
┃➲ ⏰ *ᴀᴄᴛɪᴠɪᴅᴀᴅ:* ${uptime}
┃➲ 𓃠 *ᴠᴇʀsɪᴏɴ ᴅᴇʟ ʙᴏᴛ:* ${vs}
┃➲ 👥 *ᴜsᴜᴀʀɪᴏ(s):* ${Object.keys(global.db.data.users).length} 
┃➲ ♨️ *ᴍᴏᴅᴏ:* ${self ? '*𝚙𝚛𝚒𝚟𝚊𝚍𝚘*' : '*𝚙𝚞𝚋𝚕𝚒𝚌𝚘*'}
┃◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┃💞 ɪɴғᴏ ᴅᴇʟ ᴜsᴜᴀʀɪᴏ 💞
┃◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┃➲ 👑 ᴘʀᴇᴍɪᴜᴍ: ${user.premiumTime > 0 ? '✅' : '❌'}
┃➲ ❇️ ʀᴇɢɪsᴛʀᴀᴅᴏ: ${registered ? '✅': '❎'}
┃➲ 🎖️ ɴɪᴠᴇʟ: ${level}
┃➲ 💎 ᴅɪᴀᴍᴀɴᴛᴇs: ${diamond}
┃➲ 🧰 ᴇxᴘᴇʀɪᴇɴᴄɪᴀ: ${exp}
┗─━─━「 🌎 」━─━─┛
*🄳🄰🄱🄸-🄱🄾🅃 ✨*`, pp,
title: null,
buttonText: "⍟𝙃𝘼𝙂𝘼 𝘾𝙇𝙄𝘾𝙆 𝘼𝙌𝙐𝙄⍟", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.register = true
export default handler


function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = `𝙱𝚄𝙴𝙽𝙾𝚂 𝙳𝙸𝙰𝚂 | 𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶`
  if (time >= 4) {
    res = `𝙱𝚄𝙴𝙽𝙾𝚂 𝙳𝙸𝙰𝚂 | 𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶`
  }
  if (time >= 11) {
    res = `𝙱𝚄𝙴𝙽𝙰𝚂 𝚃𝙰𝚁𝙳𝙴𝚂 | 𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶`
  }
  if (time >= 15) {
    res = `𝙱𝚄𝙴𝙽𝙰𝚂 𝚃𝙰𝚁𝙳𝙴𝚂 | 𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶`
  }
  if (time >= 17) {
    res = `𝙱𝚄𝙴𝙽𝙰𝚂 𝙽𝙾𝙲𝙷𝙴𝚂 | 𝙶𝙾𝙾𝙳 𝙽𝙸𝙶𝚃𝙷`
  }
  return res
}
