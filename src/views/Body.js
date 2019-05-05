var m = require("mithril").default
var Sidebar = require("./Sidebar")
var Content = require("./Content")

var view = function (vnode) {
    return m('div', { class: 'helvetica pa2' }, [
        m('div', { class: 'flex items-start' }, [
            m(Sidebar), // m(component) consumes the component to generate a view.
            m(Content, { comp: vnode.attrs.comp }),
        ])])
}

module.exports = {
    view: view
}