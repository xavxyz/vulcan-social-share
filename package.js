Package.describe({
  name: "xavcz:vulcan-social-share",
  version: "1.3.0",
});

Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'fourseven:scss',

    'vulcan:core@1.3.0',
    'vulcan:posts@1.3.0',
  ]);

  api.mainModule('client.js', ['client']);
  api.mainModule('server.js', ['server']);

  api.addFiles([
    'lib/social.scss',
  ], ['client']);

});
