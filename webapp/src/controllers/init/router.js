import Main from "../../views/pages/main/main";
import Nav from "../../views/pages/nav/nav";
export default Backbone.Router.extend({

  routes: {
    "": "main",
    "/": "main",


  },

  preinitialize() {

  },

  initialize: function () {

  },

  main: function () {
    new Main();
    new Nav;
  },


});
