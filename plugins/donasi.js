let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Dana  [0821-4520-3493]
│ • Gopay [0821-4520-3493]
│ • Pulsa [0821-4520-3493]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
