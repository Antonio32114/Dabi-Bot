let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/toma.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, { audio: { url: vn }, seconds: '1934.4', ptt: true, mimetype: 'audio/mpeg', fileName: `deja de llorar.mp3` }, { quoted: m })}
handler.command = /^(:c|c)$/i
handler.fail = null
handler.exp = 100
export default handler


/*import util from 'util'
import path from 'path'
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/toma.mp3'
conn.sendFile(m.chat, vn, 'toma.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
handler.command = /^(:c|c)$/i
handler.fail = null
handler.exp = 100
export default handler*/
