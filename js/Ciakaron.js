angular.module("CiakaronMdl", ["ngRoute", "UserMdl"])

        .config(["$routeProvider", function ($routeProvider) {

                $routeProvider.when("/", {
                    templateUrl: "views/homepage.html"
                });
                $routeProvider.when("/registrati", {
                    templateUrl: "views/registration.html"
                });
                $routeProvider.when("/login", {
                    templateUrl: "views/login.html"
                });

            }]);
