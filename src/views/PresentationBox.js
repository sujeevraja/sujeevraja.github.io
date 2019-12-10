var m = require("mithril")
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

    if (pres.hasOwnProperty("pdf")) {
        children.push(' ')
        var name = pres.type === "poster" ? "[poster]" : "[slides]"
        var link = "assets/" + pres.pdf
        children.push(m('a', { "href": link }, name))
    }

    children.push('.')
    return m("li", { class: "pa2" }, children)
}

module.exports = {
    oninit: function() {
        if (!Presentation.loaded) Presentation.loadList()
    },
    title: 'Presentations',
    view: function () {
        return m("ul", Presentation.list.map(presentationView))
    }
}
