let m = require("mithril")
let Bio = require("../models/Bio")

module.exports = {
    title: 'About me',
    view: function () {
        const codeSamples = m('ul', Bio.codeSamples.map((sample) => {
            return m("li", sample)
        }))

        return [
            m('p', Bio.description),
            m('h1', { class: 'f4 lh-title' }, 'Experience'),
            Bio.experience,
            m('h1', { class: 'f4 lh-title' }, 'Research'),
            Bio.research,
            m('h1', { class: 'f4 lh-title' }, 'Software'),
            Bio.software,
            m('h1', { class: 'f4 lh-title' }, 'Code Samples'),
            codeSamples,
        ]
    }
}
