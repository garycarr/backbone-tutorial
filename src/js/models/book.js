'use strict';

import { Model } from 'backbone';

/**
 * Model for add context member
 * @module consumer/models/context_member
 */
export default Model.extend({
    initialize: function () {
        // _.bindAll(this, 'render')
        this.on('change', this.render, this);
    },

    defaults: {
        coverImage: 'img/placeholder.jpeg',
        title: 'No title',
        author: 'Unknown',
        keywords: 'None'
    },

    idAttribute: '_id',

    url: function () {
        let url = 'api/book/';
        if (this.id) {
            url += this.id;
        }
        return url;
    }
});
