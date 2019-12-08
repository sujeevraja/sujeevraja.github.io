var m = require("mithril")
var Sidebar = require("./Sidebar")
var Content = require("./Content")

// For further details about this design, especially the use of "vnode", check
// the "Wrapping a layout component" section in the following link:
//
// https://mithril.js.org/route.html#advanced-component-resolution
var view = function (vnode) {
    var link = m('a',
        { href: '/', class: 'no-underline white f4' },
        'Sujeevraja "Sujeev" Sanjeevi')

    var header = m('div',
        { class: 'bg-dark-green white pa3 tc' },
        link)

    var content = m(Content, {
        title: vnode.attrs.title
    }, vnode.children)

    var body = m('div',
        { class: 'flex items-start' },
        [m(Sidebar), content])

    var footer = m('div',
        { class: 'fixed tc left-0 bottom-0 right-0 bg-light-gray gray pa4' },
        [
            'Built from scratch with ',
            m('a', { href: 'http://tachyons.io/' }, 'Tachyons'),
            ' and ',
            m('a', { href: 'https://mithril.js.org/' }, 'MithrilJS'),
            '.'
        ])


    // m(component) consumes the component to generate a view.
    return m('div',
        { class: 'helvetica' },
        [header, body, footer])
}

module.exports = {
    view: view
}
