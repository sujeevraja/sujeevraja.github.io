var m = require("mithril")

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
        'I currently use a mix of large scale optimization techniques and ',
        'heuristics to achieve reasonable solutions to real-world problems ',
        'quickly. Techniques I incorporate include ',
        m('a', { href: 'https://en.wikipedia.org/wiki/Column_generation' },
            'Column generation'),
        ', ',
        m('a', { href: 'https://en.wikipedia.org/wiki/Benders_decomposition' },
            'Benders decomposition'),
        ' and metaheuristics such as ',
        m('a', { href: 'https://en.wikipedia.org/wiki/Variable_neighborhood_search' },
            'Variable neighborhood search.'),
        ' I have also done theoretical research on finding new strong ',
        m('a', { href: 'https://en.wikipedia.org/wiki/Cutting-plane_method' },
            'cutting planes'),
        ' for linear and non-linear optimization problems.'
    ],

    software: [
        'I write production code in C++ and rely on Python3 for scripting. ',
        'I have written code in C++, Java, Julia, Kotlin and Python for my ',
        'research work. I use ',
        m('a', { href: 'https://www.ibm.com/analytics/cplex-optimizer' },
            'CPLEX'),
        ' to solve optimization problems when available and ',
        m('a', { href: 'https://projects.coin-or.org/Clp' }, 'CLP'),
        ' or ',
        m('a', { href: 'https://projects.coin-or.org/Cbc' }, 'CBC'),
        ' from the ',
        m('a', { href: 'https://www.coin-or.org/' }, 'COIN-OR'),
        ' project otherwise. I switch between ',
        m('a', { href: 'https://www.jetbrains.com/idea/' }, 'Idea'),
        ', ',
        m('a', { href: 'https://code.visualstudio.com/' }, 'VSCode'),
        ', and ',
        m('a', { href: 'https://www.sublimetext.com/' }, 'Sublime'),
        ' to write code, but never without a Vim emulation layer.'],

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
