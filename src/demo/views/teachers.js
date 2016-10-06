import Marionette from 'backbone.marionette';
import template from '../templates/teachers.hbs';
import _ from 'underscore';

export default Marionette.ItemView.extend({
    template: template,

    templateHelpers: function () {
        return {
            collection: this.collection
        };
    },

    events: {
        'click #add-teacher': 'addTeacher',
        'click #remove-teacher': 'removeTeacher',
        'click #reset-teacher': 'resetTeachers'
    },

    initialize: function () {
        // Updates the view on model changes
        this.collection.on('add remove reset', _.bind(this.render, this));
        // this.tempEventsListenTo();
    },

    tempEventsListenTo: function () {
        let objA = _.extend({}, Backbone.Events);
        let objB = _.extend({}, Backbone.Events);
        let objC = _.extend({}, Backbone.Events);

        objA.listenTo(objB, 'run:fast', function (event) {
        })
        objB.trigger('run:fast', 'whatever string');
        objA.stopListening();
        objB.trigger('run:fast', 'wont do anything');

        // .remove also calls stops listening
    },

    // Temp func to show on, off. On adds events to an object
    tempEventsON: function () {
        let ourObject = {};
        _.extend(ourObject, Backbone.Events);
        ourObject.on('anEvent:party', function (msg) {
            // console.log('we had a awesome '  + msg);
        });
        ourObject.on('anEvent:quiet', function (msg) {
            // console.log('we had a nice '  + msg);
        });
        ourObject.trigger('anEvent:party', 'rave');
        ourObject.trigger('anEvent:quiet', 'cup of tea');

        ourObject.trigger('anEvent:party anEvent:quiet', 'netflix'); // more than one trigger
        ourObject.trigger('anEvent:quiet', 'cup of tea');

        ourObject.trigger('anEvent', 'not gonna work'); // nothing is listening

        ourObject.on('all', function () {
            // console.log('everything works ');
        });
        ourObject.trigger('anEvent'); // now it is being listened to
        ourObject.off('all');
        ourObject.trigger('anEvent'); // now it is not being listened to

        // multiple events to the callback
        ourObject.on('anEvent:multiple', function (msg, msg2) {
            // console.log('I went to a '  + msg + ' and a ' + msg2);
        });
        ourObject.trigger('anEvent', 'restaurant', 'club'); // now it is not being listened to
        return;
    },

    // addTeacher: _once.function () { //would only perform this once
    addTeacher: function () {
        // Create without sending to the server
        // this.collection.add({
        //     name: 'Badger',
        //     age: 8
        // });
        this.collection.create({
            name: 'Badger',
            age: 8
        });
    },

    resetTeachers: function () {
        this.collection.reset();
    },

    removeTeacher: function () {
        this.collection.pop();
    }
    //
    // onRender: function () {
    //     // The element has already been rendered at this point
    // }
});
