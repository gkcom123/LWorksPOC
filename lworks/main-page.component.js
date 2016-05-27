(function () {
    "use strict";

    var module = angular.module("lworksPoc");
    function controller() {

        var model = this;

        model.$onInit = function () {
            // console.log("IN init",model.$router);
        };

        model.goTo = function () {
            // console.log("i m -",model.$router);
            model.$router.navigate(["Footer"]);
            //model.$router.navigate(["Details", {id:id}, "Overview"]);
        };
        model.gotoList = function () {
            // console.log("i m here");
            model.$router.navigate(["Register"]);
        };

    }

    module.component("mainpageComp", {
        templateUrl: "/lworks/main-page.component.html",
        controllerAs: "model",
        controller:  controller,
        $routeConfig: [
            { path: "/register", component: "register", name: "Register" },
            { path: "/", component: "service", name: "Service" },
            { path: "/login/", component:"login", name: "Login"},
            { path: "/footer", component:"footer", name: "Footer"},
            { path: "/search", component:"search", name: "Search"}
           
        ],
        bindings: {
            "$router": "<"
        }
    });
    module.component("register", {
        template: "This is the register"
    });
   
    module.component("login", {
        template: "This is the login"
    });
    module.component("footer", {
        template: "This is the footer"
    });
    module.component("search", {
        template: "This is the Search"
    });

} ());