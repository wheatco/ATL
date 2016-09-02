'use strict';

const wkhtmltopdf = require('wkhtmltopdf');
const fs = require('fs');

module.exports = function(app) {
  return function(req, res, next) {

    // Configure mailgun
    const mailgun = require('mailgun-js')(app.get('mailgun'));

    // From retrieveQuote
    const quote = res.data;

    // Render quote HTML
    app.render('pdfs/quote-form.pug', quote, function(err, html) {
      if (err) return next(err);

      // Render quote PDF
      var writeStream = fs.createWriteStream('views/pdfs/out.pdf');
      wkhtmltopdf(html, { pageSize: 'letter' }).pipe(writeStream);

      // Send
      writeStream.on('finish', function() {
        var mailData = {
          from: 'American Tape and Label <postmaster@sandbox90234bbf28114475b4475f6df62e30a1.mailgun.org>',
          to: quote.email,
          subject: 'Your Quote From ATL',
          text: 'You quote is attached.',
          attachment: 'views/pdfs/out.pdf'
        };
        mailgun.messages().send(mailData, function(err, body) {
          if (err) {
            console.log(err);
            res.status(500).send("Mailing error.");
          } else {
            res.send("Complete.");
          }
        });
      });
    });
  };
};
