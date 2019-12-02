var m = require("mithril").default

module.exports = {
    view: function (vnode) {
        var title = m('h1',
            { class: 'f3 lh-title' },
            vnode.attrs.title)

        return m('div',
            { class: 'shadow-1 br3 w-100 pa3 mt2 ml3 mr2 mb6', id: 'content' },
            [ title, vnode.children ])
    }
}
