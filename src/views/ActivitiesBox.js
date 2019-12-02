var m = require("mithril")
var Activities = require("../models/Activities")

module.exports = {
    title: 'Activities',
    view: function () {
        return m('ul', {}, Activities.list.map(function (act) {
            return m('li', { class: 'pa2' }, act)
        }))
    }
}