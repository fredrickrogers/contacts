Contacts.Views.ContactListItem = Backbone.View.extend({
	tagName: 'li',

	initialize: function() {

	},

	render: function() {
		this.$el.html(this.model.fullName());
		return this;
	}
});