var m = require("mithril").default

module.exports = {
    view: function () {
        return m('div', { class: 'flex flex-column w-100 ml2', id: 'content' }, [
            m('div', { class: 'outline w-100 pa3' }, 'bio box'),
            m('div', { class: 'outline w-100 pa3 mt2' }, 'experience box'),
            m('div', { class: 'outline w-100 pa3 mt2' }, 'education box'),
            m('div', { class: 'outline w-100 pa3 mt2' }, 'publications box'),
            m('div', { class: 'outline w-100 pa3 mt2' }, 'presentations box'),
            m('div', { class: 'outline w-100 pa3 mt2' }, 'other box'),
        ])
    }
}