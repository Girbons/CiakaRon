angular.module("Ciakaron", [])

        .config(["$routeProvider", function ($routeProvider) {

                $routeProvider.when("/", {
                    templateUrl: "views/calendar.html"
                });

            }]);