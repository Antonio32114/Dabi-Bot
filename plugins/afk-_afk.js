//import db from '../lib/database.js'

export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
╭━─━─━─≪☣️≫─━─━─━╮
┃𝙳𝙴𝙹𝙰𝚂𝚃𝙴 𝙳𝙴 𝙴𝚂𝚃𝙰 𝙰𝙵𝙺
┃${user.afkReason ? '\n┃🔸️ *𝚁𝙰𝚉𝙾𝙽 :* ' + user.afkReason : ''}
┃🔸 *𝙴𝚂𝚃𝚄𝚅𝙾 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴* ${(new Date - user.afk).toTimeString()}
╰━─━─━─≪☣️≫─━─━─━╯`.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`
💤 𝙽𝙾 𝙻𝙾𝚂 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 💤
𝙴𝚜𝚝𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚚𝚞𝚎 𝚖𝚎𝚗𝚌𝚒𝚘𝚗𝚊𝚜 𝚎𝚜𝚝𝚊 𝙰𝙵𝙺  

${reason ? '🔸️ *𝚁𝙰𝚉𝙾𝙽* : ' + reason : '🔸️ *𝚁𝙰𝚉𝙾𝙽* : 𝚂𝚒𝚗 𝚛𝚊𝚣𝚘𝚗'}
🔸️ *𝙴𝚂𝚃𝚄𝚅𝙾 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴 :* ${(new Date - afkTime).toTimeString()}
  `.trim())
    }
    return true
}
