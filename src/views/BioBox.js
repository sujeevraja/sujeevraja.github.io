var m = require("mithril")
var Bio = require("../models/Bio")

module.exports = {
    title: 'Bio',
    view: function () {
        var desc = m('p', Bio.description)

        var interests = m('ul', Bio.interests.map(function (interest) {
            return m('li', interest)
        }))

        return [
            desc,
            m('div', [m('i', 'Email: '), Bio.email]),
            m('br'),
            m('h1', { class: 'f4 lh-title' }, 'Responsiblities at Sabre'),
            Bio.responsibilities,
            m('br'),
            m('br'),
            m('h1', { class: 'f4 lh-title' }, 'Research'),
            Bio.research,
            m('br'),
            m('br'),
            m('h1', { class: 'f4 lh-title' }, 'Interests'),
            interests,
            m('br'),
            m('h1', { class: 'f4 lh-title' }, 'Software I use'),
            Bio.software]
    }
}