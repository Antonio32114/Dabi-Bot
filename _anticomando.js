const toxicRegex = /menu|owner|infobot|help|s|play|estado|grupos|juegos|pvp|ppt/i

export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup)
        return !1
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isToxic = toxicRegex.exec(m.text)
    
    if (isToxic && chat.antitoxic && !isOwner && !isAdmin) {
       user.warn += 1
       if (!(user.warn >= 2)) await m.reply(`${user.warn == 1 ? `Hola *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, lo siento no se puede usar comando del bot *${user.warn}/2* advertencia`, false, { mentions: [m.sender] })
    }
    
    if (user.warn >= 2) {
       user.warn = 0
       await m.reply(`hey *@${m.sender.split`@`[0]}*, eres o Prácticas algun deporte te dije no comando del bot chau boludito`, false, { mentions: [m.sender] })
       user.banned = true
       await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       //await this.updateBlockStatus(m.sender, 'block')
    }
    return !1
}
