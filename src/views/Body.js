var m = require("mithril").default
var Sidebar = require("./Sidebar")
var Content = require("./Content")

var view = function (vnode) {
    var header = m('div', { class: 'bg-dark-green white pa3 tc' },
        m('a', { href: '/', class: 'no-underline white f4' }, 'Sujeevraja "Sujeev" Sanjeevi'))

    var footer = m('div', {
        class: 'fixed tc left-0 bottom-0 right-0 bg-light-gray gray pa4'
    }, [
            'Built from scratch with ',
            m('a', { href: 'http://tachyons.io/' }, 'Tachyons'),
            ' and ',
            m('a', { href: 'https://mithril.js.org/' }, 'MithrilJS'),
            '.'])


    return m('div', { class: 'helvetica' }, [
        header,
        m('div', { class: 'flex items-start' }, [
            m(Sidebar), // m(component) consumes the component to generate a view.
            m(Content, { comp: vnode.attrs.comp }),]),
        footer
    ])
}

module.exports = {
    view: view
}