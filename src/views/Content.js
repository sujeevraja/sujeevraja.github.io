var m = require("mithril").default

module.exports = {
    view: function (vnode) {
        return m('div', {
            class: 'shadow-1 br3 w-100 pa3 mt2 ml3 mr2',
            id: 'content'
        }, m(vnode.attrs.comp))
    }
}