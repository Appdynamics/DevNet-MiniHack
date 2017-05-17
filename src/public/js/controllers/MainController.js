/**
 * Created by stephanie.chou on 8/12/16.
 */

(function() {
    var app = angular.module('mainController', []);

    app.controller('mainController', function(
            $scope,
            $http,
            $location) {

            $scope.ready = false;

            $scope.init = function () {
                $scope.ready = true;
            };

            $scope.navigateTo = function (path) {
                $location.path("/" + path);
            };
        
            $scope.init();
        }
    );
}).call(this);
