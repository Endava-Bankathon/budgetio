'use strict';

angular.module('budgetio')
  .controller('GinifierCtrl', ['$scope', '$modalInstance', 'FileUploader', 'CategoryService',
    function ($scope, $modalInstance, FileUploader, CategoryService) {

      var uploader = $scope.uploader = new FileUploader({
        url: 'rest/decodeDocument'
      });
      $scope.uploader = uploader;

      uploader.filters.push({
        name: 'customFilter',
        fn: function () {
          return this.queue.length < 1;
        }
      });

      uploader.onAfterAddingAll = function () {
        //Start upload
        uploader.queue[0].upload();
      };

      uploader.onBeforeUploadItem = function () {
        $scope.currentProgress = 0;
        $scope.uploading = true;
      };
      uploader.onProgressItem = function (fileItem, progress) {
        $scope.currentProgress = progress;
      };

      uploader.onErrorItem = function (fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
      };

      uploader.onSuccessItem = function (fileItem, response) {
        $scope.scanCandidates = [
          {
            amount: 15.29,
            currency: CategoryService.convertCurrency('EUR'),
            categoryClass: 'transportation',
            category: 'T'
          }, {
            amount: 53.17,
            currency: CategoryService.convertCurrency('EUR'),
            categoryClass: 'food',
            category: 'F'
          }, {
            amount: 149.90,
            currency: CategoryService.convertCurrency('EUR'),
            categoryClass: 'misc',
            category: 'M'
          }
        ];
      };

      $scope.getTotal = function () {
        var total = 0;
        $scope.scanCandidates && $scope.scanCandidates.map(function(item){
          total += item.amount;
        });
        return total;
      };

      uploader.onCompleteItem = function (fileItem, response) {
        $scope.uploading = false;
        uploader.queue = [];
      };

      $scope.currentProgress = 0;
      $scope.uploading = false;

      $scope.ok = function () {
        $modalInstance.close($scope.selected);
      };
      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]);

