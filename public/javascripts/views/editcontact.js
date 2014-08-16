Contacts.Views.EditContactView = Backbone.View.extend({
	className: 'row-fluid',
	template: _.template($('#editcontact').html()),

	events: {
		"click .close" : "_hideAlert",
		"change .form-control" : '_saveContact',
	},

	initialize: function() {
		this.listenTo(this.model, 'reset', this.render);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	_hideAlert: function() {
		$('.alert').hide();
	},

	_saveContact: function() {
		var self = this,
	    	options = {
				success: function(model, response, options) {
			    	self._showSuccessAlert('alert-info');
					router.navigate('/contacts/' + model.get('_id'));
				},
				error: function(model, response, options) {
					console.log(response);
				}
			};

		var contact = {
			firstname: this.$('#firstname').val(),
			lastname: this.$('#lastname').val(),
			street1: this.$('#street1').val(),
			street2: this.$('#street2').val(),
			city: this.$('#city').val(),
			state: this.$('#state').val(),
			zip: this.$('#zip').val(),
			phone: this.$('#phone').val(),
			email: this.$('#email').val(),
			notes: this.$('#notes').val(),
		};

		this.model.save(contact, options); 
	},
	
	_showSuccessAlert: function(klass) {
		$('.alert').removeClass('alert-info alert-warning');
		$('.alert').addClass(klass);
		$('.alert p').text('Successfully Saved');
		$('.alert').show();
	}
});