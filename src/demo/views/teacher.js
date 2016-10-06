import Marionette from 'backbone.marionette';
import template from '../templates/teacher.hbs';
import _ from 'underscore';

export default Marionette.ItemView.extend({
    template: template,

    templateHelpers: function () {
        return {
            name: this.model.get('name'),
            age: this.model.get('age')
        };
    },

    events: {
        'click #increment-age': 'incrementAge',
        'click #get-user': 'getUser',
        'click #save-user': 'saveUser',
        'click #create-user': 'createUser',
    },

    initialize: function () {
        // Updates the view on model changes
        this.model.on('change', _.bind(this.render, this));
    },

    getUser: function () {
        this.model.fetch();
    },

    saveUser: function () {
        this.model.save();
    },

    incrementAge: function () {
        this.model.incrementAge();
    },

    onRender: function () {
        // The element has already been rendered at this point
    }
});
