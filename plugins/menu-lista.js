import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = '.media/menu2.jpg'
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, diamond, registered, self, level, role } = global.db.data.users[m.sender]
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let name = await conn.getName(m.sender)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
}) 
 
const sections = [
{
title: `πππ¦π§π ππ π ππ‘π¨π¦`,
rows: [
     {title: "βοΈ πππππΎππΏπΌπΏ  ", description: 'ππΌππΌ πππ ππΌ πππππΎππΏπΌπΏ πΏππ π½ππ', rowId: `${usedPrefix}ping`},
     {title: "π ππ₯ππππ’π₯ ", description: 'ππ’π‘π§πππ§π’ πππ ππ₯ππππ’π₯', rowId: `${usedPrefix}creador`},
     {title: "π ππππ πΎπππππππΌ ", description: 'ππΌππΌ πππ ππ ππππ πΎπππππππ ', rowId: `${usedPrefix}menucompleto`},
     {title: "π€ ππππ½ππ", description: 'ππΌππΌ πππ πππ½ π½ππ', rowId: `${usedPrefix}serbot`},
     ]}, ] 
const listMessage = {
text: `*γπ ππ’ππ _${name}_ πε½‘*
β  γ     β’πβ’     γ β
βπ‘ ΚΙͺα΄Ι΄α΄ α΄Ι΄Ιͺα΄α΄ α΄Κ α΄α΄Ι΄α΄ ΚΙͺsα΄α΄
ββ€βββββ β. β .β ββββββ₯
βπ ΙͺΙ΄?α΄  α΄α΄Κ Κα΄α΄ π
ββ€βββββ β. β .β ββββββ₯
ββ² β±οΈ *Κα΄Κα΄:* ${time}    
ββ² β° *α΄α΄α΄Ιͺα΄ Ιͺα΄α΄α΄:* ${uptime}
ββ² π  *α΄ α΄ΚsΙͺα΄Ι΄ α΄α΄Κ Κα΄α΄:* ${vs}
ββ² π₯ *α΄sα΄α΄ΚΙͺα΄(s):* ${Object.keys(global.db.data.users).length} 
ββ² β¨οΈ *α΄α΄α΄α΄:* ${self ? '*πππππππ*' : '*πππππππ*'}
ββ€βββββ β. β .β ββββββ₯
βπ ΙͺΙ΄?α΄ α΄α΄Κ α΄sα΄α΄ΚΙͺα΄ π
ββ€βββββ β. β .β ββββββ₯
ββ² π α΄Κα΄α΄Ιͺα΄α΄: ${user.premiumTime > 0 ? 'β' : 'β'}
ββ² βοΈ Κα΄Ι’Ιͺsα΄Κα΄α΄α΄: ${registered ? 'β': 'β'}
ββ² ποΈ Ι΄Ιͺα΄ α΄Κ: ${level}
ββ² π α΄Ιͺα΄α΄α΄Ι΄α΄α΄s: ${diamond}
ββ² π§° α΄xα΄α΄ΚΙͺα΄Ι΄α΄Ιͺα΄: ${exp}
βββββγ π γβββββ
*π³π°π±πΈ-π±πΎπ β¨*`, pp,
title: null,
buttonText: "βππΌππΌ πΎπππΎπ πΌπππβ", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menΓΊ|memu|memΓΊ|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.register = true
export default handler


function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = `π±ππ΄π½πΎπ π³πΈπ°π | πΆπΎπΎπ³ πΌπΎππ½πΈπ½πΆ`
  if (time >= 4) {
    res = `π±ππ΄π½πΎπ π³πΈπ°π | πΆπΎπΎπ³ πΌπΎππ½πΈπ½πΆ`
  }
  if (time >= 11) {
    res = `π±ππ΄π½π°π ππ°ππ³π΄π | πΆπΎπΎπ³ π΄ππ΄π½πΈπ½πΆ`
  }
  if (time >= 15) {
    res = `π±ππ΄π½π°π ππ°ππ³π΄π | πΆπΎπΎπ³ π΄ππ΄π½πΈπ½πΆ`
  }
  if (time >= 17) {
    res = `π±ππ΄π½π°π π½πΎπ²π·π΄π | πΆπΎπΎπ³ π½πΈπΆππ·`
  }
  return res
}
