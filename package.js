Package.describe({
  name: 'maka:check',
  summary: 'Enhanced version of Meteor Check.',
  version: '1.3.1',
});

Npm.depends({
    'uuid': '8.3.2',
});

Package.onUse(api => {
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
