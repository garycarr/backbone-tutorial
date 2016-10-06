
import Backbone from 'backbone';

export default Backbone.Model.extend({
    initialize: function () {
        this.on('change', function () {});
    },

    defaults: {
        age:20,
        name: 'Teacher 1'
    },

    incrementAge: function () {
        let newAge = this.get('age') + 1;
        this.set('age', newAge);
    },

    url: function () {
        let urlRoot = '/teacher/';
        if (this.id) {
            urlRoot = `${urlRoot}${this.id}`;
        }
        return urlRoot;
    }
});
