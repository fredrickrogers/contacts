Contacts.Views.EditContactView = Backbone.View.extend({
	tagName: 'form',
	className: 'row-fluid',
	template: _.template($('#editcontact').html()),

	events: {
		"blur .form-control" : '_saveContact',
		"click .delete-contact" : "_deleteContact"
	},

	initialize: function() {
		this.listenTo(this.model, 'reset', this.render);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	_deleteContact: function() {
		var options = {
			success: function(model, response, options) {
				router.navigate("/contacts/", {trigger:true});
			},
			error: function(model, response, options) {
				console.log(response);
			}
		};

		this.model.destroy(options);
	},

	_saveContact: function() {
		var options = {
			success: function(model, response, options) {
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
	}
});