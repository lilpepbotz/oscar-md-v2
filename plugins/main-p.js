let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/db38dcd2fcbe07ec66348.jpg', m, { packname: "Azura", author: "@Alwi" })
}

handler.customPrefix = /^(p)$/i
handler.command = new RegExp

module.exports = handler
