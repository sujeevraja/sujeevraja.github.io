var m = require("mithril").default
var PublicationList = require("../views/PublicationList")

module.exports = {
    view: function () {
        return m('div', { class: 'shadow-1 br3 w-100 pa3 mt2 ml2' },
            m(PublicationList))
    }
}