
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `que esta buscado\n Ejemplo :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
  if (!args[0].match(/youtu/gi)) throw `No se pudo descargar el audio intente de nuevo`
  await m.reply(`*⏳Aguarde un momento⏳*`)
   m.react(rwait)
 let chat = global.db.data.chats[m.chat]
  try {
		let q = '128kbps'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
		const dl_url = await yt.audio[q].download()
		const title = await yt.title
		const size = await yt.audio[q].fileSizeH
		conn.sendFile(m.chat, dl_url, title + '.mp3', `  
*📌ᴛɪᴛᴜʟᴏ* : ${title}
*⚖️ᴘᴇsᴏ* : ${size}
`.trim(), m, false, { mimetype: 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done)
        } catch {
			await m.reply(`Error intente de nuevo`)
} 

}
handler.help = ['ytmp3 <url>']
handler.tags = ['downloader']
handler.command = ['ytmp3', 'fgmp3'] 
handler.diamond = true

export default handler
