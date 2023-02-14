import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*ɪɴɢʀᴇsᴇ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ᴍᴀs ᴇɴ ᴇɴʟᴀᴄᴇ / ʟɪɴᴋ ᴅᴇ ᴜɴ ᴠɪᴅᴇᴏ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ*'
await m.reply(`*_⏳Aguarde un momento⏳_*`)
m.react(rwait) 
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
let cap = `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ *𝚃𝙸𝚃𝚄𝙻𝙾:* ${ttl}\n┆🔸️ *𝙿𝙴𝚂𝙾:* ${size}\n╰─────────────────`.trim()
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, { quoted: m })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)   
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let cap2 = `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ *𝚃𝙸𝚃𝚄𝙻𝙾:* ${n}\n┆🔸️ *𝙿𝙴𝚂𝙾:* ${n3}\n╰─────────────────`.trim()
await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'audio/mpeg', fileName: `${n}.mp3`}, {quoted: m})
} catch {
await conn.reply(m.chat, '*[❗]ᴇʀʀᴏʀ, ɴᴏ sᴇ ᴘᴜᴅᴏ ᴅᴇsᴄᴀʀɢᴀs ᴇʟ ᴀᴜᴅɪᴏ ᴠᴜᴇʟᴠᴇ ᴀ ɪɴᴛᴇɴᴛᴀʀ*', m)}
}}
handler.tags = ['downloader']
handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta.2$/i
export default handler
