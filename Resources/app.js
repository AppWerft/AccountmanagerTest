//
var win1 = Ti.UI.createWindow({
	title : 'Ti.AccountManager',
	backgroundColor : '#fff',
	exitOnClose : true,
	fullscreen : true
});
win1.open();

Ti.App.AccountManager = require('org.bcbhh');

require('ui/account.dialog')(Ti.App.AccountManager.getAccounts(), function(_e) {
});
