
import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `â³ï¸ Enter a song title\n\n*ð Example*\n*${usedPrefix + command}* Unity `
    m.react('ð')
    let result = await yts(text)
    let ytres = result.all
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}â ${v.title}`, [
          ['ð¶ MP3', `${usedPrefix}fgmp3 ${v.url}`, `â¢ â *Duration:* ${v.timestamp}\nâ¢ ð *Views:* ${v.views}\nâ¢ ð *TÃ­tle* : ${v.title}\nâ¢ ð *Publiced:* ${v.ago}\n`],
          ['ð¥ MP4', `${usedPrefix}fgmp4 ${v.url}`, `â¢ â *DuratiÃ³n:* ${v.timestamp}\nâ¢ ð *Views:* ${v.views}\nâ¢ ð *TÃ­tle* : ${v.title}\nâ¢ ð *Publiced:* ${v.ago}\n`]
        ]])
	})
	return conn.sendList(m.chat, '  â¡ *CHINTU MUSIC DOWNLOADER*ð', `\n ð Here a list of results from :\n *${text}*`, igfg, `Click `, listSections, m)
}
handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 

export default handler
