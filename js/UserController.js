angular.module("UserMdl", [])

        .controller("UserCtrl", function ($http, $scope) {

            var vm = this;

            vm.user = {};

            vm.login = function (user) {
                $http.post("php/login.php", {user: user})
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
                $http.post("php/createUser.php", {user: user})
                        .success(function (data, status, headers, config) {
                            if (data.error) {
                                console.log(data);
                            } else {
                                console.log(user);
                                vm.registrationMessage = data;
                            }
                        })
                        .error(function (data, status, headers, config) {
                            console.log(data);
                        });
            };
        });