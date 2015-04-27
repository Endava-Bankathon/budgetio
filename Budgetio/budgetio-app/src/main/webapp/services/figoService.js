/*
 * Figo API wrapper service.
 */
(function() {
	var figoService = function($http) {
		var dummyMethod = function()
		{

		}
		return {
			dummyMethod : dummyMethod
		};
	}

	var module = angular.module("budgetioApp");
	module.factory("figoService", figoService);
}());