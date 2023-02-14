let handler = async (m, { conn, text, command, usedPrefix, args }) => {
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
await conn.sendPresenceUpdate('composing', m.chat)
let reseqv = `🥌ᴘɪᴇᴅʀᴀs, 📄ᴘᴀᴘᴇʟ, ᴏ ✂️ᴛɪᴊᴇʀᴀ\nᴘᴜᴇᴅᴇ ᴜsᴀʀ ᴇsᴛᴏs ᴄᴏᴍᴀɴᴅᴏ\n🥌.ppt piedra\n📄 .ppt papel\n✂️.ppt tijera\n\nᴜsᴇ ᴇɴ ᴍɪɴᴜsᴄᴜʟᴀs\n\nEjemplo : *${usedPrefix + command}* papel\n`
    if (!text) throw reseqv
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`🔰 EMPATE! 🤝\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIOS +500 XP`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 2000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +2000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO ! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 𝑬𝒍 𝒃𝒐𝒕: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 𝑬𝒍 𝒃𝒐𝒕: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
}}
handler.help = ['ppt']
handler.tags = ['game']
handler.register = false
handler.command = /^(ppt)$/i
export default handler