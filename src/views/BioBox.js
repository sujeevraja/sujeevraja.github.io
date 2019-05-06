var m = require("mithril").default
var Bio = require("../models/Bio")

module.exports = {
    view: function () {
        var desc = m('p', Bio.description)

        var interests = m('ul', Bio.interests.map(function (interest) {
            return m('li', interest)
        }))

        return [
            desc,
            m('div', [m('i', 'Email: '), Bio.email]),
            m('h1', { class: 'f4 lh-title' }, 'Interests'),
            interests
        ]
    }
}