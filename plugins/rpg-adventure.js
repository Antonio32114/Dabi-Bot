import fetch from 'node-fetch'

const cooldown = 1500000 //25 minutos
let handler = async (m, { usedPrefix, conn }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let ct = ['AF','AX','AL','DZ','AS','AD','AO','AI','AQ','AG','AR','AM','AW','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','BQ','BA','BW','BV','BR','IO','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CX','CC','CO','KM','CG','CD','CK','CR','CI','HR','CU','CW','CY','CZ','DK','DJ','DM','DO','EC','EG','SV','GQ','ER','EE','ET','FK','FO','FJ','FI','FR','GF','PF','TF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GG','GN','GW','GY','HT','HM','VA','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IM','IL','IT','JM','JP','JE','JO','KZ','KE','KI','KP','KR','XK','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MK','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','AN','NC','NZ','NI','NE','NG','NU','NF','MP','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','PR','QA','RS','RE','RO','RU','RW','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','CS','SC','SL','SG','SX','SK','SI','SB','SO','ZA','GS','SS','ES','LK','SD','SR','SJ','SZ','SE','CH','SY','TW','TJ','TZ','TH','TL','TG','TK','TO','TT','TN','TR','XT','TM','TC','TV','UG','UA','AE','GB','US','UM','UY','UZ','VU','VE','VN','VG','VI','WF','EH','YE','ZM','ZW']

let ke = await fetch(`https://api.worldbank.org/v2/country/${ct.getRandom()}?format=json`)
let kt = await ke.json()
let imgr = flaaa.getRandom()
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastadventure))
if (user.health < 80) return conn.sendButton(m.chat,`${htki} 𝑩𝒂𝒋𝒂 𝒔𝒂𝒍𝒖𝒅 ${htka}`,
`𝑻𝒖 𝒔𝒂𝒍𝒖𝒅 💔 𝒆𝒔𝒕𝒂́ 𝒅𝒆𝒃𝒂𝒋𝒐 𝒅𝒆 *80!!*
𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒄𝒖𝒓𝒂𝒕𝒆 𝒑𝒓𝒊𝒎𝒆𝒓𝒐 𝒑𝒂𝒓𝒂 𝑨𝒗𝒆𝒏𝒕𝒖𝒓𝒂 𝒅𝒆𝒍 𝒏𝒖𝒆𝒗𝒐`.trim(), imgr + 'MALA SALUD', [
[`❤️ 𝘾𝙐𝙍𝘼𝙍𝙈𝙀`, `${usedPrefix}heal`],
[`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `${usedPrefix}inventory`]], fkontak, m)
    
if (new Date - user.lastadventure <= cooldown) return conn.sendButton(m.chat, `${htki} 𝑫𝒆𝒔𝒄𝒂𝒏𝒔𝒂𝒏𝒅𝒐 ${htka}`,
`𝒀𝒂 𝒂𝒗𝒆𝒏𝒕𝒖𝒓𝒂𝒔𝒕𝒆!! 𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒆𝒔𝒑𝒆𝒓𝒂 𝒉𝒂𝒔𝒕𝒂 𝒒𝒖𝒆 𝒕𝒆𝒓𝒎𝒊𝒏𝒆 𝒆𝒍 𝒕𝒊𝒆𝒎𝒑𝒐 𝒅𝒆 𝒅𝒆𝒔𝒄𝒂𝒏𝒔𝒐

⏱️ ${timers.toTimeString()}`.trim(), imgr + '𝑫𝒆𝒔𝒄𝒂𝒏𝒔𝒂𝒏𝒅𝒐', [
[`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊`, `${usedPrefix}inventory`],
[`🔔 𝙍𝙀𝘾𝙇𝘼𝙈𝙊 𝘿𝙄𝘼𝙍𝙄𝙊`, `${usedPrefix}daily`]], fkontak, m) 
    
    const rewards = reward(user)
    let text = `🛫 𝑬𝒔𝒕𝒂 𝒂𝒗𝒆𝒏𝒕𝒖𝒓𝒂𝒏𝒅𝒐 𝒆𝒏 *» ${kt[1][0].name}*

${cmenut}
${cmenub} *ID :* ${kt[1][0].id}
${cmenub} *CIUDAD :* ${kt[1][0].capitalCity}
${cmenub} *LONGITUD :* ${kt[1][0].longitude}
${cmenub} *LATITUD :* ${kt[1][0].latitude}
${cmenuf}

🏞️ 𝑨𝒅𝒗𝒆𝒏𝒕𝒖𝒓𝒂 𝒇𝒊𝒏𝒂𝒍𝒊𝒛𝒂𝒅𝒂𝒔:
${cmenua}`
    
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n${global.rpg.emoticon(lost)} ${total}`
    }
    text += '\n\n✨ 𝑹𝒆𝒄𝒐𝒎𝒑𝒆𝒏𝒔𝒂 𝒅𝒆 𝒍𝒂 𝑨𝒅𝒗𝒆𝒏𝒕𝒖𝒓𝒂'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n» ${global.rpg.emoticon(rewardItem)} ${total}`
    }
    conn.sendButton(m.chat, 
     `${htki} 𝑨𝒅𝒗𝒆𝒏𝒕𝒖𝒓𝒂 ${htka}`, 
     text.trim(), `https://static-maps.yandex.ru/1.x/?lang=id-ID&ll=${kt[1][0].longitude},${kt[1][0].latitude}&z=12&l=map&size=600,300`, [
[`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊`, `${usedPrefix}inventory`],
[`🔔 𝙍𝙀𝘾𝙇𝘼𝙈𝙊 𝘿𝙄𝘼𝙍𝙄𝙊`, `${usedPrefix}daily`]
], fkontak, m)
    user.lastadventure = new Date * 1
}
handler.help = ['adventure']
handler.tags = ['rpg']
handler.limit = 1
handler.register = true
handler.level = 1
handler.command = /^(adventure|adv|aventura|aventurar)$/i

handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            money: 400,
            exp: 300,
            trash: 150,
            potion: 3,
            rock: 2,
	    joincount: 2,
            wood: 3,
            string: 2,
            common: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
            uncoommon: [0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                )).fill(0)
            ),
            mythic: [0, 0, 0, 0, 0, 1, 0, 0, 0].concat(
                new Array(8 - (
                    (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                )).fill(0)
            ),
            legendary: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0].concat(
                new Array(10 - (
                    (user.dog > 8 && user.dog) || 4
                )).fill(0)
            ),
            cat: [0, 1, 0, 0, 0],
            centaur: [0, 1, 0, 0, 0],
            dog: [0, 1, 0, 0, 0],
            dragon: [0, 1, 0, 0, 0],
            emerald: [0, 1, 0, 0, 0],
            fox: [0, 1, 0, 0, 0],
            griffin: [0, 1, 0, 0, 0],
            horse: [0, 1, 0, 0, 0],
            kyubi: [0, 1, 0, 0, 0],
            lion: [0, 1, 0, 0, 0],
            pet: [0, 1, 0, 0, 0],
            phonix: [0, 1, 0, 0, 0],
            rhinoceros: [0, 1, 0, 0, 0],
            robo: [0, 1, 0, 0, 0],
            wolf: [0, 1, 0, 0, 0],
            iron: [0, 0, 0, 1, 0, 0],
            gold: [0, 0, 0, 0, 0, 1, 0],
            diamond: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            health: 101 - user.cat * 4,
            armordurability: (15 - user.armor) * 7
        }
    }
    return rewards
}
