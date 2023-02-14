import TicTacToe from '../lib/tictactoe.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `ᴛᴏᴅᴀᴠɪᴀ ᴇsᴛᴀ ᴇɴ ᴇʟ ᴊᴜᴇɢᴏs ᴘᴀʀᴀ sᴀʟɪʀ ᴘᴏɴᴇʀ: *${usedPrefix}delttt*`
    if (!text) throw `ʏ ᴇʟ ɴᴏᴍʙʀᴇ ᴅᴇʟ ʟᴀ sᴀʟᴀ?\n ᴇᴊᴇᴍᴘʟᴏ: .ttt novaboot`
    let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    // m.reply('[WIP Feature]')
    if (room) {
        m.reply('ᴊᴜɢᴀᴅᴏs ᴇɴᴄᴏɴᴛʀᴀᴅᴏ ✅')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
            return {
                X: '❎',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        })
        let str = `
ᴇsᴘᴇʀᴀᴅᴏ ᴀ @${room.game.currentTurn.split('@')[0]} ᴄᴏᴍᴏ ᴘʀɪᴍᴇʀ ᴊᴜɢᴀᴅᴏʀ
        
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

▢ *sᴀʟᴀ* ${room.id}

▢ *ʀᴇɢʟᴀs*
‣ ʜᴀᴢ 3 ғɪʟᴀs ᴅᴇ sɪᴍʙᴏʟᴏs ᴠᴇʀᴛɪᴄᴀʟᴇs, ʜᴏʀɪᴢᴏɴᴛᴀʟᴇs ᴏ ᴅɪᴀɢᴏɴᴀʟᴇs ᴘᴀʀᴀ ɢᴀɴᴀʀ
‣ ᴇsᴄʀɪʙᴇ *sᴜʀʀᴇɴᴅᴇʀ* ᴘᴀʀᴀ sᴀʟɪʀ ᴅᴇʟ ᴊᴜᴇɢᴏ.
`.trim()
        if (room.x !== room.o) await conn.sendButton(room.x, str, fgig, ['Surrender', 'surrender'], m, {
            mentions: conn.parseMention(str)
        })
        await conn.sendButton(room.o, str, fgig, ['Surrender', 'surrender'], m, {
            mentions: conn.parseMention(str)
        })
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        }
        if (text) room.name = text
        
     conn.sendButton(m.chat, `⏳ *ᴇsᴘᴇʀᴀɴᴅᴏ ᴀʟ sɪɢᴜɪᴇɴᴛᴇ ᴊᴜɢᴀᴅᴏ*\nᴇsᴄʀɪʙᴀ ᴇʟ sɪɢᴜɪᴇɴᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴏ ᴘʀᴇsɪᴏɴᴀ ᴇʟ ʙᴏᴛᴏɴ
● *${usedPrefix + command} ${text}*

🎁 ʀᴇᴄᴏᴍᴘᴇɴsᴀ : *4999 XP*`, fgig, ['👍🏻 Aceptar', `${usedPrefix + command} ${text}`], m, {
            mentions: conn.parseMention(text)
        })
        
   conn.game[room.id] = room
    }
    
}

handler.help = ['tictactoe <nombre Sala>']
handler.tags = ['game']
handler.command = ['tictactoe', 'ttc', 'ttt', 'xo']

export default handler