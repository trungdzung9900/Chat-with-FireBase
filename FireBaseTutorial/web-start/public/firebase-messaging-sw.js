importScripts('/__/firebase/8.2.1/firebase-app.js');
importScripts('/__/firebase/8.2.1/firebase-messaging.js');
importScripts('/__/firebase/init.js');

firebase.messaging();
// const meesaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//       body: 'Background Message body.',
//       icon: '/firebase-logo.png'
//     };
  
//     self.registration.showNotification(notificationTitle,
//       notificationOptions);
//   });