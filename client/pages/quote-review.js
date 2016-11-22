import m from 'mithril';
import $ from 'jquery';
const app = window.app;

var QuoteReviewPage = {
	vm: {},
	controller: function(args) {
		var vm = QuoteReviewPage.vm
		vm.id = m.route.param("quoteID");
		app.service('quotes').find({query:{quote_id: vm.id}}).then(function(res){
			vm.int_id = res.data[0]._id;
		});
		return {
			sendQuote : function() {
		        var butt = $('button.send').text("Sending...").prop("disabled",true);
		        $('.flash').removeClass("visible")
		        $.ajax({
		            url: '/sendQuoteEmail',
		            type: 'POST',
		            data: {
		                q: vm.int_id
		            },
		            error: function (err) {
		                console.log(err);
		                $('.flash').html("Sending failed: " + err.responseText).addClass("visible");
		                butt.prop("disabled", false);
		                butt.text("Try sending again")
		            },
		            success: function(res) {
		                butt.text("Quote Sent!")
		                window.setTimeout(function(){
		                  butt.prop("disabled", false);
		                  butt.text("Resend")
		                }, 2000)
		            }
		        });
			},
			editQuote : function() {
				m.route("/quote/"+vm.id)
			},
			goToAdmin : function() {
				m.route("/admin");
			}
		}
	},
	view: function(ctrl, args) {
		var vm = QuoteReviewPage.vm;
		return m('div#review-page', [
			m('h1', 'Quote #'+vm.id+' Preview'),
			m('.iframe-wrapper', [
				m('iframe', {
					src: "/viewQuote?q="+vm.int_id,
					style: "width: 8.5in; height: 12in"
				})
			]),
			m('.controls',[
				m('button.return', {
					onclick: function(){ window.open('/viewQuote?q='+vm.int_id+'&view=pdf', '_blank', 'location=no,height=570,width=520,scrollbars=no,status=yes')}
				}, "View PDF"),
				m('button.send', {
					onclick: ctrl.sendQuote
				}, 'Send Quote to Client'),
				m('button.return', {
					onclick: ctrl.editQuote
				}, 'Edit'),
				// m('button.return', {
				// 	onclick: ctrl.goToAdmin
				// }, 'Go to Quote History')
			]),
			m('p.flash')
		])
	}
}


module.exports = QuoteReviewPage