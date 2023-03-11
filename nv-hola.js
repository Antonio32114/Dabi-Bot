let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Hola.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, { audio: { url: vn }, seconds: '1934.4', ptt: true, mimetype: 'audio/mpeg', fileName: `Hola.mp3` }, { quoted: m })}
handler.command = /^(hola|ola|Hola🤖|ola🤖)$/i
export default handler
