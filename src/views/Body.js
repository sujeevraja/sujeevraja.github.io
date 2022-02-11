var m = require("mithril")
var Header = require('./Header')
var Content = require('./Content')
var Footer = require('./Footer')

// For further details about this design, especially the use of "vnode", check
// the "Wrapping a layout component" section in the following link:
// https://mithril.js.org/route.html#advanced-component-resolution
module.exports = {
    view: function (vnode) {
        // m(component) consumes the component to generate a view.
        return m('div',
            {
                class: [
                    'helvetica', // font
                    'pa5', // Padding on all sides
                    'bg-white', // white background
                    'black-70', // text color
                ].join(' ')
            },
            [
                m(Header),
                m(Content, {
                    title: vnode.attrs.title
                }, vnode.children),
                m(Footer)
            ])
    }
}
