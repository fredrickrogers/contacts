Contacts.Models.Contact = Backbone.Model.extend({
	urlRoot:"/api/contacts/",

	initialize:function() {
		this.url = this.urlRoot + this.id;
	},

	fullName: function() {
		return this.get('firstName') + ' ' + this.get('lastName');
	}
});
