//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `ā³ļø Tag or mention someone\n\nš Example : ${usedPrefix + command} @user`
if (global.prems.includes(who.split`@`[0])) throw 'ā³ļø The user Mentioned Already is premium'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
ā PREMIUM

@${who.split`@`[0]} now you become a premium user
āāāāāāāāāāāā
ā¢ *Number:* ${user.name}
āāāāāāāāāāāā
`, m, { mentions: [who] })

}
handler.help = ['addprem <@tag>']
handler.tags = ['owner']
handler.command = ['addprem', 'addpremium'] 

handler.group = true
handler.rowner = true

export default handler
