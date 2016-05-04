angular.module("UserMdl", [])

        .controller("UserCtrl", function ($http) {

            var vm = this;

            vm.user = {};

            vm.getUser = function () {
                $http.get("php/user.php")
                        .success(function (data, status, headers, config) {
                            if (data.error) {
                                console.log(data);
                            } else {
                                console.log(data);
                                vm.user.username = data.user.username;
                                vm.user.firstName = data.user.firstName;
                                vm.user.lastName = data.user.lastName;
                                vm.user.birthdate = data.user.birthdate;
                            }
                        })
                        .error(function (data, status, headers, config) {
                            console.log(data);
                        });
            };
            vm.getUser();

            vm.isAuthenticated = function () {
                if (vm.user != null) {
                    return true;
                } else {
                    return false;
                }
            };

            vm.login = function (user) {
                $http.post("php/login.php", {user: user})
                        .success(function (data, status, headers, config) {
                            if (data.error) {
                                console.log(data);
                            } else {
                                console.log(data);
                                vm.getUser();
                            }
                            vm.loginMessage = data.message;
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