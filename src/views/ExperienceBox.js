var m = require("mithril")
var Experience = require("../models/Experience")

var experienceView = function (ex) {
    let children = [
        m('b', ex.role),
        m('br'),
        (ex.group !== undefined
            ? m('i', ex.group + ', ' + ex.organization)
            : m('i', ex.organization)),
        m('br'),
        ex.location,
        m('br'),
        ex.start,
        ' - ',
        ex.end,
    ]
    return m("li", { class: "pa2" }, children)
}

module.exports = {
    oninit: function () {
        if (!Experience.loaded) Experience.loadList()
    },
    title: 'Work Experience',
    view: function () {
        return m("ul", {}, Experience.list.map(experienceView))
    }
}
