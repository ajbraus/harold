angular.module('harold.controllers', [])

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

.controller('ArticlesCtrl', function($scope, Article) {
  $scope.articles = Article.query()
})

.controller('ArticleCtrl', function($scope, $stateParams, Article) {
  $scope.article = Article.get({ id: $stateParams.articleId })
})

.controller('NewCampaignCtrl', function($scope, $stateParams, Campaign) {
  $scope.campaign = {};
  $scope.createCampaign = function() {
    Campaign.save($scope.campaign)
      .success(function(data) {
        console.log(data)
      })
      .error(function(err) { 
        console.log(err)
      })

    });
  });
})


.controller('CampaignsCtrl', function($scope, $ionicModal, $location, Campaign) {
  $scope.campaigns = Campaign.query();

  $ionicModal.fromTemplateUrl('campaign-topics-modal.html', {
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

  $scope.goToCampaign = function(campaign_id) {
    $location.path("/app/campaigns/" + campaign_id)
  }
})

.controller('CampaignCtrl', function($scope, $stateParams, $ionicModal, Campaign) {
  $scope.campaign = Campaign.get({ id: $stateParams.campaignId });

  $scope.playerVars = {
    theme: "light",
    controls: 0,
    autoplay: 1,
    showinfo: 0,
    rel:0
  }

  $scope.sponsorship = {
    max_per_month: "$5"
  , dollars_per_article: "$1"
  }

  $ionicModal.fromTemplateUrl('back-campaign-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
})


;
