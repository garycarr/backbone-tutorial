import Marionette from 'backbone.marionette';
import template from '../../templates/layout.hbs';
import LibraryView     from './library.js';

export default Marionette.View.extend({
    el: 'body',

    tagName: 'h1',

    template,

    regions: {
        library: '#library'
    },

    onRender: function () {
        this.showChildView('library', new LibraryView({
        }));
    }
});
