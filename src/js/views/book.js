import Marionette from 'backbone.marionette';
import Moment from 'moment';
import template from '../../templates/book.hbs';

export default Marionette.View.extend({
    templateContext: function () {
        return {
            cid: this.model.cid,
            releaseDate: Moment.unix(this.model.get('releaseDate')).format('DD MMM YYYY HH:mm:ss')
        };
    },
    template
});
