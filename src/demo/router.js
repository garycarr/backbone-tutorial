import Backbone from 'backbone';

let SchoolRouter = Backbone.Router.extend({
    routes: {
        'about': 'showAbout',

        '*other': 'defaultRoute'
    },
    showAbout: function () {
        console.log('about this site');
    },

    defaultRoute: function () {
        console.log('this is the default');
    }
});

let schoolRouter = new SchoolRouter();

Backbone.history.start();
