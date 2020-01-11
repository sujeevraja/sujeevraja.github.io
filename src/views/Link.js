var m = require("mithril")

module.exports = {
    view: function (vnode) {
        var name = vnode.attrs.name
        var url = vnode.attrs.url

        return m('a', { "href": vnode.attrs.url }, vnode.attrs.name)
    }
}
