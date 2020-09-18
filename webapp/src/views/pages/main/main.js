import { showLoader, hideLoader } from "../../../controllers/utils/loader-utils";
const template = require('./template.pug');
//require("./style.css");

export default Backbone.View.extend({
    el: " #main-container",
    events: {

    },

    initialize() {
        this.render()
            .then(()=>{
                hideLoader();
                this.initElements();
                this.$dropdown.dropdown({
                    coverTrigger: false,
                    constrainWidth: false
                });
            });
    },

    render() {
        return new Promise(resolve => {
            resolve(this.$el.html(template));
        });
    },

    initElements() {
        this.$dropdown = this.$('.dropdown-trigger');
    },

});
