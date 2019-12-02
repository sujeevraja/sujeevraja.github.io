var m = require("mithril")

module.exports = {
    view: function (vnode) {
        var link = vnode.attrs.link
        var name = link.name
        var route = link.route
        return m('a', {
            class: 'w-100 pa3 mt2 ml1 bw0 br3 tl bg-dark-green no-underline white dim',
            href: route
        }, name)

    }
}