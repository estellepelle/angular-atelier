'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
    .controller('MainCtrl', ['$scope', function ($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.tabPersonne = [{
            nom: "meerbeck",
            prenom: "heidi"
            }, {
            nom: "hendrickx",
            prenom: "jan"
            }, {
            nom: "descheemaeker",
            prenom: "luc"
            }, {
            nom: "clohse",
            prenom: "sylvia"
            }];
        
        $scope.savePersonne = function(){
            console.log($scope.ajoutPersonne.nom.$invalid);
        };
    }])
    .directive('formulaire', function () {
        return {
            restrict: 'E',
            templateUrl: '../views/formulaire.html'
        };
    })
    .directive('tableauFiltre', function(){
        return {
            restrict: 'E',
            templateUrl: '../views/tableauFiltre.html'
        };
    }).filter('filterC', function () {
        return function (input, uppercase) {
            input = input || '';
            var out = '';
            for (var i = 0; i < input.length; i++) {
                out = input.charAt(i) + out;
            }
            // conditional based on optional argument
            if (uppercase) {
                out = out.toUpperCase();
            }
            return out;
        };
    });
