import Backbone   from 'backbone';
import Marionette from 'backbone.marionette';
import LayoutView     from './js/views/layout.js';

export default Marionette.Application.extend({
  /**
   * Marionette callback called when start is called on the application
   * instance.
   */
    onStart () {
        this.layoutView = new LayoutView();
        this.layoutView.render();

        // TODO - Need to create router

        Backbone.history.start();
    }
});
