Package.describe({
  name: "xavcz:nova-social-share",
  version: "1.0.0",
});

Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'fourseven:scss',

    'nova:core@1.0.0',
    'nova:posts@1.0.0',
  ]);

  api.mainModule('client.js', ['client']);
  api.mainModule('server.js', ['server']);

  api.addFiles([
    'lib/social.scss',
  ], ['client']);

});
