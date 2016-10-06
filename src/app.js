'use strict';

import Marionette from 'backbone.marionette';
import SchoolView from './demo/views/school';

/**
 * The applications class used in @see module:main to start. This module sets up
 * everything needed to start the app.
 *
 * @module application
 */
export default Marionette.Application.extend({
    loadInitialData: function () {
        return Promise.resolve();
    },

    onStart: function () {
        // create and render the root view
        let appRootLayoutView = new SchoolView();
        appRootLayoutView.render();
    }
});
