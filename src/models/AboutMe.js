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
}

module.exports = Bio
