//
var win1 = Ti.UI.createWindow({
	title : 'Ti.AccountManager',
	backgroundColor : '#fff',
	exitOnClose : true,
	fullscreen : true
});
win1.open();

Ti.App.AccountManager = require('org.bcbhh');
var accounts = Ti.App.AccountManager.getAccounts();

require('ui/account.dialog')(accounts, function(_e) {
});
