Contacts.Views.ContactListItem = Backbone.View.extend({
	tagName: 'tr',
	template: _.template($('#contactlistitem').html()),

	events: {
		'click td': '_showContact',
	},

	initialize: function() {
		this.listenTo(this.model, 'destroy', this.close);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	_showContact: function() {
		router.navigate('/contacts/' + this.model.get('_id'), {trigger:true});
	}
});