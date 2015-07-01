angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ArticlesCtrl', function($scope) {
  $scope.articles = [
    { id: 1, topic: "Environment", title: 'Fishing reduced endangered porpoise population to 97', image_url: "http://www.crystalvaults.com/images/bagua-square.gif"},
    { id: 2, topic: "Environment", title: 'Pakistan suspends executions for Ramadan', image_url: "http://www.crystalvaults.com/images/bagua-square.gif"},
    { id: 3, topic: "Environment", title: 'Dubstep', image_url: "http://www.crystalvaults.com/images/bagua-square.gif"},
    { id: 4, topic: "Environment", title: 'Indie', image_url: "http://www.crystalvaults.com/images/bagua-square.gif"},
    { id: 5, topic: "Environment", title: 'Rap', image_url: "http://www.crystalvaults.com/images/bagua-square.gif"}
  ];
})

.controller('ArticleCtrl', function($scope, $stateParams) {
  $scope.article = { id: 1, 
                     topic: "Environment", 
                     title: 'Fishing reduced endangered porpoise population to 97', 
                     image_url: "http://www.crystalvaults.com/images/bagua-square.gif",
                     body: "The vaquita, an aquatic mammal which only exists in one small area of Mexico, is on the verge of extinction.  Can it still be saved? <p>The vaquita, which in Spanish means “little cow,” is a type of porpoise endemic to Mexico.  It’s the smallest and rarest type of porpoise.  Its scientific name is Phocoena sinus.  <p>One curious thing about the vaquita is that the female of the species is larger than the male, which is rare for mammals.  The male is typically 53.1 inches long, while the female is 55.4 inches long.  <p>Not only is the vaquita endemic to the country of Mexico, it is endemic to only one area of Mexico – the lagoons of the Colorado River delta and nearshore areas of the upper Sea of Cortes, also called the Gulf of California. (This body of water, between the Baja California peninsula and the Mexican mainland, is said to be one of the most biologically diverse seas in the world.)   <p>The vaquita has been known to science only since the 1950s, and it has been declining ever since and is now in danger of extinction."
                   }

})

.controller('CampaignsCtrl', function($scope, $ionicModal, $location) {
  $scope.campaigns = [
    { id: 1, topic: "Environment", location: "New York City", contributor: {'name': "John Doe", "image_url": "http://www.likecool.com/Gear/Pic/One%20Trippy%20Profile%20Pic/One-Trippy-Profile-Pic.jpg"}, title: 'Report on awesome stuff', image_url: "http://uploads0.wikiart.org/images/m-c-escher/square-limit-colour.jpg"},
    { id: 2, topic: "Environment", location: "New York City", contributor: {'name': "John Doe", "image_url": "http://www.likecool.com/Gear/Pic/One%20Trippy%20Profile%20Pic/One-Trippy-Profile-Pic.jpg"}, title: 'Report on awesome stuff', image_url: "http://uploads0.wikiart.org/images/m-c-escher/square-limit-colour.jpg"},
    { id: 3, topic: "Environment", location: "New York City", contributor: {'name': "John Doe", "image_url": "http://www.likecool.com/Gear/Pic/One%20Trippy%20Profile%20Pic/One-Trippy-Profile-Pic.jpg"}, title: 'Report on awesome stuff', image_url: "http://uploads0.wikiart.org/images/m-c-escher/square-limit-colour.jpg"},
    { id: 4, topic: "Environment", location: "New York City", contributor: {'name': "John Doe", "image_url": "http://www.likecool.com/Gear/Pic/One%20Trippy%20Profile%20Pic/One-Trippy-Profile-Pic.jpg"}, title: 'Report on awesome stuff', image_url: "http://uploads0.wikiart.org/images/m-c-escher/square-limit-colour.jpg"},
    { id: 5, topic: "Environment", location: "New York City", contributor: {'name': "John Doe", "image_url": "http://www.likecool.com/Gear/Pic/One%20Trippy%20Profile%20Pic/One-Trippy-Profile-Pic.jpg"}, title: 'Report on awesome stuff', image_url: "http://uploads0.wikiart.org/images/m-c-escher/square-limit-colour.jpg"}
  ];

  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.showTopics = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

  $scope.goToCampaign = function(campaign_id) {
    $location.path("/app/campaigns/" + campaign_id)
  }
})

.controller('CampaignCtrl', function($scope, $stateParams) {
  $scope.campaign = { id: 1, 
                     topic: "Environment", 
                     title: 'Report on awesome stuff', 
                     contributor: {'name': "John Doe"},
                     summary: "I want to report on super awesome stuff. I want to report on super awesome stuff. I want to report on super awesome stuff. I want to report on super awesome stuff. I want to report on super awesome stuff."
                   }

})


;
