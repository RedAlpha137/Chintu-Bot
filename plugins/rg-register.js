//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `β³οΈ You are already registered\n\nDo you want to re-register?\n\n π Use this command to remove your record \n*${usedPrefix}unreg* <Serial number>`
  if (!Reg.test(text)) throw `β οΈ Format incorrect\n\n β³οΈ Use del command: *${usedPrefix + command} name.age*\nπEjemplo : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'β³οΈ The name cannot be empty'
  if (!age) throw 'β³οΈ age cannot be empty'
  if (name.length >= 30) throw 'β³οΈThe name is too long' 
  age = parseInt(age)
  if (age > 100) throw 'π΄π» Wow grandpa wants to play bot'
  if (age < 5) throw 'πΌ  there is a grandpa baby jsjsj '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
ββγ *REGISTERED* γβ
β’ *NUMBER:* ${name}
β’ *AGE* : ${age} aΓ±os
β’ *SERIEL NUMBER* :
${sn}
βββββββββββββββ

 *${usedPrefix}help* to see menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler

