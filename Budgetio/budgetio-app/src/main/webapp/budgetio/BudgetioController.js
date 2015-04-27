(function() {
	var app = angular.module("budgetioApp");

	var BudgetioController = function($scope, $window, figoService, giniService, FileUploader) {		
		/*
		 * Variable that stores the user data.
		 */
		$scope.user = figoService.getUser();
		
		/*
		 * Variable that stores the list of accounts.
		 */
		$scope.accounts = figoService.getAccounts();
		
		/*
		 * Variable that stores the list of transactions.
		 */
		$scope.transactions = figoService.getTransactions();
		
		/*
		 * Variable that stores the list of notifications.
		 */
		$scope.notifications = figoService.getNotifications();
		
		/*
		 * Variable that stores the list of payments.
		 */
		$scope.payments = figoService.getPayments();
	
	};

	app.controller("BudgetioController", [ "$scope", "$window", "figoService", "giniService", "FileUploader", BudgetioController]);
}());