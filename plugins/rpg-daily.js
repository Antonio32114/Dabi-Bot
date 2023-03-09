const rewards = {
  exp: 9999999999,
  money: 4999999,
  potion: 555,
}
const cooldown = 10800000
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝚁𝙴𝙶𝙰𝙻𝙾\n𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*\n𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendButton(m.chat,'*––––––『🎉DAILY🎉』––––––*', text.trim(), null, [['inventario | Inventory', '.inv'], ['Semanalmente | Weekly', '.weekly']],m)
  user.lastclaim = new Date * 1
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i

handler.cooldown = cooldown

export default handler
