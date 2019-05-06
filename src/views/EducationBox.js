var m = require("mithril").default
var Education = require("../models/Education")

var educationView = function (ed) {
    var icon = m('span', { class: 'fa-li' },
        m('i', { class: 'fas fa-graduation-cap' }))

    var children = [
        icon,
        m('b', ed.degree),
        m('br'), m('i', ed.department),
        m('br'), ed.university, ', ', ed.location,
        m('br'),
        ed.start, ' - ', ed.end]

    return m('li', { class: 'pb3' }, children)
}

module.exports = {
    oninit: Education.loadList,
    view: function () {
        return m('ul', { class: 'fa-ul' }, Education.list.map(educationView))
    }
}