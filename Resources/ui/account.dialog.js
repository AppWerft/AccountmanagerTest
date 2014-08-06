module.exports = function(_accounts, _callback) {
	var options = [];
	for (var i = 0; i < _accounts.length; i++) {
		options.push(_accounts[i].accountType);
	}
	var accountlist = Ti.UI.createOptionDialog({
		options : options,
		title : 'Choose your account!'
	});
	accountlist.show();
	accountlist.addEventListener('click', function(_e) {
		var account = _accounts[_e.index];

		console.log(_e.index);
		if (_e.index >= 0) {
			var props = Ti.App.Properties.listProperties();
			
			for (var i = 0; i < props.length; i++) {
				try {
					if (props[i].split('_')[0] == _accounts[_e.index].type) {
						account[props[i].split('_')[1]] = Ti.App.Properties.getString(props[i]);
					}
				} catch(E) {
				}
			}
			_callback(account);
		}
	});
};

