Contacts.Views.ContactListItem = Backbone.View.extend({
	tagName: 'li',
	className: 'col-md-3 clearfix',
	template: _.template($('#contactlistitem').html()),

	initialize: function() {
		this.listenTo(this.model, 'destroy', this.close);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});