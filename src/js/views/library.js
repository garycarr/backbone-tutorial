import Marionette from 'backbone.marionette';
import BooksCollection from '../collections/books.js';
import template from '../../templates/library.hbs';
import BooksCollectionView from './booksCollectionView.js';
import _ from 'underscore';
import $ from 'jquery';
import Moment from 'moment';

export default Marionette.View.extend({
    template,

    collection: new BooksCollection(),

    initialize: function () {
        this.collection.on('add remove reset', _.bind(this.render, this));
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
        let formData = {};

        $('#addBook div').children('input').each(function (i, el) {
            if ($(el).val() !== '') {
                if (el.id === 'keywords') {
                    formData[el.id] = [];
                    _.each($(el).val().split(' '), function (keyword) {
                        formData[el.id].push({ 'keyword': keyword });
                    });
                } else if (el.id === 'releaseDate') {
                    formData[el.id] = $(el).val();
                } else {
                    formData[el.id] = $(el).val();
                }
            }
        });

        if (!formData.releaseDate) {
            formData.releaseDate = Moment().unix();
        }
        this.collection.add(formData);
    },


    removeBook: function (e) {
        e.preventDefault();
        this.collection.remove(e.currentTarget.getAttribute('data-cid'));
    }

});
