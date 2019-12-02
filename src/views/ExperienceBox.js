var m = require("mithril")
var Experience = require("../models/Experience")

var experienceView = function (ex) {
    var children = [
        m('b', ex.role),
        m('br'),
        m('i', ex.group + ', ' + ex.organization),
        m('br'), ex.location,
        m('br'),
        ex.start, ' - ', ex.end]
    return m("li", { class: "pa2" }, children)
}

module.exports = {
    oninit: Experience.loadList,
    title: 'Work Experience',
    view: function () {
        return m("ul", {}, Experience.list.map(experienceView))
    }
}