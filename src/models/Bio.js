var m = require("mithril").default

var Bio = {
    description: [
        'I am currently part of the ',
        m('i', 'Airline Solutions Operations Research (ASOR)'),
        ' group at ',
        m('a', { href: 'https://www.sabre.com/' }, 'Sabre'),
        '. I lead the development of ',
        m('i', 'Recovery Manager Ops'),
        ', a large-scale optimization solver ',
        'for aircraft disruption management.',
        ' I previously worked on ',
        m('i', 'Recovery Manager Crew'),
        ', a large-scale crew recovery solver.'
    ],

    email: 'sujeev[dot]sanjeevi[at]gmail[dot]com',

    interests: [
        "Airline Disruption Management",
        "Airline Scheduling",
        "Large Scale Optimization",
        "Mathematical Programming",
        "Transportation",
        "Vehicle Routing"
    ]
}

module.exports = Bio