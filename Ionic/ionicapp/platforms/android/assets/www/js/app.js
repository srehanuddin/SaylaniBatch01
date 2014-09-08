/*
var app = angular.module('ionicApp', ['ionic'])

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home.html'
    })

    $stateProvider.state('help', {
        url: '/help',
        templateUrl: 'help.html'
    })
})
*/

var app = angular.module('ionicApp', ['ionic'])
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('blank', {
            url: '/blank',
            views: {
                'aaa' :{
                    templateUrl: "blank.html"
                }
            }
            //templateUrl: 'blank.html'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('music', {
            url: '/music',
            templateUrl: 'music.html'
        });
    $urlRouterProvider.otherwise('/blank');
})

    .controller('MyController', function($scope, $ionicModal) {
        $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
                $scope.modal = modal;
            });
        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });

        setTimeout(function(){
            $scope.openModal();
        },3000 );
    });


function ContentController($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
}