//
var win1 = Ti.UI.createWindow({
	title : 'Accountmanager',
	backgroundColor : '#fff'
});

var label1 = Titanium.UI.createLabel({
	color : '#999',
	text : 'I am Window 1',
	font : {
		fontSize : 20,
		fontFamily : 'Helvetica Neue'
	},
	textAlign : 'center',
	width : 'auto'
});

win1.add(label1);

win1.open();

var AM = require('org.bcbhh');

var accounts = AM.getAccounts();

console.log(accounts);
Ti.UI.createNotification({
	message : accounts.length + ' found'
}).show();
var options = [];
for (var i = 0; i < accounts.length; i++) {
	options.push(accounts[i].type);
}
var accountlist = Ti.UI.createOptionDialog({
	options : options,
	title : 'Wähle Dein Konto!'
});
accountlist.show();
accountlist.addEventListener('click', function(_e) {

});

