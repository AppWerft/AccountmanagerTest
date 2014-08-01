//
var win1 = Ti.UI.createWindow({
	title : 'Ti.AccountManager',
	backgroundColor : '#fff',
	exitOnClose : true,
	fullscreen : trues
});

win1.open();

var AM = require('org.bcbhh');
var accounts = AM.getAccounts();
console.log(accounts);

var options = [];
for (var i = 0; i < accounts.length; i++) {
	options.push(accounts[i].accountType);
}
var accountlist = Ti.UI.createOptionDialog({
	options : options,
	title : 'Choose your account!'
});
accountlist.show();
