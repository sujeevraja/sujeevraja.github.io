var m = require("mithril").default
var PublicationList = require("../views/PublicationList")

module.exports = {
    view: function () {
        var boxes = [
            m('div', { class: 'outline w-100 pa3' }, 'bio box'),
            m('div', { class: 'outline w-100 pa3 mt2' }, 'experience box'),
            m('div', { class: 'outline w-100 pa3 mt2' }, 'education box'),
            m('div', { class: 'outline w-100 pa3 mt2' }, m(PublicationList)),
            m('div', { class: 'outline w-100 pa3 mt2' }, 'presentations box'),
            m('div', { class: 'outline w-100 pa3 mt2' }, 'other box'),
        ]
        return m('div', { class: 'flex flex-column w-100 ml2' }, boxes)
    }
}