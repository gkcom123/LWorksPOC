(function () {
    "use strict";

    var module = angular.module("lworksPoc");
    
function controller() {
    var model = this;
    model.goTo = function () {
        console.log("hi");
        model.$router.navigate(["Search"]);
    }
}
    module.component("service", {
        templateUrl: "/lworks/service.component.html",
        controllerAs: "model",
        controller:  controller,
        bindings: {
            "$router": "<"
        }
        
    });

   

} ());