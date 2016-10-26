'use strict';

import { Model } from 'backbone';

/**
 * Model for add context member
 * @module consumer/models/context_member
 */
export default Model.extend({
    defaults: {
        coverImage: 'img/placeholder.jpeg',
        title: 'No title',
        author: 'Unknown',
        keywords: 'None'
    },

    idAttribute: '_id'
});
