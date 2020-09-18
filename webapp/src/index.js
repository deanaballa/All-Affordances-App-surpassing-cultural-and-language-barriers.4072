import Router from "./controllers/init/router";

function initRoutes() {
  window.router = new Router();
  Backbone.history.start({pushState: true});
}
    initRoutes();