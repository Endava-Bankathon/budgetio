/*
 * Gini API wrapper service.
 */
(function() {
	var giniService = function($http) {
		var dummyMethod = function() {

		}
		return {
			dummyMethod : dummyMethod
		};
	}
	var module = angular.module("budgetioApp");
	module.factory("giniService", giniService);
}());