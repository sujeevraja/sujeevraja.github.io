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
  bio: 'I am currently employed as a Senior Operations Research Developer \
    in Sabre. I work on Recovery Manager Crew , a large-scale crew recovery \
    optimizer. I completed my PhD in Industrial Engineering at \
    Texas A&M University in August 2012. My advisor was \
    Dr. Kiavash Kianfar. I can be contacted at \
    [firstname]26[at]gmail[dot]com.'
};

app.sidebar = {
  controller: function() {
    return { links: app.links };
  },

  view: function(ctrl) {
    var liElems = ctrl.links.map(function(name) {
      return m("li", {}, m('a', {href: "#"}, name));
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
    return [
      m("h1", ctrl.name),
      m("br"),
      m("br"),
      m("p", ctrl.bio)
    ];
  }
};

m.mount(document.getElementById("sidebar-wrapper"), app.sidebar);
m.mount(document.getElementById("current-view"), app.homepage);
}());

