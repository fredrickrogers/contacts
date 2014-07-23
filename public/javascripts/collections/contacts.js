Contacts.Collections.Contacts = Backbone.Collection.extend({
	model: Contacts.Models.Contact,
	url: "/api/contacts"
});