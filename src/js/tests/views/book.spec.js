import BookView from '../../views/book';
import { Model } from 'backbone';

describe('Backbone view test', function () {

    beforeEach(function () {
        this.model = new Model({
            id: 'abcdefg',
            releaseDate: '2016-01-01',
            title: 'bookTitle',
            author: 'Tom Jane',
            keyword: 'blah blah'
        });
    });

    afterEach(function () {
        this.model = {};
    });

    it('Create view', function () {
        let bookView = new BookView({
            model: this.model
        });
        bookView.render();
        expect(bookView.el.tagName.toLowerCase()).toBe('li');
        expect(bookView.$el.attr('id')).toBe(this.model.get('id'));
        expect(bookView.$el.find('.book-title input').val()).toBe(this.model.get('title'));


        this.model.set('title', 'chackaboom');
        expect(bookView.$el.find('.book-title input').val()).toBe(this.model.get('title'));
    });
});
