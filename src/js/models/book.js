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
        keywords: 'None'
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
    }
});
