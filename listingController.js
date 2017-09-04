angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      let listing = {
        "code": this.code,
        "name": this.name
      };

      $scope.listings.push(listing);

      this.code = "";
      this.name = "";
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };

  }
]);
