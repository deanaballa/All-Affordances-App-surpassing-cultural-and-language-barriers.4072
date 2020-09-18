


const template = require('./template.pug');

require("./style.css");

export default Backbone.View.extend({
    el: "#nav-container",
    events: {

    },

    initialize() {
        this.render()
            .then(()=> {
                this.initElements();
                /*Init dropdown*/
            })
    },

    render() {

        return new Promise(resolve => {
            $(this.el).empty(); // add this to BaseView



            resolve(this.$el.html(
                template({

                })
                )
            );
        });
    },

    initElements() {

        this.$dropdown = this.$('.dropdown-trigger');

    },

});
