var m = require("mithril").default
var PublicationList = require("../views/PublicationList")

module.exports = {
    view: function () {
        return m('div', { class: 'shadow-5 br3 w-100 pa3 mt2' },
            m(PublicationList))
    }
}