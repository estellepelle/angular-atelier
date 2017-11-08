'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
    .controller('MainCtrl', ['$scope', '$http', '$uibModal', function ($scope, $http, $uibModal) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        
        $scope.personne = {
            nom : null,
            prenom : null,
            telephone : null,
            mail : null,
            montant : null
        };

        $scope.tabPersonne = [{
            nom: "meerbeck",
            prenom: "heidi",
            mail : "hm@g",
            montant : "2600",
            telephone :"0247256985"
            }, {
            nom: "hendrickx",
            prenom: "jan",
            mail : "jh@g",
            montant : "3500",
            telephone :"0247859636"
            }, {
            nom: "descheemaeker",
            prenom: "luc",
            mail : "ld@g",
            montant : "1350",
            telephone :"0245478590"
            }, {
            nom: "clohse",
            prenom: "sylvia",
            mail : "sc@g",
            montant : "1960",
            telephone :"0247369856"
            }];
        
         $scope.montants = [1000,2000,3000,4000,5000 ];
        
        $scope.savePersonne = function(){
            console.log($scope.ajoutPersonne.nom.$invalid);
            console.log($scope.personne);
            
            if(!$scope.ajoutPersonne.nom.$invalid && !$scope.ajoutPersonne.prenom.$invalid&& !$scope.ajoutPersonne.telephone.$invalid  && !$scope.ajoutPersonne.mail.$invalid ){
                $scope.tabPersonne.push($scope.personne);
            }
        
        };
        
        $scope.envoyerInfo = function () {
            $http({
                method: 'POST',
                url: '',
                data: $scope.personne
            }).then(function successCallback(response) {
                $scope.DocEnvoye = response.data.$scope.personne;
                window.open("data:application/pdf;base64," + response.data.$scope.personne);
            }, function errorCallback(response) {
                if(response.status === 404){
                    
                    var modalInstance = $uibModal.open({
                        templateUrl: '../../404.html'
                    })
                }
                
            });
        };
        
        
          $scope.recupInfo = function () {
            $http({
                method: 'GET',
                url: '../../fiche.json'
            }).then(function successCallback(response) {
                $scope.DocRecup = response;
                console.log($scope.DocRecup);
            }, function errorCallback(response) {
                console.log(response);
            });
        };
      

    }])
    .directive('formulaire', function () {
        return {
            restrict: 'E',
            templateUrl: '../../views/formulaire.html'
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

