//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(` 
╭━─━─━─≪☣️≫─━─━─━╮
┃ 😴 𝙰𝙺𝙵 
┃ 𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 ${conn.getName(m.sender)}  
┃ 𝙴𝚂𝚃𝙰 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾. 
┃ ≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋
┃ 💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤
┃ ☣️ 𝙼𝙾𝚃𝙸𝚅𝙾𝚂 : ${text ? text : ''}
╰━─━─━─≪☣️≫─━─━─━╯ `)
}
handler.help = ['afk <razon>']
handler.tags = ['fun']
handler.command = ['afk']
handler.group = true

export default handler
