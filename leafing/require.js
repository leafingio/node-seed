global.rootRequire = function(name) {
	return require(`../${name}`);
};

global.moduleRequire = function(name) {
	return require(`../server/${name}`);
};