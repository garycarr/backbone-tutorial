import Marionette from 'backbone.marionette';
import Moment from 'moment';
import template from '../../templates/book.hbs';

export default Marionette.View.extend({
    initialize: function () {
        // Listen to changes on the model.
        // this.listenTo(this.model, 'change', this.render);
    },
    tagName: 'form',
    id: function () {
        return this.model.id;
    },
    templateContext: function () {
        return {
            id: this.model.id,
            releaseDate: Moment.unix(this.model.get('releaseDate')).format('DD MMM YYYY HH:mm:ss')
        };
    },
    template
});
