//
Ti.UI.createWindow({
	title : 'Ti.AccountManager',
	backgroundColor : '#fff',
	exitOnClose : true,
	fullscreen : true
}).open();

Ti.App.AccountManager = require('org.bcbhh');

require('ui/account.dialog')(Ti.App.AccountManager.getAccounts(), function(_res) {
	var token= Ti.App.AccountManager.getAuthToken(_res.name, _res.type, _res.options);
	console.log(token);
});
