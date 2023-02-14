
import { promisify } from 'util'
import _gis from 'g-i-s'
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `✳️ ɪɴɢʀᴇsᴇ ʟᴀ ɪᴍᴀɢᴇɴ ǫᴜᴇ ǫᴜɪᴇʀᴇ ʙᴜsᴄᴀʀ\n\n📌 ᴇᴊᴇᴍᴘʟᴏ : *${usedPrefix + command}* Billie Eilish`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '❎ ɴᴏ sᴇ ᴇɴᴄᴏɴᴛʀᴏ ʟᴀ ɪᴍᴀɢᴇɴ ɪɴᴛᴇɴᴛᴇ ᴄᴏɴ ᴏᴛʀᴏ'
  conn.sendFile(m.chat, url, 'img.png', `
╭━─━─━─≪📸≫─━─━─━╮
┆✅ ʀᴇsᴜʟᴛᴀᴅᴏs ᴅᴇ : *${text}*
┆——————«•»——————
┆⏣ *ᴀɴᴄʜᴏ*: ${width}
┆⏣ *ᴀʟᴛᴜʀᴀ*: ${height}
╰━─━─━─≪📸≫─━─━─━╯`.trim(), m)
}
handler.help = ['imagen']
handler.tags = ['img']
handler.command = /^(img|image|gimage|imagen)$/i
handler.diamond = true

export default handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

