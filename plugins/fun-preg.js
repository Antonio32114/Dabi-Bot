import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `hey y la pregunta Ejemplo :*\n\n *${usedPrefix + command}* soy feo?`
  m.react('🫣') 
  await conn.sendPresenceUpdate('composing', m.chat)
  //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
  let json = await res.json()
  if (json.success) 
m.reply(`🔸️ *PREGUNTAS*

🔸️ *Pregunta:* ${text}
🔸️ *Respuesta :* ${json.success.replace('simsimi', 'DyLux').replace('Simsimi', 'DyLux').replace('sim simi', 'DyLux')}`) 
  else throw json
}

handler.help = ['pregunta']
handler.tags = ['fun']
handler.command = ['pregunta', 'preg'] 

export default handler
