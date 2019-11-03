var m = require("mithril").default
var Presentation = require("../models/Presentation")

var presentationView = function (pres) {
    var children = [
        m('i', pres.title),
        ', ', pres.type,
        m('br'),
        pres.location,
        ', ', pres.date,
    ]

    if (pres.hasOwnProperty("presenter") === true) {
        children.push(m('br'))
        children.push('presenter: ' + pres.presenter)
    }

    if (pres.hasOwnProperty("slides")) {
        children.push(' ')
        var slidesLink = "assets/slides/" + pres.slides
        children.push(m('a', {"href": slidesLink}, "[slides]"))
    }

    children.push('.')
    return m("li", { class: "pa2" }, children)
}

module.exports = {
    oninit: Presentation.loadList,
    title: 'Presentations',
    view: function () {
        return m("ul", Presentation.list.map(presentationView))
    }
}
