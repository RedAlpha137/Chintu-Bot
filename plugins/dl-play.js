
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
	if (!text) throw `β³οΈ *Enter a song title*\n\nπExample *${usedPrefix + command}* Unity`
	let vid = (await yts(text)).all[0]
	if (!vid) throw `β³οΈ VΓ­deo/Audio no encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('π§')
	let play = `
	β‘ *CHINTU MUSIC DOWNLOADER*
βββββββββββββββ
β’ π *TΓ­tle* : ${title}
β’ π *Publiced:* ${ago}
β’ β *Duraction:* ${timestamp}
β’ π *Views:* ${views}
βββββββββββββββ`
 await conn.sendButton(m.chat, play, igfg, thumbnail, [
    ['πΆ MP3', `${usedPrefix}fgmp3 ${url}`],
    ['π₯ MP4', `${usedPrefix}fgmp4 ${url}`]
  ], m, rpl)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']

export default handler
