const rewards = {
  exp: 1599999000000090900000,
  money: 359997979978989999,
  potion: 98888899999,
}
const cooldown = 604800000
let handler = async (m) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastweekly < cooldown) throw `[βππππβ] Β‘ππ° ππ΄π²π»π°πΌπ°πππ΄ π΄πππ΄ ππ΄π²π»π°πΌπΎ π³πΈπ°ππΈπΎ \nπππ΄π»ππ΄ π΄π½ *${((user.lastweekly + cooldown) - new Date()).toTimeString()}*\nπΏπ°ππ° ππΎπ»ππ΄π π° ππ΄π²π»π°πΌπ°π`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendButton(m.chat,'*ββββββγ REGLAMO WEEKLY γββββββ*', text.trim(), null, [['Inventory', '.inv'], ['Monthly', '.monthly']],m)
  user.lastweekly = new Date * 1
}
handler.help = ['weekly']
handler.tags = ['rpg']
handler.command = /^(weekly)$/i

handler.cooldown = cooldown

export default handler
