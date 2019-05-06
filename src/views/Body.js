var m = require("mithril").default
var Sidebar = require("./Sidebar")
var Content = require("./Content")

var view = function (vnode) {
    var column = m('div', { class: 'bg-dark-green white pa3 tc' },
        m('a', { href: '/', class: 'no-underline white f4' }, 'Sujeevraja "Sujeev" Sanjeevi'))
    return m('div', { class: 'helvetica' }, [
        column,
        m('div', { class: 'flex items-start' }, [
            m(Sidebar), // m(component) consumes the component to generate a view.
            m(Content, { comp: vnode.attrs.comp }),
        ])])
}

module.exports = {
    view: view
}