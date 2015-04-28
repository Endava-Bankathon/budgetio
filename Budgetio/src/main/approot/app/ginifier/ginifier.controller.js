'use strict';

angular.module('budgetio')
  .controller('GinifierCtrl', function ($scope, $modalInstance, FileUploader, CategoryService, UserService) {

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
            amount: 150,
            productName: 'A nice fancy Hammer',
            currency: CategoryService.convertCurrency('EUR'),
            categoryClass: 'house',
            category: 'H'
          }, {
            amount: 530,
            productName: 'Beef',
            currency: CategoryService.convertCurrency('EUR'),
            categoryClass: 'food',
            category: 'F'
          }, {
            amount: 1490,
            productName: 'Clothing',
            currency: CategoryService.convertCurrency('EUR'),
            categoryClass: 'misc',
            category: 'M'
          }
        ];
        $scope.totalValue = $scope.currentCashValue - $scope.getTotal();
      };

      $scope.getTotal = function () {
        var total = 0;
        $scope.scanCandidates && $scope.scanCandidates.map(function(item){
          total += item.amount;
        });
        return total;
      };

      $scope.currentCashValue = 0;
      $scope.totalValue = 0;
      UserService.getCategories().map(function(item) {
        if (item.code === 'C') {
          $scope.currentCashValue = item.amount;
        }
      });

      uploader.onCompleteItem = function (fileItem, response) {
        $scope.uploading = false;
        uploader.queue = [];
      };

      $scope.currentProgress = 0;
      $scope.uploading = false;

      $scope.ok = function () {
        var transaction = {
          amount: $scope.getTotal(),
          time: moment().format('L'),
          currency: '€',
          category: 'C',
          categoryClass: 'cash',
          categories: $scope.scanCandidates
        };
        UserService.addCashTransaction(transaction);
        $modalInstance.close($scope.selected);
      };
      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    });

