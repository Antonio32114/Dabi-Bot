
import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {
 
 if (!args[0]) throw `Y el link? ingrese un enlace del facebook\n\n๐ Ejemplo :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
    m.react(rwait)
   try {
   let res = await fg.fbdl(args[0])
    for (let result of res.download) {
    	  let tex = `
โญโโโโโโโช๐ดโซโโโโโโโฎ
โ*FBDL*
โโโโโโโยซโขยปโโโโโโ
โ๐ด *Calidad:* ${result.quality}
โฐโโโโโโโช๐ดโซโโโโโโโฏ`
    conn.sendFile(m.chat, result.url, 'fb.mp4', tex, m)
     } 
     m.react(done)
 } catch {
 	m.reply('Error: Intente de nuevo con otro link')
 	} 
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.diamond = true

export default handler
