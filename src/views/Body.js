var m = require("mithril")
var Header = require('./Header')
var Content = require('./Content')
var Footer = require('./Footer')

// For further details about this design, especially the use of "vnode", check
// the "Wrapping a layout component" section in the following link:
//
// https://mithril.js.org/route.html#advanced-component-resolution
var view = function (vnode) {
    // m(component) consumes the component to generate a view.
    var content = m(Content, {
        title: vnode.attrs.title
    }, vnode.children)

    return m('div',
        {
            class: [
                'helvetica', // font
                'pa5' // Padding on all sides
            ].join(' ')
        },
        [
            m(Header),
            m('div',
                { class: 'bg-white black-70' },
                [content]
            ),
            // m('div', { class: 'flex items-start' }, [content]),
            m(Footer)
        ])
}

module.exports = {
    view: view
}
