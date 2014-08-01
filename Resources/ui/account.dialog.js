module.exports = function(_accounts, _callback) {
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

