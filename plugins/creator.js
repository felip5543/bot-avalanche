let handler = function (m) {
  this.sendContact(m.chat, '5521981218655', '\DJ-FP', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
