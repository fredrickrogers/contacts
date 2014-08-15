Contacts.Views.ContactListItem = Backbone.View.extend({
	tagName: 'tr',
	template: _.template($('#contactlistitem').html()),

	events: {
		'click .delete-contact': '_deleteContact',
		'click .show-contact': '_showContact',
	},

	initialize: function() {
		this.listenTo(this.model, 'destroy', this.close);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	
	close: function() {
		this.remove();	
	},

    _deleteContact: function(event) {
    	event.preventDefault();
    	var options = {
			success: function(model, response, options) {
				
			},
			error: function(model, response, options) {
				console.log(response);
			}
		};

		this.model.destroy(options);
    },

	_showContact: function() {
		router.navigate('/contacts/' + this.model.get('_id'), {trigger:true});
	}
});