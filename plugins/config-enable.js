//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	
const sections = [
   {
	title: `Lista de Opciones`,
	rows: [
	{title: "WELCOME", rowId: `${usedPrefix + command} welcome`},
	{title: "PÚBLICO", rowId: `${usedPrefix + command} public`},
	{title: "COMANDO +18", rowId: `${usedPrefix + command} nsfw`},
	{title: "ANTIFAKES", rowId: `${usedPrefix + command} onlylatinos`},
	{title: "ANTILINK", rowId: `${usedPrefix + command} antilink`},
    {title: "ANTIDELETE", rowId: `${usedPrefix + command} antidelete`},
	{title: "AUTOLEVELUP", rowId: `${usedPrefix + command} autolevelup`},
	{title: "CHATBOT", rowId: `${usedPrefix + command} simi`},
	{title: "DECTEC", rowId: `${usedPrefix + command} detect`},
	{title: "DOCUMENT", rowId: `${usedPrefix + command} document`},
	{title: "RESTRICT", rowId: `${usedPrefix + command} restrict`},
	{title: "SOLO PRIVADO", rowId: `${usedPrefix + command} onlydm`},
	{title: "PROHIBIDO MALA PALABRA", rowId: `${usedPrefix + command} antitoxic`},
	{title: "ANTITRABA", rowId: `${usedPrefix + command} antitraba`},
	{title: "SOLO GRUPOS", rowId: `${usedPrefix + command} onlygp`}
	]
    },
]

const listMessage = {
  text: '║aqui tiene las lista para activa y desactivar\n║◤━━━━━ ☆. ∆ .☆ ━━━━━◥\n║❍ _#enable *welcome*_\n║❍ _#disable *welcome*_\n║❍ _#enable *public*_\n║❍ _#disable *public*_\n║❍ _#enable *modohorny*_\n║❍ _#disable *modohorny*_\n║❍ _#enable *antilink*_\n║❍ _#disable *antilink*_\n║❍ _#enable *antilink2*_\n║❍ _#disable *antilink2*_\n║❍ _#enable *detect*_\n║❍ _#disable *detect*_\n║❍ _#enable *restrict*_\n║❍ _#disable *restrict*_\n║❍ _#enable *pconly*_\n║❍ _#disable *pconly*_\n║❍ _#enable *gconly*_\n║❍ _#disable *gconly*_\n║❍ _#enable *autoread*_\n║❍ _#disable *autoread*\n║❍ _#enable *simi*_\n║❍ _#disable *simi*_\n║❍ _#enable *audios*_\n║❍ _#disable *audios*_\n║❍ _#enable *antiviewonce*_\n║❍ _#disable *antiviewonce*_\n║❍ _#enable *autosticker*_\n║❍ _#}disable *autosticker*_\n║❍ _#enable *anticall*_\n║❍ _#disable *anticall*_\n║❍ _#enable *antiprivado*_\n║❍ _#disable *antiprivado*_\n║❍ _#enable *antitoxic*_\n║❍ _#disable *antitoxic*_\n║❍ _#enable *antitraba*_\n║❍ _$#disable *antitraba*_\n║❍ _#enable *antiarabes*_\n║❍ _#disable *antiarabes*_\n║❍ _#enable *modoadmin*_\n║❍ _#disable *modoadmin*_\n║◤━━━━━ ☆. ∆ .☆ ━━━━━◥\n╚════ ≪ •❈• ≫ ════╝',
  footer: fgig,
  title: `╔═════ೋೋ═════╗\n║◤━━━━━ ☆. ∆ .☆ ━━━━━◥`,
  buttonText: "SELECCIONE AQUI",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
      
      case 'detect':
      case 'detector':
        if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
          throw false
        }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
     break
    
    case 'antidelete':
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break

    case 'document':
    case 'documento':
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
    chat.useDocument = isEnable
    break
    case 'public':
    case 'publico':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
    case 'antilinkwa':
    case 'antilinkwha':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      
      case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antitoxic = isEnable
      break
      
      case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antitraba = isEnable
      break
      
      case 'sololatinos':
      case 'sololatino':
      case 'onlylatinos':
      case 'onlylat':
      case 'antiarabe':
      case 'antifake':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.onlyLatinos = isEnable
      break
      
      case 'nsfw':
      case '+18':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break

    case 'autolevelup':
    isUser = true
     user.autolevelup = isEnable
     break
     
     case 'chatbot':
     case 'simi':
     case 'autosimsimi':
      isUser = true
      user.simi = isEnable
     break
     
    case 'restrict':
    case 'restringir':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    
    case 'onlypv':
    case 'onlydm':
    case 'onlymd':
    case 'solopv':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
      
    case 'gponly':
    case 'onlygp':
    case 'grouponly':
    case 'sologp':
    case 'sologrupo':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
      
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage, { quoted: m })
      throw false
  }
  /*conn.sendButton(m.chat, `
≡ *OPCIONES*
┌───────────
▢ 🗂️ *Tipo:* ${type} 
▢ ⚙️ *Estado:* ${isEnable ? 'Activo ✅' : 'Desactivado 🔴'}
▢ 🏮 *Para:* ${isAll ? 'Este bot' : isUser ? '' : 'Este chat'}
└───────────
`,fgig, null, [[`${isEnable ? '🔴 Desactivar' : '✅ Activar'}`, `${isEnable ? `${usedPrefix}off ${type}` : `${usedPrefix}on ${type}`}`], ['⦙☰ Menu', `${usedPrefix}help`]],m)
*/

m.reply(`
el comando *${type}* Se *${isEnable ? 'Activó' : 'Desactivó'}* ${isAll ? 'para este bot' : isUser ? '' : 'para este chat'}
con éxitos ✅`.trim()) 

}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['nable']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

handler.register = true

export default handler
