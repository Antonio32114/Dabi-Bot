let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  
  //----------HARGA
  let hdog = 2
  let hcat = 2
  let hhorse = 4
  let hfox = 6
  let hpetfood = 950

let caption = `
🐈 • *mascota: GATO | CAT:* 
➞ ${hcat} de ᴛᴏᴋᴇɴ🔖

🐕 • *PERRO | ᴅᴏɢ:*
➞ ${hdog} de ᴛᴏᴋᴇɴ🔖

🐎 • *CABALLO | ʜᴏʀsᴇ:* 
➞ ${hhorse} de ᴛᴏᴋᴇɴ🔖

🦊 • *ZORRO | ғᴏx:* 
➞ ${hfox} de ᴛᴏᴋᴇɴ🔖

🍖 • *alimentos para mascotas:*
➞ ${hpetfood} ᴍᴏɴᴇʏ 💹

- - - - - - - - - - - - - - - - - - - - -

ABILITY
➞ 🐈 • Gato | ᴄᴀᴛ :
- aumentar la salud  5% / ʟᴇᴠᴇʟ cuando se usa *.ʜᴇᴀʟ*

➞ 🐕 • perro | ᴅᴏɢ :
- muy pronto...


➞ 🐎 • caballo | ʜᴏʀsᴇ :
- muy pronto ...

➞ 🦊 • zorro | fᴏx :
- muy pronto ...
`
const sections = [
   {
	title: "- TIENDA DE MASCOTA -",
	rows: [
	    {title: "🐈 • Gata", rowId: ".petshop cat"},
	    {title: "🐕 • perro", rowId: ".petshop dog"},
	    {title: "🐎 • ʜᴏʀsᴇ", rowId: ".petshop horse"},
	    {title: "🦊 • ғᴏx", rowId: ".petshop fox"},
	    {title: "🍖 • ᴘᴇᴛ ғᴏᴏᴅ", rowId: ".petshop petfood"},
	]
    },
]

const listMessage = {
  text: `PET SHOP`,
  footer: caption,
  title: ' ',
  buttonText: "ʙ ᴜ ʏ",
  sections
}

  try {
    if (/petshop/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'cat':
          if (user.cat > 0) return m.reply('ʏᴏᴜ ᴀʟʀᴇᴀᴅʏ ʜᴀᴠᴇ ɪᴛ!')
            if(user.pet < hcat) return m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ᴛᴏᴋᴇɴ ɴᴏᴛ ᴇɴᴏᴜɢʜ !`)
            global.db.data.users[m.sender].pet -= hcat
            global.db.data.users[m.sender].cat += 1
            conn.sendButton(m.chat, ` NEW PET*`, `🎉 ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴs, ʏᴏᴜ ʜᴀᴠᴇ ᴘᴜʀᴄʜᴀsᴇᴅ ᴘᴇᴛ *ᴄᴀᴛ*`, null, [['ɪɴᴠᴇɴᴛᴏʀʏ', '.inv'],['ғᴇᴇᴅ', `.feed ${type}`]],m)
            break
          case 'dog':
          if (user.dog > 0) return m.reply('ʏᴏᴜ ᴀʟʀᴇᴀᴅʏ ʜᴀᴠᴇ ɪᴛ!')
            if(user.pet < hdog) return m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ᴛᴏᴋᴇɴ ɴᴏᴛ ᴇɴᴏᴜɢʜ !`)
            global.db.data.users[m.sender].pet -= hdog
            global.db.data.users[m.sender].dog += 1
            conn.sendButton(m.chat, ` NEW PET`, `🎉 ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴs, ʏᴏᴜ ʜᴀᴠᴇ ᴘᴜʀᴄʜᴀsᴇᴅ ᴘᴇᴛ *ᴅᴏɢ*`, null, [['ɪɴᴠᴇɴᴛᴏʀʏ', '.inv'],['ғᴇᴇᴅ', `.feed ${type}`]],m)
            break
          case 'fox':
          if (user.fox > 0) return m.reply('ʏᴏᴜ ᴀʟʀᴇᴀᴅʏ ʜᴀᴠᴇ ɪᴛ!')
            if(user.pet < hfox) return m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ᴛᴏᴋᴇɴ ɴᴏᴛ ᴇɴᴏᴜɢʜ !`)
            global.db.data.users[m.sender].pet -= hfox
            global.db.data.users[m.sender].fox += 1
            conn.sendButton(m.chat, ` NEW PET*`, `🎉 ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴs, ʏᴏᴜ ʜᴀᴠᴇ ᴘᴜʀᴄʜᴀsᴇᴅ ᴘᴇᴛ *ғᴏx*`, null, [['ɪɴᴠᴇɴᴛᴏʀʏ', '.inv'],['ғᴇᴇᴅ', `.feed ${type}`]],m)
            break
          case 'horse':
          if (user.horse > 0) return m.reply('ʏᴏᴜ ᴀʟʀᴇᴀᴅʏ ʜᴀᴠᴇ ɪᴛ!')
            if(user.pet < hhorse) return m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ᴛᴏᴋᴇɴ ɴᴏᴛ ᴇɴᴏᴜɢʜ !`)
            global.db.data.users[m.sender].pet -= hhorse
            global.db.data.users[m.sender].horse += 1
            conn.sendButton(m.chat, `*NEW PET*`, `🎉 ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴs, ʏᴏᴜ ʜᴀᴠᴇ ᴘᴜʀᴄʜᴀsᴇᴅ ᴘᴇᴛ *ʜᴏʀsᴇ*`, null, [['ɪɴᴠᴇɴᴛᴏʀʏ', '.inv'],['ғᴇᴇᴅ', `.feed ${type}`]],m)
            break
          case 'petfood':
          if (global.db.data.users[m.sender].money >= hpetfood * count) {
            global.db.data.users[m.sender].petFood += count * 1
            global.db.data.users[m.sender].money -= hpetfood * count
            conn.sendButton(m.chat, `*BUYING*`, `sᴜᴄᴄᴇssғᴜʟʟ ʙᴏᴜɢʜᴛ *${count}* ᴘᴇᴛ ғᴏᴏᴅ, ғᴏʀ *${hpetfood * count}* ᴍᴏɴᴇʏ !`,null, [['ɪɴᴠᴇɴᴛᴏʀʏ', '.inv']], m)
          } else conn.reply(m.chat, `ʏᴏᴜʀ ᴍᴏɴᴇʏ ɴᴏᴛ ᴇɴᴏᴜɢʜ !`, m) 
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, {quoted: m})
        }
    } else if (/Ughh/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['petshop']
handler.tags = ['rpg']
handler.command = /^(petshop)/i

export default handler
