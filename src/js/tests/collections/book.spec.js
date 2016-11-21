import Books from '../../collections/books';
// import Book from '../../models/book';

describe('Backbone Collection tests', function () {
    it('Can add Model instances as objects and arrays to collection', function () {
        let author = 'zak black',
            books = new Books(),
            title = 'jasmine tests';

        expect(books.length).toBe(0);
        books.add({
            title: title,
            author: author
        });
        expect(books.length).toBe(1);

        // Check the right thing was added, really this is just testing Backbone
        // so don't do it
        expect(books.find({ title: title }).get('author')).toBe(author);
    });
    //
    // it('should turn the pages', function () {
    //     let book = new Book();
    //
    //     // Check the increment worked
    //     book.turnPages(5);
    //     expect(book.get('currentPage')).toBe(5);
    // });
    //
    // // This test is just a demo for spy
    // it('should turn the pages with a valid page number - spy', function () {
    //     let book = new Book();
    //     spyOn(book, '_checkValidPages').and.returnValue(true);
    //
    //     // Even though whats actually passed in would fail, the mock overrides it
    //     expect(book.turnPages(-5)).toBe(true);
    //     expect(book._checkValidPages).toHaveBeenCalled();
    //     expect(book._checkValidPages).toHaveBeenCalledWith(-5);
    // });
    //
    // // This test is just a demo for spy
    // it('should turn the pages with a invalid page number - spy', function () {
    //     let book = new Book();
    //     spyOn(book, '_checkValidPages').and.returnValue(false);
    //
    //     // Even though whats actually passed in would pass, the mock overrides it
    //     expect(book.turnPages(5)).toBe('Invalid input! 5');
    //     expect(book._checkValidPages).toHaveBeenCalled();
    //     expect(book._checkValidPages).toHaveBeenCalledWith(5);
    // });


});
