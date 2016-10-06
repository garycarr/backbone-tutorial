import schoolTemplate from '../templates/school.hbs';
import teacherView from './teacher.js';
import teachersView from './teachers.js';
import Marionette from 'backbone.marionette';
import teacherModel from '../models/teacher.js';
import TeachersCollection from '../collections/teachers.js';

export default Marionette.LayoutView.extend({

    el: 'body',

    /**
     * Template used for the root layout view. Contains the elements for the
     * view regions.
     * @type {String}
     * @instance
     */
    template: schoolTemplate,

    regions: {
        'teacher-list': '#teacher-list',
        teacher: '#teacher'
    },

    onRender: function () {
        let teachersCollection = this.tempCreateCollection();
        // Change to a collection of teachers
        this.showChildView('teacher-list', new teachersView({
            collection: teachersCollection
        }));

        // Change to a collection of teachers
        this.showChildView('teacher', new teacherView({
            model: teachersCollection.get(1)
        }));
    },

    // Temp till better understand where to put this
    tempCreateCollection: function () {
        let teachersCollection = new TeachersCollection([
          { id: 1, name:'zones', age: 4 }, { id:2, name:'tom', age: 5 }
        ]);
        teachersCollection.add({ id: 1, name:'gary', age: 6 }); // Will not work
        teachersCollection.add({ id: 2, name:'brandon', age: 7 }, { merge:true }); // Will merge
        teachersCollection.add({ id: 3, name:'carr', age: 6 }); // Creates new teacher
        teachersCollection.add({ id: 4, name:'jane', age: 16 }); // Creates new teacher

        // // Examples over a collection
        // // Sorting
        // let sortedByName = teachersCollection.sortBy(function (model) {
        //     return model.get('name').toLowerCase();
        // });
        // sortedByName.forEach(function (model) {
        //     // console.log(model.keys());
        //     // console.log(model.values());
        //     // console.log(model.pairs());
        // });
        //
        // let modelNames = teachersCollection.map(function (model) {
        //     return model.get('name');
        // });
        //
        // // Another way to get the names
        // let modelNamesPluck = teachersCollection.pluck('name'); // array of names
        //
        // // Filters matching models
        // let specificModels = teachersCollection.filter(function (model) {
        //     return model.get('name') === 'carr';
        // });
        //
        // // Max
        // let oldestUser = teachersCollection.max(function (model) {
        //     return model.get('age');
        // });
        //
        // // gets the index in the array
        // let indexOfCarr = teachersCollection.indexOf(teachersCollection.findWhere({name:'carr'}))
        //
        // console.log(teachersCollection.groupBy(function (model) {
        //     return model.get('age') < 10;
        // }).true);

        return teachersCollection;
    }
});
