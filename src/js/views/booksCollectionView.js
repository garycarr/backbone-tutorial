import Marionette from 'backbone.marionette';
import BookView from './book.js';

export default Marionette.CollectionView.extend({
    tagName: 'ul',
    id: 'book-list',
    childView: BookView
});
