
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `ā³ļø Missing text for survey \n\nš Example : \n*${usedPrefix + command}* Message  |RedAlpha|xd`
if (!text.includes('|')) throw  `ā³ļø Separate surveys with *|* \n\nš Example : \n*${usedPrefix + command}* my survey|n  |RedAlpha|xd|piro`

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendPoll(m.chat, `š *Survey requested by:* ${name}\n\n*Message:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['poll <RedAlpha|piro|xd>']
handler.tags = ['group'] 
handler.command = ['poll', 'encuesta', 'polling'] 
handler.group = true

export default handler
