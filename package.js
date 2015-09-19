Package.describe({
  name: 'elevatedevdesign:feedback',
  summary: 'Package to provide feedback (vibrate and sound) on both cordova and browser',
  version: '0.0.3-rc.1',
  git: 'https://github.com/ElevateDevelopmentAndDesign/meteor-feedback'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.addFiles('client.js','client');

  Npm.depends({
    'cordova-plugin-media': '1.0.1',
    'cordova-plugin-vibration': '1.2.0'
  });

  api.export("Feedback", 'client');
});
