Package.describe({
	summary: "aviary image editor repackaged for Meteor"
});
 Npm.depends({
  "imagemagick":"https://github.com/and-fri/node-imagemagick.git"
});
Package.on_use(function (api) {
	api.add_files([
		'feather.js'
	],'client');
});
