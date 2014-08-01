AccountManager for Titanium
===========================


This module provides a consumer of accounts. It uses availabel accounts on device and dont play the role as Authenticator. 

![](https://raw.githubusercontent.com/AppWerft/AccountmanagerTest/master/screens/accountscreen.png)
Methods:
--------

### getAccounts()
~~~
var AM = require('org.bcbhh');
var accounts = AM.getAccounts();
~~~
give us:
~~~
[{
	"accountType" : "Google",
	"type" : "com.google",
	"name" : "******"
}, {
	"accountType" : "Twitter",
	"type" : "com.twitter.android.auth.login",
	"name" : "******"
}, {
	"accountType" : "Facebook",
	"type" : "com.facebook.auth.login",
	"name" : "******"
}, {
	"accountType" : "XING",
	"type" : "XING",
	"name" : "******"
}, {
	"accountType" : "Meetup",
	"type" : "com.meetup.auth",
	"name" : "******"
}, {
	"accountType" : "Skype™",
	"type" : "com.skype.contacts.sync",
	"name" : "******"
}]; 
~~~

### chooseAccount(type)

###  authorizeApp(account, appid, appsecret)
