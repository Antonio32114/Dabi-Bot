const rewards = {
  exp: 9999999999,
  money: 4999999,
  potion: 555,
}
const cooldown = 10800000
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `[βππππβ] ππ° ππ΄π²π»π°πΌπ°πππ΄ ππ ππ΄πΆπ°π»πΎ\nπππ΄π»ππ΄ π΄π½ *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*\nπΏπ°ππ° ππΎπ»ππ΄π π° ππ΄π²π»π°πΌπ°π`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendButton(m.chat,'*ββββββγπDAILYπγββββββ*', text.trim(), null, [['inventario | Inventory', '.inv'], ['Semanalmente | Weekly', '.weekly']],m)
  user.lastclaim = new Date * 1
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i

handler.cooldown = cooldown

export default handler
