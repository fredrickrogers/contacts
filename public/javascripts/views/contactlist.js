Contacts.Views.ContactList = Backbone.View.extend({
	tagName:'table',
	className: 'table',

	initialize:function() {
		this.listenTo(this.collection, 'reset', this.render);
		this.listenTo(this.collection, 'add', this.renderContact);
	},

	render:function() {
		this.$el.empty();
		_.each(this.collection.models, function(contact){
			this.renderContact(contact);
		}, this);
		return this;
	},

	renderContact: function(contact) {
		this.$el.append(new Contacts.Views.ContactListItem({model:contact}).render().el);
	},
});