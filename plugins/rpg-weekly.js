const rewards = {
  exp: 1599999000000090900000,
  money: 359997979978989999,
  potion: 98888899999,
}
const cooldown = 604800000
let handler = async (m) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastweekly < cooldown) throw `[❗𝐈𝐍𝐅𝐎❗] ¡𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝙴𝚂𝚃𝙴 𝚁𝙴𝙲𝙻𝙰𝙼𝙾 𝙳𝙸𝙰𝚁𝙸𝙾 \n𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${((user.lastweekly + cooldown) - new Date()).toTimeString()}*\n𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendButton(m.chat,'*––––––『 REGLAMO WEEKLY 』––––––*', text.trim(), null, [['Inventory', '.inv'], ['Monthly', '.monthly']],m)
  user.lastweekly = new Date * 1
}
handler.help = ['weekly']
handler.tags = ['rpg']
handler.command = /^(weekly)$/i

handler.cooldown = cooldown

export default handler
