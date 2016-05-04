angular.module("Ciakaron", ["UserMdl"])

        .config(["$routeProvider", function ($routeProvider) {

                $routeProvider.when("/", {
                    templateUrl: "views/homepage.html"
                });

            }]);