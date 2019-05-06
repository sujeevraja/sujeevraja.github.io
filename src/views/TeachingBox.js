var m = require("mithril").default

module.exports = {
    title: 'Teaching',
    view: function () {
        return m('p', [
            'I taught an undergraduate course titled ',
            m('i', 'Economic Analysis of Engineering Projects'),
            ' at Texas A&M University in Spring 2012.'])
    }
}