'use strict';

import { Model } from 'backbone';

/**
 * Model for add context member
 * @module consumer/models/context_member
 */
export default Model.extend({
    initialize: function () {
        this.on('change', this.render, this);
        this.on('change:title', function () {});
    },

    defaults: {
        coverImage: 'img/placeholder.jpeg',
        title: 'No title',
        author: 'Unknown',
        keywords: 'None',
        currentPage: 0
    },

    // TODO
    // validate: function (attribs) {
    // },

    idAttribute: '_id',

    url: function () {
        let url = 'api/book/';
        if (this.id) {
            url += this.id;
        }
        return url;
    },
    turnPages: function (pages) {
        if (this._checkValidPages(pages)) {
            this.set('currentPage', this.get('currentPage') + pages);
            return true;
        }
        return `Invalid input! ${pages}`;
    },

    // This is just a demo for jasmine spy. Can use validate methods
    _checkValidPages: function (pages) {
        return pages > 0;
    }
});
