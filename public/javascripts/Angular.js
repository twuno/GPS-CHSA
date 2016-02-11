/**
 * Created by Walter Suazo on 11/02/2016.
 */
var modulo = angular.module('ServiceTest', ['angularjs-datetime-picker']);

modulo.controller("request",function($scope,$http)
{
  $scope.recurso
  $scope.unidad
  $scope.fechaDesde
  $scope.fechaHasta

   $scope.peticion=function(){
      param={
        unidad:$scope.unidad,
        fechaDesde:$scope.fechaDesde,
        fechaHasta:$scope.fechaHasta
      }

      $http({
        method:"GET",
        url: "/"+$scope.recurso,
        params:param})
          .then(function(response) {
            $scope.resultado = JSON.stringify(response.data,undefined,2);
            console.log($scope.resultado)
          });

  }
});
