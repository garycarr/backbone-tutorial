import Marionette from 'backbone.marionette';
import BooksCollection from '../collections/books.js';
import BookModel from '../models/book.js';
import template from '../../templates/library.hbs';
import BooksCollectionView from './booksCollectionView.js';
import _ from 'underscore';
import $ from 'jquery';
import moment from 'moment';
import faker from 'faker';

export default Marionette.View.extend({
    template,

    collection: new BooksCollection(),

    initialize: function () {
        this.collection.on('add remove reset', _.bind(this.render, this));
        this.collection.fetch();
    },

    events:{
        'click #add': 'addBook',
        'click .delete': 'removeBook'
    },

    regions: {
        books: '#books',
        bookCollection: '#bookCollection'
    },

    onRender: function () {
        this.showChildView('bookCollection', new BooksCollectionView({
            collection: this.collection
        }));
    },

    addBook: function (e) {
        e.preventDefault();
        let formData = {},
            that = this;

        $('#addBook div').children('input').each(function (i, el) {
            if ($(el).val() !== '') {
                if (el.id === 'keywords') {
                    formData[el.id] = [];
                    _.each($(el).val().split(' '), function (keyword) {
                        formData[el.id].push({ keyword: keyword });
                    });
                } else if (el.id === 'releaseDate') {
                    formData[el.id] = $(el).val();
                } else {
                    formData[el.id] = $(el).val();
                }
            } else {
                // For dev, quickly make fake names
                formData = that.fakeBookDetails(el.id, formData);
            }
        });

        let book = new BookModel(formData);
        book.save({}, {
            success: function (model) {
                that.collection.add(model);
            },
            error: function () {
                // console.log(xhr)
                console.log('Something went wrong while saving the model');
            }
        });
    },


    removeBook: function (e) {
        e.preventDefault();
        let bookID = e.currentTarget.getAttribute('data-id');
        this.collection.get(bookID).destroy();
    },

    fakeBookDetails: function (elementID, formData) {
        if (elementID === 'title') {
            formData[elementID] = faker.random.words();
        } else if (elementID === 'author') {
            formData[elementID] = faker.name.findName();
        } else if (elementID === 'releaseDate') {
            formData[elementID] = moment(faker.date.past()).unix();
        }
        return formData;
    }

});
