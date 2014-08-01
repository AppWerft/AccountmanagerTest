module.exports = function(_accounts,_callback) {
	var options = [];
	console.log(_accounts);
	for (var i = 0; i < _accounts.length; i++) {
		options.push(_accounts[i].accountType);
	}
	var accountlist = Ti.UI.createOptionDialog({
		options : options,
		title : 'Choose your account!'
	});
	accountlist.show();
}; 


var a=[{"accountType":"Google","type":"com.google","name":"kontaktschmied@googlemail.com"},{"accountType":"Twitter","type":"com.twitter.android.auth.login","name":"kontaktschmied"},{"accountType":"Facebook","type":"com.facebook.auth.login","name":"kontaktschmied"},{"accountType":"XING","type":"XING","name":"Rainer Schleevoigt"},{"accountType":"Meetup","type":"com.meetup.auth","name":"Rainer Schleevoigt"},{"accountType":"Skype™","type":"com.skype.contacts.sync","name":"kontaktschmied"}]
;