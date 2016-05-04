angular.module("UserMdl", [])

        .controller("UserCtrl", function ($http, $scope) {

            var vm = this;

            vm.user = {};

            vm.getUser = function () {
                $http.get("php/user.php")
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
            vm.getUser();

            vm.login = function (user) {
                $http.post("php/login.php", {user: user})
                        .success(function (data, status, headers, config) {
                            if (data.error) {
                                console.log(data);
                            } else {
                                console.log(data);
                                vm.getUser();
                            }
                        })
                        .error(function (data, status, headers, config) {
                            console.log(data);
                        });
            };

            vm.logout = function () {
                $http.get("php/logout.php")
                        .success(function (data, status, headers, config) {
                            if (data.error) {
                                console.log(data);
                            } else {
                                console.log(data);
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