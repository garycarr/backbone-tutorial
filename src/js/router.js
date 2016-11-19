import Marionette from 'backbone.marionette';
// import controller from './controllers/controller';

/**
 * This is the application router which defines the routes available.
 * @module application/routers/app_router
 */
export default Marionette.AppRouter.extend({

    // controller: controller,
    /**
     * This is where the routes are defined.
     * @type {Object}
     */
    appRoutes: {
        helloWord: 'helloWorld' // not working
    }
});
