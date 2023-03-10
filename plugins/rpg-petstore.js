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
ð â¢ *mascota: GATO | CAT:* 
â ${hcat} de á´á´á´á´É´ð

ð â¢ *PERRO | á´á´É¢:*
â ${hdog} de á´á´á´á´É´ð

ð â¢ *CABALLO | Êá´Êsá´:* 
â ${hhorse} de á´á´á´á´É´ð

ð¦ â¢ *ZORRO | Òá´x:* 
â ${hfox} de á´á´á´á´É´ð

ð â¢ *alimentos para mascotas:*
â ${hpetfood} á´á´É´á´Ê ð¹

- - - - - - - - - - - - - - - - - - - - -

ABILITY
â ð â¢ Gato | á´á´á´ :
- aumentar la salud  5% / Êá´á´ á´Ê cuando se usa *.Êá´á´Ê*

â ð â¢ perro | á´á´É¢ :
- muy pronto...


â ð â¢ caballo | Êá´Êsá´ :
- muy pronto ...

â ð¦ â¢ zorro | fá´x :
- muy pronto ...
`
const sections = [
   {
	title: "- TIENDA DE MASCOTA -",
	rows: [
	    {title: "ð â¢ Gata", rowId: ".petshop cat"},
	    {title: "ð â¢ perro", rowId: ".petshop dog"},
	    {title: "ð â¢ Êá´Êsá´", rowId: ".petshop horse"},
	    {title: "ð¦ â¢ Òá´x", rowId: ".petshop fox"},
	    {title: "ð â¢ á´á´á´ Òá´á´á´", rowId: ".petshop petfood"},
	]
    },
]

const listMessage = {
  text: `PET SHOP`,
  footer: caption,
  title: ' ',
  buttonText: "Ê á´ Ê",
  sections
}

  try {
    if (/petshop/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'cat':
          if (user.cat > 0) return m.reply('Êá´á´ á´ÊÊá´á´á´Ê Êá´á´ á´ Éªá´!')
            if(user.pet < hcat) return m.reply(`Êá´á´Ê á´á´á´ á´á´á´á´É´ É´á´á´ á´É´á´á´É¢Ê !`)
            global.db.data.users[m.sender].pet -= hcat
            global.db.data.users[m.sender].cat += 1
            conn.sendButton(m.chat, ` NEW PET*`, `ð á´á´É´É¢Êá´á´á´Êá´á´Éªá´É´s, Êá´á´ Êá´á´ á´ á´á´Êá´Êá´sá´á´ á´á´á´ *á´á´á´*`, null, [['ÉªÉ´á´ á´É´á´á´ÊÊ', '.inv'],['Òá´á´á´', `.feed ${type}`]],m)
            break
          case 'dog':
          if (user.dog > 0) return m.reply('Êá´á´ á´ÊÊá´á´á´Ê Êá´á´ á´ Éªá´!')
            if(user.pet < hdog) return m.reply(`Êá´á´Ê á´á´á´ á´á´á´á´É´ É´á´á´ á´É´á´á´É¢Ê !`)
            global.db.data.users[m.sender].pet -= hdog
            global.db.data.users[m.sender].dog += 1
            conn.sendButton(m.chat, ` NEW PET`, `ð á´á´É´É¢Êá´á´á´Êá´á´Éªá´É´s, Êá´á´ Êá´á´ á´ á´á´Êá´Êá´sá´á´ á´á´á´ *á´á´É¢*`, null, [['ÉªÉ´á´ á´É´á´á´ÊÊ', '.inv'],['Òá´á´á´', `.feed ${type}`]],m)
            break
          case 'fox':
          if (user.fox > 0) return m.reply('Êá´á´ á´ÊÊá´á´á´Ê Êá´á´ á´ Éªá´!')
            if(user.pet < hfox) return m.reply(`Êá´á´Ê á´á´á´ á´á´á´á´É´ É´á´á´ á´É´á´á´É¢Ê !`)
            global.db.data.users[m.sender].pet -= hfox
            global.db.data.users[m.sender].fox += 1
            conn.sendButton(m.chat, ` NEW PET*`, `ð á´á´É´É¢Êá´á´á´Êá´á´Éªá´É´s, Êá´á´ Êá´á´ á´ á´á´Êá´Êá´sá´á´ á´á´á´ *Òá´x*`, null, [['ÉªÉ´á´ á´É´á´á´ÊÊ', '.inv'],['Òá´á´á´', `.feed ${type}`]],m)
            break
          case 'horse':
          if (user.horse > 0) return m.reply('Êá´á´ á´ÊÊá´á´á´Ê Êá´á´ á´ Éªá´!')
            if(user.pet < hhorse) return m.reply(`Êá´á´Ê á´á´á´ á´á´á´á´É´ É´á´á´ á´É´á´á´É¢Ê !`)
            global.db.data.users[m.sender].pet -= hhorse
            global.db.data.users[m.sender].horse += 1
            conn.sendButton(m.chat, `*NEW PET*`, `ð á´á´É´É¢Êá´á´á´Êá´á´Éªá´É´s, Êá´á´ Êá´á´ á´ á´á´Êá´Êá´sá´á´ á´á´á´ *Êá´Êsá´*`, null, [['ÉªÉ´á´ á´É´á´á´ÊÊ', '.inv'],['Òá´á´á´', `.feed ${type}`]],m)
            break
          case 'petfood':
          if (global.db.data.users[m.sender].money >= hpetfood * count) {
            global.db.data.users[m.sender].petFood += count * 1
            global.db.data.users[m.sender].money -= hpetfood * count
            conn.sendButton(m.chat, `*BUYING*`, `sá´á´á´á´ssÒá´ÊÊ Êá´á´É¢Êá´ *${count}* á´á´á´ Òá´á´á´, Òá´Ê *${hpetfood * count}* á´á´É´á´Ê !`,null, [['ÉªÉ´á´ á´É´á´á´ÊÊ', '.inv']], m)
          } else conn.reply(m.chat, `Êá´á´Ê á´á´É´á´Ê É´á´á´ á´É´á´á´É¢Ê !`, m) 
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
          return conn.sendButton( m.chat, caption, wm, null, [`â®â° Menu`, `.menu`], m)
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
