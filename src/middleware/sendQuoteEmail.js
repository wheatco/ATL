'use strict';

const wkhtmltopdf = require('wkhtmltopdf');
const fs = require('fs');

function formatDate(date) {
  return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
}

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
      var writeStream = fs.createWriteStream('views/pdfs/quote.pdf');
      wkhtmltopdf(html, { pageSize: 'letter' }).pipe(writeStream);

      // Send
      writeStream.on('finish', function() {
        var mailData = {
          from: 'American Tape and Label <postmaster@sandbox90234bbf28114475b4475f6df62e30a1.mailgun.org>',
          to: quote.email,
          subject: 'Your Quote From ATL',
          html: `Dear ${quote.name},<br>Please see attached for your quote created ${formatDate(quote.createdAt)}.<br><br>Thanks,<br>The American Tape & Label team<br>`,
          attachment: 'views/pdfs/quote.pdf'
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
