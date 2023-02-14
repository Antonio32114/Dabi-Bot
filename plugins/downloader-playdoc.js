import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `Que esta buscado? ingrese el titulo de la canción\n\n*—◉ Ejemplo:*\n*${usedPrefix + command} bad bunny*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3doc ${urll}`, buttonText: { displayText: '🎵 𝐀𝐔𝐃𝐈𝐎𝐃𝐎𝐂 🎵' }, type: 1 },
{ buttonId: `#ytmp4doc ${urll}`, buttonText: { displayText: '🎥 𝐕𝐈𝐃𝐄𝐎𝐃𝐎𝐂 🎥' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: '📋 𝐌𝐀𝐒 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 📋' }, type: 1 }, ] 
m.react('🎧')
let texto1 = `╭───≪~*╌◌ᰱ•••⃙⌈🔊 ᴘʟᴀʏ ᴅᴏᴄᴜᴍᴇɴᴛ 🔊⌋•••ᰱ◌╌*~*
│║ ️📌 *ᴛɪᴛᴜʟᴏ:* ${title}
│║ 📆 *ᴘᴜʙʟɪᴄᴀᴅᴏ:* ${publishedTime}
│║ ️⌚ *ᴅᴜʀᴀᴄɪᴏɴ:* ${durationH}
│║ ️👀 *ᴠɪsᴛᴀs:* ${viewH}
│║ 📇 *ᴅᴇsᴄʀɪᴘᴄɪᴏɴ:* ${description}
│║ 🔗 *ʟɪɴᴋ:* ${urll}
│║
│║        *████████████┃%100*
╰─•┈┈┈•••✦𝒟ℳ✦•••┈┈┈•─╯⟤`.trim()
let buttonMessage = { "document": { url: "https://wa.me/5219992095479" }, "fileName": '❏ 🌿 ʀᴇᴘʀᴏᴅᴜᴄᴛᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/BrunoSobrino/TheMystic-Bot-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {  
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `╭───≪~*╌◌ᰱ•••⃙❨͟͞P̸͟͞L̸͟A̸͟͞Y̸͟͞❩⃘•••ᰱ◌╌*~*\n│║ 🔸️ 📌 *ᴛɪᴛᴜʟᴏ:* ${title}\n│║ 🔸📆 *ᴘᴜʙʟɪᴄᴀᴅᴏ:* ${published}\n│║ 🔸👀 *ᴠɪsᴛᴀs:* ${views}\n│║ 🔸🔗 *ʟɪɴᴋ:* ${url}\n│║\n│║        *████████████┃%100*\n╰─•┈┈┈•••✦𝒟ℳ✦•••┈┈┈•─╯⟤`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '📋 𝐌𝐀𝐒 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 📋'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*ᴇɴᴠɪᴀɴᴅᴏ ᴀᴜᴅɪᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*'}}}
handler.help = ['playdoc', 'play3'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play3|playdoc?$/i
export default handler
