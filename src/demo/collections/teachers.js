import Backbone from 'backbone';
import Teacher from '../models/teacher.js';

export default Backbone.Collection.extend({
    model: Teacher,

    initialize: function () {
        this.on('add', function () {
            console.log('adding a new instructor');
        });

        this.on('reset', function () {
            console.log('Resetting the instructors');
        });
    }

});
