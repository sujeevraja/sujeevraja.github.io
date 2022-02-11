var m = require("mithril")

module.exports = {
    view: function (vnode) {
        return m('a',
            { "href": vnode.attrs.url },
            vnode.attrs.name)
    }
}
