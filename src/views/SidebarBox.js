var m = require("mithril").default

module.exports = {
    view: function (vnode) {
        var link = vnode.attrs.link
        var name = link.name
        var route = link.route
        return m('a', {
            class: 'link w-100 pa3 mt2 bw0 br3 bg-orange white underline-hover',
            href: route
        }, name)

    }
}