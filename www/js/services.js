//
// services.js
//

'use strict';

angular.module('harold.services', [])
  .factory('Article', function ($resource, HOST) {
    return $resource(HOST + '/articles/:id', { id: '@id' })
  })
  .factory('Campaign', function ($resource, HOST) {
    return $resource(HOST + '/campaigns/:id', { id: '@id' })
  })

  // .factory('User', function ($resource, HOST) {
  //   return $resource(HOST + '/users/:id', { id: '@id' }, {
  //     update: { method: 'PUT' },
  //     sign_up: { url: HOST + '/users', method: 'POST', isArray: false },
  //     sign_in: { url: HOST + '/users/sign_in', method: 'POST', isArray: false },
  //     sign_out: { url: HOST + '/users/sign_out', method: 'POST', isArray: false },
  //     cancel: { url: HOST + '/users/cancel', method: 'GET', isArray: false },
  //     friends: { url: HOST + '/mutual_friends/:id', method: 'GET', isArray: false },
  //     invite_contacts: { url: HOST + '/invite_contacts', method: 'POST' }
  //   })
  // })

  // .factory('AuthService', function ($rootScope, User, HOST) {
  //   return {
  //     checkLogin: function() {
  //       // Check if logged in and fire events
  //       if(this.isLoggedIn()) {
  //         $rootScope.$broadcast('app.loggedIn'); 
  //       } else {
  //         $rootScope.$broadcast('app.loggedOut'); 
  //       }
  //     },
  //     isLoggedIn: function() {
  //       // Check auth token here from localStorage
  //       if (localStorage.getItem("harold_auth_token") === null || localStorage.getItem("harold_auth_token") === "undefined") {
  //         return false
  //       } else {
  //         return true
  //       };
  //     },
  //     logout: function(email, pass) {
  //      // Same thing, log out user
  //      $rootScope.$broadcast('app.loggedOut');
  //     }
  //   }
  // })

  // .factory('Password', function ($resource, HOST) {
  //   return $resource(HOST + '/users/password/:id', { id: '@id' })
  // })

  // .factory('ChatRoom', function ($resource, HOST) {
  //  return $resource(HOST + '/chat_rooms/:id', { id: '@id' }, {
  //     channel: { url: HOST + '/chat_rooms/channel/:id', method: 'GET' },
  //     confirm: { url: HOST + '/chat_rooms/:id/confirm', method: 'POST' },
  //     decline: { url: HOST + '/chat_rooms/:id/decline', method: 'POST' }
  //   });
  // })

  // .factory('Device', function ($resource, HOST) {
  //   return $resource(HOST + '/devices/:id', { id: '@id' })
  // })

  // .factory('PushNotification', function ($ionicPlatform, Device) {
  //   function successHandler (result) {
  //     // alert('result = ' + result);

  //     // This result is = "OK"
  //     // Android register success runs the register event in the onNotificationGCM function
  //   }

  //   function tokenHandler (result) {
  //     // alert('result = ' + result);
  //     var device_data = {
  //       token: result,
  //       platform: ionic.Platform.device().platform
  //     }

  //     localStorage.setItem('device', JSON.stringify(device_data));
  //     Device.save({}, device_data, function(data) {
  //       console.log("Saved device.");
  //       localStorage.setItem('device', JSON.stringify(data));
  //     });
  //   }

  //   function errorHandler (error) {
  //     alert('There was a problem registering your device for notifications: ' + error);
  //   }

  //   return {
  //     register: function() {
  //       var platform = ionic.Platform.device().platform
  //       // console.log(platform);
  //       // console.log(JSON.parse(localStorage.getItem("device")));
  //       if (platform != null) {
  //         var pushNotification = window.plugins.pushNotification;
  //         if ( platform == 'android' || platform == 'Android' ) { //|| platform == "amazon-fireos"
  //           pushNotification.register(successHandler, errorHandler,
  //             {
  //               "senderID":"838194448304",
  //               "ecb":"onNotificationGCM"
  //             });
  //         } else {
  //           pushNotification.register(tokenHandler, errorHandler,
  //             {
  //               "badge":"true",
  //               "sound":"true",
  //               "alert":"true",
  //               "ecb":"onNotificationAPN"
  //             });
  //         }
  //       }
  //     },
  //     unregister: function() {
  //       var platform = ionic.Platform.device().platform
  //       if (platform != null) {
  //         var pushNotification = window.plugins.pushNotification;
  //         pushNotification.unregister(successHandler, errorHandler, options);
  //       } 
  //     },
  //     registerID: function(result) { // only used to handle Android GCM callback
  //       var device_data = {
  //         token: result,
  //         platform: ionic.Platform.device().platform
  //       }

  //       localStorage.setItem('device', JSON.stringify(device_data));
  //       Device.save({}, device_data, function(data) {
  //         console.log("Saved device.");
  //         localStorage.setItem('device', JSON.stringify(data));
  //       });
  //     }
  //   }
  // })
