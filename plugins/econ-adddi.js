//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'â³ï¸ tag the user'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw 'â³ï¸ Enter the amount of *Diamonds* you want to add'
    if (isNaN(txt)) throw 'ð¢ only numbers'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw 'â³ï¸ MÃ­nimum  *1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`â¡ *ð ADDED*
âââââââââââââââ
â¢ *Total:* ${dmt}
âââââââââââââââ`)
   conn.fakeReply(m.chat, `â¢ Did you receive \n\n *+${dmt}* Diamonds`, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['adddi'] 
handler.rowner = true

export default handler

