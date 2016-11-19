import Book from '../../models/book';

describe('Backbone model test', function () {
    it('Can add Model instances as objects and arrays.', function () {
        let book = new Book();
        expect(book.get('coverImage')).toBe('img/placeholder.jpeg');
        expect(book.get('author')).toBe('Unknown');
        expect(book.get('title')).toBe('No title');
    });
});
