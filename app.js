(function() {
'use strict';
/*jshint multistr: true */

var app = {
  links: [
    'Home',
    'Experience',
    'Education',
    'Publications',
    'Presentations',
    'Software skills',
    'Other'
  ],
  name: 'Sujeevraja Sanjeevi',
  bio: [
    'I am currently employed as a Senior Operations Research Developer in ',
    m('a[href=http://www.sabre.com/]', 'Sabre'),
    '. I work on ',
    m('i', 'Recovery Manager Crew'),
    ', a large scale crew-recovery optimizer.',
    ' I completed my PhD in Industrial Engineering at ',
    m('a[href=https://engineering.tamu.edu/industrial]',
      m.trust('Texas A&M University')),
    '. My advisor was ',
    m('a[href=https://engineering.tamu.edu/industrial/people/kkianfar]',
      'Dr. Kiavash Kianfar'),
    '. I can be reached at firstname26[at]gmail[dot]com.'
  ]
};

app.comingsoon = {
  view: function(ctrl) {
    return m('h3', 'Coming soon.');
  }
};

app.sidebar = {
  controller: function() {
    return { links: app.links };
  },

  view: function(ctrl) {
    var liElems = ctrl.links.map(function(name) {
      return m("li", {}, m('a', {
        onclick: function() {
          m.mount(document.getElementById('current-view'),
            name === 'Home' ? app.homepage : app.comingsoon);
        }
      }, name));
    });

    //liElems.unshift(m("li", {class: "sidebar-brand"},
    //  m("a", {href: "#"}, "Home")));

    return m("ul", {class: "sidebar-nav"}, liElems);
  }
};

app.homepage = {
  controller: function() {
    return {
      name: app.name,
      bio: app.bio
    };
  },
  view: function(ctrl) {
    return m('p', ctrl.bio);
  }
};

m.mount(document.getElementById("sidebar-wrapper"), app.sidebar);
m.mount(document.getElementById("current-view"), app.homepage);
}());

