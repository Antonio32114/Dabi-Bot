
import fetch from 'node-fetch'
import { mediafiredl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command, isOwner, isPrems }) => {
	var limit
     if((isOwner || isPrems)) limit = 500
     else limit = 100
   if (!args[0]) throw `ingrese el link de mediafire`
    if (!args[0].match(/mediafire/gi)) throw `❎ Link incorrecto`
    m.react(rwait)
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: u }))).buffer()
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let isLimit = (isPrems || isOwner ? limit : limit) * 1012 < filesize
    let caption = `
╭━─━─━─≪💎≫─━─━─━╮
┆      *MEDIAFIRE*
┆——————«•»——————
┆🔸️ *Nombre:* ${filename}
┆——————«•»——————
┆🔸️ *Tamaño:* ${filesizeH}
┆——————«•»——————
┆🔸️ *Extension:* ${ext}
┆——————«•»——————
┆🔸️*Subido:* ${aploud}
╰━─━─━─≪💎≫─━─━─━╯
${isLimit ? `\n🔸*️EL ARCHIVO SUPERA EL LIMITE DE DESCARGA* +${limit} MB*\n*PASATE A PREMIUM PARA PODER DESCARGA ARCHIVO PESADO MAS DEL 600 MB*` : ''} 
`.trim()
    await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m)
    
    if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
}
handler.help = ['mediafire <url>']
handler.tags = ['downloader']
handler.command = ['mediafire', 'mfire'] 
handler.diamond = true
handler.premium = false

export default handler
