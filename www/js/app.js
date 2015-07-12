// Ionic Harold App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'harold' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'harold.controllers' is found in controllers.js
angular.module('harold', ['ionic', 
                          'youtube-embed', 
                          'ngResource',
                          'harold.controllers', 
                          'harold.services'])

//https://github.com/brandly/angular-youtube-embed

.constant('HOST', 'http://localhost:1337/api') //DEVELOPMENT
// .constant('HOST', 'http://harold-server.herokuapp.com/api') //PRODUCTION

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.articles', {
    url: "/articles",
    views: {
      'menuContent': {
        templateUrl: "templates/articles.html",
        controller: 'ArticlesCtrl'
      }
    }
  })

  .state('app.article', {
    url: "/articles/:articleId",
    views: {
      'menuContent': {
        templateUrl: "templates/article.html",
        controller: 'ArticleCtrl'
      }
    }
  })

  .state('app.campaigns', {
    url: "/campaigns",
    views: {
      'menuContent': {
        templateUrl: "templates/campaigns.html",
        controller: 'CampaignsCtrl'
      }
    }
  })

  .state('app.campaign', {
    url: "/campaigns/:campaignId",
    views: {
      'menuContent': {
        templateUrl: "templates/campaign.html",
        controller: 'CampaignCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/articles');
});
