let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
let randomaku1 = `${Math.floor(Math.random() * 5)}`
let randomaku2 = `${Math.floor(Math.random() * 5)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 5)}`
let randomaku5 = `${Math.floor(Math.random() * 5)}`
let randomaku6 = `${Math.floor(Math.random() * 5)}`
let randomaku7 = `${Math.floor(Math.random() * 5)}`
let randomaku8 = `${Math.floor(Math.random() * 5)}`
let randomaku9 = `${Math.floor(Math.random() * 5)}`
let randomaku10 = `${Math.floor(Math.random() * 5)}`
let randomaku11 = `${Math.floor(Math.random() * 5)}`
let randomaku12 = `${Math.floor(Math.random() * 5)}`.trim()
let rbrb1 = (randomaku1 * 1)
let rbrb2 = (randomaku2 * 1)
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 1)
let rbrb5 = (randomaku5 * 1)
let rbrb6 = (randomaku6 * 1)
let rbrb7 = (randomaku7 * 1)
let rbrb8 = (randomaku8 * 1)
let rbrb9 = (randomaku9 * 1)
let rbrb10 = (randomaku10 * 1)
let rbrb11 = (randomaku11 * 1)
let rbrb12 = (randomaku12 * 1)
let anti1 = `${rbrb1}`
let anti2 = `${rbrb2}`
let anti3 = `${rbrb3}`
let anti4 = `${rbrb4}`
let anti5 = `${rbrb5}`
let anti6 = `${rbrb6}`
let anti7 = `${rbrb7}`
let anti8 = `${rbrb8}`
let anti9 = `${rbrb9}`
let anti10 = `${rbrb10}`
let anti11 = `${rbrb11}`
let anti12 = `${rbrb12}`	
let ar1 = `${['๐ช','โ๏ธ','๐งจ','๐ฃ','๐ซ','๐ช','๐ก๏ธ','๐น','๐ฆพ','๐ฅ','๐งน','๐จ','๐ป'].getRandom()}`
let ar2 = `${['๐ช','โ๏ธ','๐งจ','๐ฃ','๐ซ','๐ช','๐ก๏ธ','๐น','๐ฆพ','๐ฅ','๐งน','๐จ','๐ป'].getRandom()}`
let ar3 = `${['๐ช','โ๏ธ','๐งจ','๐ฃ','๐ซ','๐ช','๐ก๏ธ','๐น','๐ฆพ','๐ฅ','๐งน','๐จ','๐ป'].getRandom()}`
let ar4 = `${['๐ช','โ๏ธ','๐งจ','๐ฃ','๐ซ','๐ช','๐ก๏ธ','๐น','๐ฆพ','๐ฅ','๐งน','๐จ','๐ป'].getRandom()}`
let ar5 = `${['๐ช','โ๏ธ','๐งจ','๐ฃ','๐ซ','๐ช','๐ก๏ธ','๐น','๐ฆพ','๐ฅ','๐งน','๐จ','๐ป'].getRandom()}`
let ar6 = `${['๐ช','โ๏ธ','๐งจ','๐ฃ','๐ซ','๐ช','๐ก๏ธ','๐น','๐ฆพ','๐ฅ','๐งน','๐จ','๐ป'].getRandom()}`
let ar7 = `${['๐ช','โ๏ธ','๐งจ','๐ฃ','๐ซ','๐ช','๐ก๏ธ','๐น','๐ฆพ','๐ฅ','๐งน','๐จ','๐ป'].getRandom()}`
let ar8 = `${['๐ช','โ๏ธ','๐งจ','๐ฃ','๐ซ','๐ช','๐ก๏ธ','๐น','๐ฆพ','๐ฅ','๐งน','๐จ','๐ป'].getRandom()}`
let ar9 = `${['๐ช','โ๏ธ','๐งจ','๐ฃ','๐ซ','๐ช','๐ก๏ธ','๐น','๐ฆพ','๐ฅ','๐งน','๐จ','๐ป'].getRandom()}`
let ar10 = `${['๐ช','โ๏ธ','๐งจ','๐ฃ','๐ซ','๐ช','๐ก๏ธ','๐น','๐ฆพ','๐ฅ','๐งน','๐จ','๐ป'].getRandom()}`
let ar11 = `${['๐ช','โ๏ธ','๐งจ','๐ฃ','๐ซ','๐ช','๐ก๏ธ','๐น','๐ฆพ','๐ฅ','๐งน','๐จ','๐ป'].getRandom()}`
let ar12 = `${['๐ช','โ๏ธ','๐งจ','๐ฃ','๐ซ','๐ช','๐ก๏ธ','๐น','๐ฆพ','๐ฅ','๐งน','๐จ','๐ป'].getRandom()}`
let hsl = `
*โง Resultados de la caza ${conn.getName(m.sender)} โง*

 *๐ ${ar1} ${anti1}*			 *๐ ${ar7} ${anti7}*
 *๐ ${ar2} ${anti2}*			 *๐ฎ ${ar8} ${anti8}*
 *๐ ${ar3} ${anti3}*			 *๐ ${ar9} ${anti9}*
 *๐ ${ar4} ${anti4}*			 *๐ ${ar10} ${anti10}*
 *๐ผ ${ar5} ${anti5}*			 *๐ ${ar11} ${anti11}*
 *๐ ${ar6} ${anti6}*		    *๐ ${ar12} ${anti12}*`.trim()
global.db.data.users[m.sender].banteng += rbrb1
global.db.data.users[m.sender].harimau += rbrb2
global.db.data.users[m.sender].gajah += rbrb3
global.db.data.users[m.sender].kambing += rbrb4
global.db.data.users[m.sender].panda += rbrb5
global.db.data.users[m.sender].buaya += rbrb6
global.db.data.users[m.sender].kerbau += rbrb7
global.db.data.users[m.sender].sapi += rbrb8
global.db.data.users[m.sender].monyet += rbrb9
global.db.data.users[m.sender].babihutan += rbrb10
global.db.data.users[m.sender].babi += rbrb11
global.db.data.users[m.sender].ayam += rbrb12
	
let time = global.db.data.users[m.sender].lastberburu + 2700000 //45 Minutos
if (new Date - global.db.data.users[m.sender].lastberburu < 2700000) return conn.sendButton(m.chat, `๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐ณ๐ด๐๐ฒ๐ฐ๐ฝ๐๐ฐ ๐๐ฝ ๐ผ๐พ๐ผ๐ด๐ฝ๐๐พ ๐ฟ๐ฐ๐๐ฐ ๐๐ด๐ถ๐๐ธ๐ ๐ฒ๐ฐ๐๐ฐ๐ฝ๐ณ๐พ`, `โซนโซบ ๐๐ธ๐ด๐ผ๐ฟ๐พ ${clockString(time - new Date())}\n${wm}`, null, [
['๐๏ธ ๐ฐ๐ฝ๐ธ๐ผ๐ฐ๐ป๐ด๐ ๐ฒ๐ฐ๐ฟ๐๐๐๐ฐ๐ณ๐พ๐ ', '.kandang'],
[`๐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐ด๐๐ธ๐พ`, `.inventario`]], m)	

setTimeout(() => {
conn.sendHydrated(m.chat, hsl, wm, null, fgig, `๐ถ๐ธ๐๐ท๐๐ฑ`, null, null, [
[null, null]], null)}, 20000)
	        
setTimeout(() => {
conn.reply(m.chat, `@${m.sender.split("@s.whatsapp.net")[0]} *${['OBJETIVO FIJADO ๐ฏ','Carnada en Marcha ๐ซ ๐ ๐','ANIMALES DETECTADOS!! ๐ ๐ ๐ ๐ผ','ANIMALES DETECTADOS!! ๐ ๐ ๐ฎ ๐'].getRandom()}*`, null, { mentions: [m.sender]})}, 18000)	
//conn.sendHydrated(m.chat, `${conn.getName(m.sender)} *${['OBJETIVO FIJADO`${conn.getName(m.sender)} *${['OBJETIVO FIJADO ๐ฏ','Carnada en Marcha ๐ซ ๐ ๐','ANIMALES DETECTADOS!! ๐ ๐ ๐ ๐ผ','ANIMALES DETECTADOS!! ๐ ๐ ๐ฎ ๐'].getRandom()}*` ๐ฏ','Carnada en Marcha ๐ซ ๐ ๐','ANIMALES DETECTADOS!! ๐ ๐ ๐ ๐ผ','ANIMALES DETECTADOS!! ๐ ๐ ๐ฎ ๐'].getRandom()}*`, wm, null, null, null, null, null, [
//[null, null]], null)}, 18000)

setTimeout(() => {
conn.reply(m.chat, `@${m.sender.split("@s.whatsapp.net")[0]} *${['Armas lista para la Caza!!','Probando Armas ๐ซ ๐ฃ ๐ช ๐น','CARROS PARA LA CAZA!! ๐ ๐๏ธ ๐','TIEMPO BUENO PARA LA CAZA ๐งค'].getRandom()}*`, null, { mentions: [m.sender]})}, 15000) 	
//conn.sendHydrated(m.chat, `${conn.getName(m.sender)} *${['Armas lista para la Caza!!','Probando Armas ๐ซ ๐ฃ ๐ช ๐น','CARROS PARA LA CAZA!! ๐ ๐๏ธ ๐','TIEMPO BUENO PARA LA CAZA ๐งค'].getRandom()}*`, wm, null, null, null, null, null, [
//[null, null]], null)}, 15000)

setTimeout(() => {
conn.reply(m.chat, `@${m.sender.split("@s.whatsapp.net")[0]} *${['Buscando implementos de caza...','Alistando todo para la caza!!','Estableciendo Lugar de la Caza...','PREPARANDO LUGAR DE CAZA!!'].getRandom()}*`, m, m.mentionedJid ? { mentions: [m.sender] } : {})}, 0)
//conn.sendHydrated(m.chat, `${conn.getName(m.sender)} *${['Buscando implementos de caza...','Alistando todo para la caza!!','Estableciendo Lugar de la Caza...','PREPARANDO LUGAR DE CAZA!!'].getRandom()}*`, wm, null, null, null, null, null, [
//[null, null]], null)}, 0)	
user.lastberburu = new Date * 1	
							     
}
handler.help = ['berburu']
handler.tags = ['rpg']
handler.command = /^(hunt|berburu|caza(r)?)$/i
//handler.group = true
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}

