//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
    conn.sendButton(m.chat, '🤑 ' + wm, `╭━─━─━─≪🔆≫─━─━─━╮
│☞ FELICIDADES 👏 HAS ALCANZADO UN NUEVO NIVEL
│◤━━━━━ ☆. ∆ .☆ ━━━━━◥
│☞ NIVEL ANTERIOR: ${before}
│◤━━━━━ ☆. ∆ .☆ ━━━━━◥
│☞ NIVEL ACTUAL: ${user.level}
│◤━━━━━ ☆. ∆ .☆ ━━━━━◥
│☞ RANGO : ${user.role}
│◤━━━━━ ☆. ∆ .☆ ━━━━━◥
│☞ FECHA: ${new Date().toLocaleString('id-ID')}
╰━─━─━─≪🔆≫─━─━─━╯ׂ`, null, [['✳️MENU', `/menu`]], m)
}}		