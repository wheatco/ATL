var webPage = require('webpage');
var page = webPage.create();

console.log("yea")

page.viewportSize = {width: 1920, height: 1080};
page.open("http://google.com", function start(status) {
	page.render("/tmp/google_home.jpeg" {format: 'jpeg', quality: '100'});
	console.log("hi")
	phantom.exit();
});