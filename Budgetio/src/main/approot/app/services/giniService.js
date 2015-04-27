/*
 * Gini API wrapper service.
 */
(function() {
  var giniService = function($http) {
    /*
     * Function that calls the pollDocument REST service.
     */
    var pollDocument = function(documentId) {
      var serviceUrl = "http://localhost:8080/rest/pollDocument/" + documentId;
      return $http.get(serviceUrl)
        .success(function(data) {
          if (console){
            console.info("pollDocument response: ", data);
          };
          return data;
        })
        .error(function(data, status) {
          if (console){
            console.error("pollDocument request failed with status: ", status, data);
          };
        });
    }

    /*
     * Function that calls the getDocumentExtractions REST service.
     */
    var getDocumentExtractions = function(documentId) {
      var serviceUrl = "http://localhost:8080/rest/getDocumentExtractions" + documentId;
      return $http.get(serviceUrl)
        .success(function(data) {
          if (console){
            console.info("getDocumentExtractions result: ", data);
          };
          return data;
        })
        .error(function(data, status) {
          if (console){
            console.error("getDocumentExtractions request failed with status: ", status, data);
          };
        });
    }

    return {
      pollDocument : pollDocument,
      getDocumentExtractions : getDocumentExtractions
    };

  };
	var module = angular.module("budgetio");
	module.factory("giniService", giniService);
}());
