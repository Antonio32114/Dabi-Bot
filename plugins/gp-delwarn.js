
let handler = async (m, { conn, args, groupMetadata}) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ ᴇᴛɪǫᴜᴇᴛᴀ ᴏ ᴍᴇɴᴄɪᴏɴᴀ ᴀ ᴀʟɢᴜɪᴇɴ`
        if (!(who in global.db.data.users)) throw `✳️  ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ sᴇ ᴇɴᴄᴜᴇɴᴛʀᴀ ᴇɴ ᴍɪ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs`
       let warn = global.db.data.users[who].warn
       if (warn > 0) {
         global.db.data.users[who].warn -= 1
         m.reply(`⚠️ *ᴅᴇʟᴡᴀʀɴ*
sᴇ ʟᴇ ǫᴜɪᴛᴏ ᴜɴᴀ ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ ⚠️ 
🔸️ᴡᴀʀɴ: *-1*
🔸️ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀs ᴛᴏᴛᴀʟ: *${warn - 1}*`)
         m.reply(`🔸️ ᴜɴ ᴀᴅᴍɪɴ ʀᴇᴅᴜᴊᴏ sᴜ ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ, ᴀʜᴏʀᴀ ᴛɪᴇɴᴇs *${warn - 1}*`, who)
         } else if (warn == 0) {
            m.reply('🔸️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ ᴛɪᴇɴᴇ ɴɪɴɢᴜɴᴀ ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ')
        }

}
handler.help = ['delwarn @user']
handler.tags = ['group']
handler.command = ['delwarn', 'unwarn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
