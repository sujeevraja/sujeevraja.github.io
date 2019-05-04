var m = require("mithril").default
var PublicationList = require("../views/PublicationList")

module.exports = {
    view: function () {
        var contentBoxes = [
            'bio box',
            'experience box',
            'education box',
            m(PublicationList),
            'presentations box',
            'other box']

        var boxes = contentBoxes.map(function (comp) {
            return m('div', { class: 'shadow-1 br3 w-100 pa3 mt2' }, comp)
        })

        return m('div', { class: 'flex flex-column w-100 ml2' }, boxes)
    }
}