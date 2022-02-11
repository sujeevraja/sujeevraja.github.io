var m = require("mithril")

module.exports = {
    view: function (vnode) {
        var title = m('h1',
            { class: 'f3 lh-title' },
            vnode.attrs.title)

        return m('div',
            {
                class: [
                    'mw7', // maximum width
                ].join(' '),
            },
            [title, vnode.children])
    }
}
