'use strict';

module.exports = function(app) {
  return function(req, res, next) {

    // From retrieveQuote
    const quote = res.data;

    // Render quote
    app.render('pdfs/quote-form.pug', quote, function(err, html) {

      // Configure mailgun
      const mailgun = require('mailgun-js')(app.get('mailgun'));

      // Send quote
      var mailData = {
        from: 'American Tape and Label <postmaster@sandbox90234bbf28114475b4475f6df62e30a1.mailgun.org>',
        to: quote.email,
        subject: 'Your Quote From ATL',
        html: html
      };

      mailgun.messages().send(mailData, function(err, body) {
        if (err) {
          console.log(err);
          res.status(500).send("Mailing error.");
        } else {
          res.send("Email sent.");
        }
      });
    });
  };
};
