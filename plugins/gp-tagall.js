let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`╔══✪〘 *𝙸 𝙽 𝚅 𝙾 𝙲 𝙰 𝙽 𝙳 𝙾 - 𝙶 𝚁 𝚄 𝙿 𝙾* 〙✪══\n╠➥ɢʀᴜᴘᴏs : *${groupMetadata.subject}*\n╠➥ ᴍɪᴇᴍʙʀᴏs : *${participants.length}*${text ? `\n╠\n╠➥ Mensaje : ${text}\n` : ''}\n╠\n╠➥ ᴇᴛɪǫᴜᴇᴛᴀs\n` + users.map(v => '╠🔸️ @' + v.replace(/@.+/, '')).join`\n` + '\n╚═〘 *NovaBot-MD* 〙\n\n▌│█║▌║▌║║▌║▌║▌║█', null, {
        mentions: users
    })
}
 
handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler