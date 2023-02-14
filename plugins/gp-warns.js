
let handler = async (m, { conn, args, groupMetadata}) => {
       let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
       if (!(who in global.db.data.users)) throw `✳️ 𝙴𝚕 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚗𝚘 𝚜𝚎 𝚎𝚗𝚌𝚞𝚎𝚗𝚝𝚛𝚊 𝚎𝚗 𝚖𝚒 𝚋𝚊𝚜𝚎 𝚍𝚎 𝚍𝚊𝚝𝚘𝚜`
       let warn = global.db.data.users[who].warn
       let name = conn.getName(who)
      m.reply(`
╔═════ೋೋ═════╗
╠  *𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰*
╠ ◤━━━━━ ☆. ∆ .☆ ━━━━━◥
╠ 💎 ️*𝙽𝚘𝚖𝚋𝚛𝚎 :* ${name} 
╠ 💎 ️*𝚆𝚊𝚛𝚗𝚜 :* ${warn}
╚═════ೋೋ ═════╝`)
}

handler.help = ['warns']
handler.tags = ['group']
handler.command = ['warns'] 
handler.group = true

export default handler
