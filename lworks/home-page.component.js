(function() {
    "use strict";

    var module = angular.module("lworksPoc");
        function headerController() {
        var model = this;
        model.gotoList = function()
        {
            // console.log("i m here");
            // model.$router.navigate(["Service"]);
        }
        model.$onInit = function()
        {
            // console.log("This is in main->",model.$route);
        }
    }
    module.component("lworksApp", {
       templateUrl: "/lworks/home-page.component.html",
       $routeConfig: [
           { path: "/...", component:"mainpageComp", name: "Mainpage" }
       ],
        controller:headerController,
        controllerAs:'model',
    });
    


}());