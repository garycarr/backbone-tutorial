import Book from '../../models/book';

describe('Backbone model test', function () {

    it('Create model with defaults', function () {
        let book = new Book();
        expect(book.get('coverImage')).toBe('img/placeholder.jpeg');
        expect(book.get('author')).toBe('Unknown');
        expect(book.get('title')).toBe('No title');
        expect(book.url()).toBe('api/book/');

        let id = 'abcdefg';
        book.id = id;
        expect(book.url()).toBe(`api/book/${id}`);
    });

    it('should turn the pages', function () {
        let book = new Book();

        // Check the increment worked
        book.turnPages(5);
        expect(book.get('currentPage')).toBe(5);
    });

    // This test is just a demo for spy
    it('should turn the pages with a valid page number - spy', function () {
        let book = new Book();
        spyOn(book, '_checkValidPages').and.returnValue(true);

        // Even though whats actually passed in would fail, the mock overrides it
        expect(book.turnPages(-5)).toBe(true);
        expect(book._checkValidPages).toHaveBeenCalled();
        expect(book._checkValidPages).toHaveBeenCalledWith(-5);
    });

    // This test is just a demo for spy
    it('should turn the pages with a invalid page number - spy', function () {
        let book = new Book();
        spyOn(book, '_checkValidPages').and.returnValue(false);

        // Even though whats actually passed in would pass, the mock overrides it
        expect(book.turnPages(5)).toBe('Invalid input! 5');
        expect(book._checkValidPages).toHaveBeenCalled();
        expect(book._checkValidPages).toHaveBeenCalledWith(5);
    });


});
