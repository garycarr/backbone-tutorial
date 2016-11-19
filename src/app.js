import Backbone   from 'backbone';
import Marionette from 'backbone.marionette';
import LayoutView     from './js/views/layout.js';
import AppRouter     from './js/router';
import AppController from './js/controllers/controller';

export default Marionette.Application.extend({
  /**
   * Marionette callback called when start is called on the application
   * instance.
   */
    onStart () {
        this.layoutView = new LayoutView();
        this.layoutView.render();

        // TODO - Need to create router
        this.appRouter = this.createAppRouter(this.layoutView);
        Backbone.history.start();
    },
        /**
     * Given the root view will create the app controller (which requires the
     * root view) and router. Returns the app router when done.
     * @param  {View} appLayout The root Backbone view instance
     * @return {Router}         The app router
     */
    // createAppRouter: function (appLayout) {
    //     return new AppRouter({
    //         controller: new AppController({
    //             layout: appLayout
    //         })
    //     });
    // }

    createAppRouter: function (appLayout) {
        return new AppRouter({
            controller: new AppController({
                layout: appLayout
            })
        });
    }
});
