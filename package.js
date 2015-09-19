Package.describe({
  name: 'elevatedevdesign:feedback',
  summary: 'Package to provide feedback (vibrate and sound) on both cordova and browser',
  version: '0.0.2',
  git: 'https://github.com/ElevateDevelopmentAndDesign/meteor-feedback'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.addFiles('client.js','client');

  Cordova.depends({
    "org.apache.cordova.media": "0.2.16",
    "org.apache.cordova.vibration": "0.3.13"
  });
  api.export("Feedback", 'client');
});
