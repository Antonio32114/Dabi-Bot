
import { tmpdir } from 'os'
import path, { join } from 'path'
import {
  readdirSync,
  unlinkSync,
  rmSync
} from 'fs'

let handler = async (m, { conn, __dirname, args }) => {

m.reply(`✅ Se limpió la carpeta *tmp + sessions*`)
m.react(done)
const tmp = [tmpdir(), join(__dirname, '../tmp')]
  const filename = []
  tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
 
  //session bot
  readdirSync("./sessions").forEach(file => {
    if (file !== 'creds.json') {
        unlinkSync("./sessions/" + file, { recursive: true, force: true })}}) 
      
  return filename.map(file => {
    unlinkSync(file)
})

}
handler.help = ['cleartmp']
handler.tags = ['owner']
handler.command = /^(cleartmp)$/i
handler.rowner = true

export default handler
