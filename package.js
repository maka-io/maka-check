Package.describe({
  name: 'maka:check',
  summary: 'Enhanced version of Meteor Check.',
  version: '1.3.4',
  git: 'https://github.com/maka-io/maka-check.git'
});

Npm.depends({
    'uuid': '8.3.2',
});

Package.onUse(api => {
  api.versionsFrom(['1.10.2','2.3']);

  api.use('ecmascript');
  api.use('ejson');

  api.mainModule('match.js');

  api.export('check');
  api.export('Match');
});

Package.onTest(api => {
  api.use(['check', 'tinytest', 'ejson', 'ecmascript'], ['client', 'server']);

  api.addFiles('match_test.js', ['client', 'server']);
});
