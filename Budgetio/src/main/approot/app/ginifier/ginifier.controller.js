'use strict';

angular.module('budgetio')
  .controller('GinifierCtrl', ['$scope', '$modalInstance', 'FileUploader', function ($scope, $modalInstance, FileUploader) {

    var uploader = $scope.uploader = new FileUploader({
      url: 'rest/decodeDocument'
    });
    $scope.uploader = uploader;

    uploader.filters.push({
      name: 'customFilter',
      fn: function(item /*{File|FileLikeObject}*/, options) {
        return this.queue.length < 1;
      }
    });

    uploader.onAfterAddingAll = function(addedFileItems) {
      //Start upload
      uploader.queue[0].upload();
    };

    uploader.onBeforeUploadItem = function(item) {
      $scope.currentProgress = 0;
      $scope.uploading = true;
    };
    uploader.onProgressItem = function(fileItem, progress) {
      console.info('onProgressItem', fileItem, progress);
    };

    uploader.onSuccessItem = function(fileItem, response, status, headers) {
      console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function(fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
    };

    uploader.onCompleteItem = function(fileItem, response, status, headers) {
      $scope.uploading = false;
      console.info('onCompleteItem', fileItem, response, status, headers);
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

