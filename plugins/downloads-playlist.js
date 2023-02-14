
import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `Que esta buscado? ingrese el nombre del tema Ingresa\nEjemplo*\n*${usedPrefix + command}* bad bunny `
    m.react('📀')
    let result = await yts(text)
    let ytres = result.all
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['• • •「 🅐🅤🅓🅘🅞 」• • •', `${usedPrefix}fgmp3 ${v.url}`, `🔸️📌 *Título* : ${v.title}\n🔸️⌚ *Duración:* ${v.timestamp}\n🔸️👀 *Vistas:* ${v.views}\n🔸️📆 *Publicado:* ${v.ago}\n`],
          ['• • •「 🅥🅘🅓🅔🅞 」• • •', `${usedPrefix}fgmp4 ${v.url}`, `🔸️📌 *Título* : ${v.title}\n🔸️⌚ *Duración:* ${v.timestamp}\n🔸️👀 *Vistas:* ${v.views}\n🔸️📆 *Publicado:* ${v.ago}\n`],
          ['• • •「 🅓🅞🅒🅤🅜🅔🅝🅣🅞🅢 🅜🅟❸ 」• • •', `${usedPrefix}ytadoc ${v.url}`, `🔸️📌 *Título* : ${v.title}\n🔸️⌚ *Duración:* ${v.timestamp}\n🔸️👀 *Vistas:* ${v.views}\n🔸️📆 *Publicado:* ${v.ago}\n`],
        ['• • •「 🅓🅞🅒🅤🅜🅔🅝🅣🅞🅢 🅜🅟❹ 」• • •', `${usedPrefix}ytvdoc ${v.url}`, `🔸️📌 *Título* : ${v.title}\n🔸️⌚ *Duración:* ${v.timestamp}\n🔸️👀 *Vistas:* ${v.views}\n🔸️📆 *Publicado:* ${v.ago}\n`]
        ]])
	})
	return conn.sendList(m.chat, '╭┄〔 *ʙᴜsᴄᴀᴅᴏ 🔎* 〕┄⊱-\n┆~~••~~••~~••~~••~~~~', `┆ 📀 ᴀǫᴜɪ ᴜɴᴀ ʟɪsᴛᴀ ᴅᴇ ʀᴇsᴜʟᴛᴀᴅᴏs ᴅᴇ: *${text}*\n╰────────────────\nᴇʟɪᴊᴀ ᴀ ᴜɴᴀ ᴏᴘᴄɪᴏɴ ʏ ᴘʀᴇsɪᴏɴᴇ ᴇɴᴠɪᴀʀ`, lb, `♦ 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 ♦`, listSections, m)
}
handler.help = ['play2']
handler.tags = ['downloader']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 

export default handler