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
      $scope.currentProgress = progress;
    };

    uploader.onErrorItem = function(fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
    };

    uploader.onCompleteItem = function(fileItem, response) {
      $scope.uploading = false;
      uploader.queue = [];
      console.log(response);
      $scope.scanCandidates = response.candidates.amounts;
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

