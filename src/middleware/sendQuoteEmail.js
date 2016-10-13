'use strict';

const wkhtmltopdf = require('wkhtmltopdf');
const fs = require('fs');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

function formatDate(date) {
  return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
}

module.exports = function(app) {
  return function(req, res, next) {

    // Configure nodemailer
    var mailer = nodemailer.createTransport(smtpTransport(app.get('nodemailer')));

    // From retrieveQuote
    const quote = res.data;

    // Render quote HTML
    app.render('pdfs/quote-form.pug', quote, function(err, html) {
      if (err) return next(err);

      // Render quote PDF
      var writeStream = fs.createWriteStream('views/pdfs/quote.pdf');
      wkhtmltopdf(html, { pageSize: 'letter' ,  marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}).pipe(writeStream);

      // Send
      writeStream.on('finish', function() {
        var mailData = {
          from: 'American Tape and Label <quotes@at-l.com>',
          to: quote.email,
          subject: 'Your Quote From ATL',
          html: `Dear ${quote.name},<br>Please see attached for your digital label quote created ${formatDate(quote.createdAt)}.<br><br>Thanks,<br>The American Tape & Label team<br>`,
          attachments: [
            { path: 'views/pdfs/quote.pdf' }
          ]
        };
        mailer.sendMail(mailData, function(error, response) {
          if (error) {
            console.log(error);
            res.status(500).send("Mailing error.");
          } else {
            res.send("Complete.");
          }
        });
      });
    });
  };
};
