angular.module("UserMdl", [])

        .controller("UserCtrl", function ($http, $scope) {

            var vm = this;

            vm.user = {};

            vm.login = function (user) {
                $http.post("/DigiDay/php/router.php/user/login", {user: user})
                        .success(function (data, status, headers, config) {
                            if (data.error) {
                                console.log(data);
                            } else {
                                console.log(data);
                            }
                        })
                        .error(function (data, status, headers, config) {
                            console.log(data);
                        });
            };

            vm.logout = function () {
                $http.get("/DigiDay/php/router.php/user/logout")
                        .success(function (data, status, headers, config) {
                            if (data.error) {
                                console.log(data);
                            } else {
                                vm.user = {};
                            }
                        })
                        .error(function (data, status, headers, config) {
                            console.log(data);
                        });
            };

            vm.registration = function (user) {
                console.log(user);
                $http.post("/DigiDay/php/router.php/user/create", {user: user})
                        .success(function (data, status, headers, config) {
                            if (data.error) {
                                console.log(data);
                            } else {
                                console.log(user);
                            }
                        })
                        .error(function (data, status, headers, config) {
                            console.log(data);
                        });
            };
        });