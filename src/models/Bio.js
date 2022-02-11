var m = require("mithril")

var Bio = {
    description: [
        'I am an entrepreneur with expertise in leadership roles that require',
        ' working with teams of scientists and developers to bring complex ',
        'software solutions to market. I am currently co-founder and CTO at ',
        m('a', { href: 'https://www.opslab.com' }, 'OpsLab'),
        ', where I lead scientific research and the development of ',
        'cloud-native products that use operations research and machine ',
        'learning to automate the solution of operational problems in ',
        'multiple domains. I am also an active researcher and software ',
        'engineer. I can be reached by email at ',
        m('em', 'sujeev [dot] sanjeevi [at] gmail.'),
    ],

    experience: [
        'After graduation, I spent a year doing post-doctoral research on ',
        'non-linear optimization models at UC Berkeley. Then, I worked in ',
        'the operations research team at Sabre for 8 years, developing and ',
        'later leading the development of optimization solvers to resolve ',
        'large-scale disruptions of crew and aircraft schedules. I also ',
        'worked on revenue management with specific focus on doing ',
        'comparative studies of demand forecasting models.',
    ],

    research: [
        'My research interests are in optimization, machine learning,',
        ' and using them together to create practically usable solutions in ',
        'domains like scheduling and routing. Specifically, I work on ',
        'applications like airline schedule planning, reactive and ',
        'predictive schedule disruption management, routing of VTOL and ',
        'fixed-wing drones, underwater exploration and other transportation ',
        'problems. All my published research can be found in my ',
        m('a', {
            href: 'https://scholar.google.com/citations?user=S2CWoKoAAAAJ&hl=en'
        }, 'Google Scholar profile'),
        '.',
    ],

    software: [
        'I am fairly agnostic of programming languages, and have written a ',
        'lot of code in C++, Java, Kotlin, Python and Julia. Most of the ',
        'production code I currently write is in Kotlin and Python. Among ',
        'cloud providers, I am most comfortable with AWS, having worked with ',
        'their products like EMR (to run PySpark jobs), Athena (for data ',
        'analysis), Lambdas (for small solve jobs) and Fargate (for ',
        'server-side logic and long-running solver jobs). Some of my code can',
        ' be found in my ',
        m('a', {
            href: 'https://github.com/sujeevraja'
        }, 'Github profile'),
        '.'
    ],

    codeSamples: [
        m('a', {
            href: 'https://github.com/sujeevraja/fixed-wing-drone-orienteering',
        }, 'Fixed-wing drone orienteering with parallel branch-and-price (Kotlin)'),
        m('a', {
            href: 'https://github.com/sujeevraja/stochastic-flight-scheduler'
        }, 'A stochastic optimization approach to flight schedule refinement (Java)'),
        m('a', {
            href: 'https://github.com/sujeevraja/PolyhedralRelaxations.jl'
        }, 'Solving non-linear optimization problems with linear relaxations (Julia)'),
    ]
}

module.exports = Bio
