import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['50763596565', '𝜟𝚴𝚻𝚯͢𝚴𝐈𝚯͢', true],
  ['687712111', '𓏲⊹ ⌑፮』ᴅɪ֟፝ɴᴏ͢ㆍᶽ༐ 𓈃𓍯', true],
  ['5492266466080']
] //Numeros de owner 

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.mods = ['50763596565'] 
global.prems = ['50763596565', '687712111']

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
// 'fiktod' 'BF39D349845E' '675e34de8a' '0b917b905e6f'
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { 
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm-nhie.onrender.com',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
}

global.imagen1 = ['./media/menu1.jpg']


global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.año = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })



global.stime = function clockString(seconds) {
  var d = Math.floor(seconds / (1000 * 60 * 60 * 24));
  var h = Math.floor((seconds / (1000 * 60 * 60)) % 24);
  var m = Math.floor((seconds / (1000 * 60)) % 60);
  var s = Math.floor((seconds / 1000) % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia," : " Dias,") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay ? dDisplay + hDisplay + mDisplay + sDisplay : '0 Segundos'
};

var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'una linda noche 🌙'; break; case 1: hour = 'una linda noche 💤'; break; case 2: hour = 'una linda noche 🦉'; break; case 3: hour = 'una linda mañana ✨'; break; case 4: hour = 'una linda mañana 💫'; break; case 5: hour = 'una linda mañana 🌅'; break; case 6: hour = 'una linda mañana 🌄'; break; case 7: hour = 'una linda mañana 🌅'; break; case 8: hour = 'una linda mañana 💫'; break; case 9: hour = 'una linda mañana ✨'; break; case 10: hour = 'un lindo dia 🌞'; break; case 11: hour = 'un lindo dia 🌨'; break; case 12: hour = 'un lindo dia ❄'; break; case 13: hour = 'un lindo dia 🌤'; break; case 14: hour = 'una linda tarde 🌇'; break; case 15: hour = 'una linda tarde 🥀'; break; case 16: hour = 'una linda tarde 🌹'; break; case 17: hour = 'una linda tarde 🌆'; break; case 18: hour = 'una linda noche 🌙'; break; case 19: hour = 'una linda noche 🌃'; break; case 20: hour = 'una linda noche 🌌'; break; case 21: hour = 'una linda noche 🌃'; break; case 22: hour = 'una linda noche 🌙'; break; case 23: hour = 'una linda noche 🌃'; break;}
  global.saludo = "Espero que tengas " + hour;


//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

// Sticker WM
global.packname = '👑 ❑ Owner:\n📅 ❑ Día:\n🕒 ❑ Hora:\n🗓️ ❑ Fecha:\n🔥 ❑ By:'
global.author = '𝜟𝚴𝚻𝚯͢𝚴𝐈𝚯͢ \n▸ ${dia}\n▸ ${tiempo}\n▸ ${fecha}\n▸ ${botname}'

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.fgig = 'https://github.com/Antonio32114/Dabi-Bot'
 
global.yt = 'https://youtube.com/@Itachi_bot'

global.fgpyp = 'https://www.tiktok.com/@ofc___antonio'

global.faceb = 'https://facebook.com/groups/872989990425789/'

global.vs = '1.5.0'

global.lb = '🄳🄰🄱🄸-🄱🄾🅃'
global.lolibot = lb

global.dygp = 'https://chat.whatsapp.com/HZmxLIsZRbYE37xRV9XQYU' //grupo del bot

global.nna = 'https://chat.whatsapp.com/HZmxLIsZRbYE37xRV9XQYU' //UPDATE

global.fglog = 'https://telegra.ph/file/1861aab98389b13db8588.png' 

global.multiplier = 69 
global.maxwarn = '4' // máxima advertencias

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.wm = '🄳🄰🄱🄸-🄱🄾🅃'
global.wait = '*⌛ _Cargando, aguarde un momento..._ ▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
