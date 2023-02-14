
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	 
   let tee = `✳️ 𝙸𝚗𝚐𝚛𝚎𝚜𝚎 𝚞𝚗 𝚝𝚎𝚡𝚝𝚘 𝚌𝚘𝚛𝚝𝚘\n\n📌 𝙴𝙹𝙴𝙼𝙿𝙻𝙾  : *${usedPrefix + command}* hola`
   let too = `✳️  𝚂𝚎𝚙𝚊𝚛𝚎 𝙴𝙻 𝚝𝚎𝚡𝚝𝚘 𝚌𝚘𝚗 𝚞𝚗  *+* \n\n📌 𝙴𝙹𝙴𝙼𝙿𝙻𝙾 : \n*${usedPrefix + command}* Nova *+* Bot`
    m.react(rwait)
let type = (command).toLowerCase()
switch (type) {
	
	case 'logololi':
	if (!text) throw tee 
	let img = global.API('fgmods', '/api/lolimaker', { text }, 'apikey')
	conn.sendFile(m.chat, img, 'logo.png', `✅ 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾`, m)
	m.react(done)
	break 
	case 'neon': 
	if (!text) throw tee
	let ne = global.API('fgmods', '/api/textpro/neon', { text }, 'apikey')
	conn.sendFile(m.chat, ne, 'logo.png', `✅ 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾`, m)
	m.react(done)
	break 
	case 'devil': 
	if (!text) throw tee
	let de = global.API('fgmods', '/api/textpro/devil', { text }, 'apikey')
	conn.sendFile(m.chat, de, 'logo.png', `✅ 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾`, m)
	m.react(done)
	break 
	case 'wolf': 
   if (!text) throw tee
   let wo = global.API('fgmods', '/api/textpro/logowolf2', { text: 'FG98', text2: text}, 'apikey')
	conn.sendFile(m.chat, wo, 'logo.png', `✅ 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾`, m)
	m.react(done)
	break 
	case 'phlogo': 
	if (!text) throw too
	if (!text.includes('+')) throw too  
	let [a, b] = text.split`+`   
	let ph = global.API('fgmods', '/api/textpro/pornhub', { text: a, text2: b}, 'apikey')
	conn.sendFile(m.chat, ph, 'logo.png', `✅ 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾`, m)
	m.react(done)
	break 
	default:
} 
} 
handler.help = ['logololi', 'neon', 'devil', 'wolf', 'phlogo']
handler.tags = ['maker']
handler.command = /^(logololi|neon|devil|wolf|phlogo)$/i
handler.diamond = true

export default handler
