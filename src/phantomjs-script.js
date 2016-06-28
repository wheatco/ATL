var webPage = require('webpage');
var page = webPage.create();

page.paperSize = {format: 'Letter'};
page.open("http://google.com", function (status) {
	if (status !== 'success') {
		console.error("can't access network");
	} else {
		page.render("tempPDFs/google.pdf", function() {
		//after render
		});
	}
	phantom.exit();
});
