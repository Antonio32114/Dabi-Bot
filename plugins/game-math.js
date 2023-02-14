let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.math = conn.math ? conn.math : {}
    
    if (args.length < 1) throw `
  🧮 𝙳𝚒𝚏𝚒𝚌𝚞𝚕𝚝𝚊𝚍𝚎𝚜 𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚋𝚕𝚎𝚜 : 
  
${Object.keys(modes).join(' | ')} 

_📌𝙴𝚓𝚎𝚖𝚙𝚕𝚘 : ${usedPrefix+command} normal_
`.trim()
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) throw `
  🧮 Dificultades disponibles : 
  
 ${Object.keys(modes).join(' | ')}

_📌𝙴𝚓𝚎𝚖𝚙𝚕𝚘 : ${usedPrefix+command} normal_
`.trim()
    
  let id = m.chat
    await conn.sendPresenceUpdate('composing', m.chat)
    if (id in conn.math) return conn.reply(m.chat, '⚠️ 𝚃𝚘𝚍𝚊𝚟𝚒𝚊 𝚑𝚊𝚢 𝚙𝚛𝚎𝚐𝚞𝚗𝚝𝚊𝚜 𝚜𝚒𝚗 𝚛𝚎𝚜𝚙𝚞𝚎𝚜𝚝𝚊 𝚎𝚗 𝚎𝚜𝚝𝚎 𝚌𝚑𝚊𝚝', conn.math[id][0])
    let math = genMath(mode)
    conn.math[id] = [
        await conn.reply(m.chat, `╔═════ೋೋ═════╗\n║𝙲𝚄𝙰𝙽𝚃𝙾 𝙴𝚂 *${math.str}* =\n║◤━━━━━ ☆. ∆ .☆ ━━━━━◥\n║𝚃𝚒𝚎𝚖𝚙𝚘: ${(math.time / 1000).toFixed(2)} 𝚂𝚎𝚐𝚞𝚍𝚘𝚜\n║◤━━━━━ ☆. ∆ .☆ ━━━━━◥\n║🎁 𝚁𝚎𝚌𝚘𝚖𝚙𝚎𝚗𝚜𝚊 : ${math.bonus} XP\n╚════ ≪ •❈• ≫ ════╝`, m),
        math, 4,
        setTimeout(() => {
            if (conn.math[id]) conn.reply(m.chat, `⏳ 𝚂𝚎 𝚊𝚌𝚊𝚋𝚘 𝚎𝚕 𝚝𝚒𝚎𝚖𝚙𝚘!\n𝙻𝚊 𝚛𝚎𝚜𝚙𝚞𝚎𝚜𝚝𝚊 𝚎𝚜: *${math.result}*`, conn.math[id][0])
      delete conn.math[id]
        }, math.time)
    ]
}
handler.help = ['Mates <modo>']
handler.tags = ['game']
handler.command = ['mates', 'mate', 'matemáticas', 'math'] 

 
let modes = {
    noob: [-3, 3,-3, 3, '+-', 15000, 10],
  fácil: [-10, 10, -10, 10, '*/+-', 20000, 40],
  normal: [-40, 40, -20, 20, '*/+-', 40000, 150],
  difícil: [-100, 100, -70, 70, '*/+-', 60000, 350],
  extremo: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
  imposible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
  imposible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}

let operators = {
    '+': '+',
    '-': '-',
    '*': '×',
    '/': '÷'
}

function genMath(mode) {
    let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
    let a = randomInt(a1, a2)
    let b = randomInt(b1, b2)
    let op = pickRandom([...ops])
    let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
    if (op == '/') [a, result] = [result, a]
    return {
        str: `${a} ${operators[op]} ${b}`,
        mode,
        time,
        bonus,
        result
    }
}

function randomInt(from, to) {
    if (from > to) [from, to] = [to, from]
    from = Math.floor(from)
    to = Math.floor(to)
    return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

handler.modes = modes

export default handler
