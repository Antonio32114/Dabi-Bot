
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ 𝙴𝚝𝚒𝚚𝚞𝚎𝚝𝚊 𝚘 𝚖𝚎𝚗𝚌𝚒𝚘𝚗𝚊 𝚊 𝚊𝚕𝚐𝚞𝚒𝚎𝚗\n\n📌 𝙴𝚓𝚎𝚖𝚙𝚕𝚘 : ${usedPrefix + command} @user`
        if (!(who in global.db.data.users)) throw `✳️ 𝙴𝚕 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚗𝚘 𝚜𝚎 𝚎𝚗𝚌𝚞𝚎𝚗𝚝𝚛𝚊 𝚎𝚗 𝚖𝚒 𝚋𝚊𝚜𝚎 𝚍𝚎 𝚍𝚊𝚝𝚘𝚜`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
╔═════ೋೋ═════╗
╠ ⚠️ *𝚄𝚜𝚞𝚊𝚛𝚒𝚘 𝙰𝚍𝚟𝚎𝚛𝚝𝚒𝚍𝚘* ⚠️
╠ ◤━━━━━ ☆. ∆ .☆ ━━━━━◥
╠ • *𝙰𝚍𝚖𝚒𝚗𝚜:* ${name}
╠ • *𝚞𝚜𝚞𝚊𝚛𝚒𝚘:* @${who.split`@`[0]}
╠ • *𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊:* ${warn + 1}/${war}
╠ • *𝚛𝚊𝚣𝚘𝚗:* ${text}
╚═════ೋೋ ═════╝`, null, { mentions: [who] }) 
            m.reply(`
⚠️ *𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰* ⚠️
𝚁𝚎𝚌𝚒𝚋𝚒𝚜𝚝𝚎 𝚞𝚗𝚊 𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊 𝚍𝚎 𝚞𝚗 𝚊𝚍𝚖𝚒𝚗

• *𝚆𝚊𝚛𝚗𝚜:* ${warn + 1}/${war} 
𝚜𝚒 𝚛𝚎𝚌𝚒𝚋𝚎𝚜 *${war}* 𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊𝚜 𝚜𝚎𝚛𝚊𝚜 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚍𝚘 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚊𝚖𝚎𝚗𝚝𝚎 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔ 𝙴𝚕 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚜𝚞𝚙𝚎𝚛𝚘 𝚕𝚊𝚜 *${war}* 𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊𝚜 𝚙𝚘𝚛 𝚕𝚘 𝚝𝚊𝚗𝚝𝚘 𝚜𝚎𝚛𝚊 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚍𝚘`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`♻️ 𝙵𝚞𝚒𝚜𝚝𝚎 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚍𝚘 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 *${groupMetadata.subject}* 𝚙𝚘𝚛𝚚𝚞𝚎 𝚑𝚊 𝚜𝚒𝚍𝚘 𝚊𝚍𝚟𝚎𝚛𝚝𝚒𝚍𝚘 *${war}* 𝚟𝚎𝚌𝚎𝚜`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['warn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
