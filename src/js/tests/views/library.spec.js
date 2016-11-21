/* global sinon */

import LibraryView from '../../views/library';
import BookCollection from '../../views/library';
import BookModel from '../../models/book';
import $ from 'jquery';

describe('Backbone view test', function () {

    beforeEach(function () {
        this.collection = new BookCollection();
        this.server = sinon.fakeServer.create({
            useFakeServer: true
        });
        this.server.autoRespond = true;
    });

    afterEach(function () {
        this.server.restore();
    });

    it('Save new model to server', function () {
        this.server.respondWith('POST', 'api/book/',
            [200, { 'Content-Type': 'application/json' },
                '{ "id": "12" }']);

        let libraryView = new LibraryView({
            // collection: this.collection
        });
        libraryView.render();
        let author = 'Jim Smith',
            title = 'Class book';

        let book = new BookModel({
            author: author,
            title: title
        });
        let ajaxSpy = sinon.spy($, 'ajax');
        libraryView.addBook(book, false);

        expect(ajaxSpy.calledOnce).toBe(true);
        expect(ajaxSpy.getCall(0).args[0].type).toBe('POST');
        expect(ajaxSpy.getCall(0).args[0].contentType).toBe('application/json');
        expect(ajaxSpy.getCall(0).args[0].dataType).toBe('json');
        expect(ajaxSpy.getCall(0).args[0].url).toBe('api/book/');
        expect(book.get('id')).toBe('12');
    });


});
