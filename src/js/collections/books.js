'use strict';

import { Collection } from 'backbone';
import Book from './../models/book';

/**
 * Collection view for context used for the member list view.
 * @module consumer/collections/context_members
 */
export default Collection.extend({
    model: Book
});
