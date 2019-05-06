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
        ', a large-scale crew recovery solver.',
        m('br'),
    ],

    email: 'sujeev.sanjeevi@gmail.com',

    responsibilities: [
        'I help build, maintain and enhance optimization solvers that ',
        'resolve airline disruptions with minimal impact to operations. ',
        'I coordinate with development and delivery teams to calibrate ',
        'products so that they provide satisfactory solutions to customers.',
        ' I also work directly with customers to translate requirements into ',
        'product features and implementing them. I actively collaborate with ',
        'academia to keep up with cutting edge research and infuse new ideas ',
        'into products to improving quality, performance and customer ',
        'satisfaction.'],

    research: [
        'I am currently interested in solving using a mix of large scale ',
        'optimization techniques and heuristics to achieve reasonable ',
        'solutions to real-world problems quickly. Techniques I incorporate ',
        'include ',
        m('a', { href: 'https://en.wikipedia.org/wiki/Column_generation' }, 'Column generation'),
        ', ',
        m('a', { href: 'https://en.wikipedia.org/wiki/Benders_decomposition' },
            'Benders decomposition'),
        ' and metaheuristics such as ',
        m('a', { href: 'https://en.wikipedia.org/wiki/Variable_neighborhood_search' },
            'Variable neighborhood search.')
    ],

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