//import db from '../lib/database.js'
let reg = 40
let handler = async (m, { conn, args, usedPrefix, command }) => {
await conn.sendPresenceUpdate('composing', m.chat)
    let fa = `
𝙲𝚞𝚊𝚗𝚝𝚘 𝚚𝚞𝚒𝚎𝚛𝚎𝚜 𝚊𝚙𝚘𝚜𝚝𝚊𝚛? 

📌 𝙴𝚓𝚎𝚖𝚙𝚕𝚘 :
*${usedPrefix + command}* 100`.trim()
    if (!args[0]) throw fa
    if (isNaN(args[0])) throw fa
    let apuesta = parseInt(args[0])
    let users = global.db.data.users[m.sender]
    let time = users.lastslot + 10000
    if (new Date - users.lastslot < 10000) throw `⏳ Espere *${msToTime(time - new Date())}* para volver aposta`
    if (apuesta < 100) throw '✳️ 𝙼𝚒𝚗𝚒𝚖𝚘 𝚍𝚎 𝚕𝚊 𝚊𝚙𝚞𝚎𝚜𝚝𝚊 𝚎𝚜 *100 XP*'
    if (users.exp < apuesta) {
        throw `✳️ 𝙽𝚘 𝚝𝚒𝚎𝚗𝚎𝚜 𝚜𝚞𝚏𝚒𝚌𝚒𝚎𝚗𝚝𝚎 𝚇𝙿`
    }

    let emojis = ["🕊️", "🦀", "🦎"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);
    let x = [],
        y = [],
        z = [];
    for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }
    let end;
    if (a == b && b == c) {
        end = `🎁 GANASTE\n *+${apuesta + apuesta} XP*`
        users.exp += apuesta + apuesta
    } else if (a == b || a == c || b == c) {
        end = `🔮 Casi lo logras sigue intentando :) \nTen *+${reg} XP*`
        users.exp += reg
    } else {
        end = `😔 Perdiste  *-${apuesta} XP*`
        users.exp -= apuesta
    }
    users.lastslot = new Date * 1
    return await m.reply(
        `
       🎰 ┃ *SLOTS* 
     ───────────
       ${x[0]} : ${y[0]} : ${z[0]}
       ${x[1]} : ${y[1]} : ${z[1]}
       ${x[2]} : ${y[2]} : ${z[2]}
     ───────────
        🎰┃🎰┃ 🎰
        
${end}`) 
}
handler.help = ['slot <apuesta>']
handler.tags = ['game']
handler.command = ['slot']

export default handler

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return seconds + " Segundo(s)"
}
