Contacts.Models.Contact = Backbone.Model.extend({
	defaults: {
		firstname: '',
		lastname: '',
		street1: '',
		street2: '',
		state: '',
		city: '',
		zip: '',
		phone: '',
		email: '',
		notes: ''
	},

	idAttribute: "_id",
	urlRoot:"/api/contacts",

	initialize:function() {
		
	},
});
