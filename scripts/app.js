angular.module('equalizer', [])
    .controller('MainCtrl', MainCtrl)
    .directive('eqSliderBar', eqSliderBar);

MainCtrl.$inject = ['$scope'];

function MainCtrl($scope) {

    $scope.updateEqualizer = updateEqualizer;

    init();

    function init() {
        $scope.sliderOneVal = 0;
        $scope.sliderTwoVal = 0;
        $scope.sliderThreeVal = 0;
        $scope.sliderFourVal = 0;
        $scope.sliderFiveVal = 0;

        $scope.musicType = "";
    }

    function updateEqualizer() {
        switch ($scope.musicType) {
            case 'pop':
                $scope.sliderOneVal = 0;
                $scope.sliderTwoVal = 3;
                $scope.sliderThreeVal = 6;
                $scope.sliderFourVal = -4;
                $scope.sliderFiveVal = -6;
                break;
            case 'rock':
                $scope.sliderOneVal = -6;
                $scope.sliderTwoVal = -4;
                $scope.sliderThreeVal = 6;
                $scope.sliderFourVal = 3;
                $scope.sliderFiveVal = 0;
                break;
            case 'jazz':
                $scope.sliderOneVal = -6;
                $scope.sliderTwoVal = -4;
                $scope.sliderThreeVal = 6;
                $scope.sliderFourVal = -4;
                $scope.sliderFiveVal = 6;
                break;
            case 'classical':
                $scope.sliderOneVal = -2;
                $scope.sliderTwoVal = 2;
                $scope.sliderThreeVal = -2;
                $scope.sliderFourVal = 2;
                $scope.sliderFiveVal = -2;
                break;
            case '':
                $scope.sliderOneVal = 0;
                $scope.sliderTwoVal = 0;
                $scope.sliderThreeVal = 0;
                $scope.sliderFourVal = 0;
                $scope.sliderFiveVal = 0;
                break;
        }
    }
}

function eqSliderBar() {
    return {
        templateUrl: '../templates/slider-bar.html',
        restrict: 'E',
        scope: {
            hertz: '@',
            value: '=?'
        }
    }
}