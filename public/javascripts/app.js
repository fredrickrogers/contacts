Contacts.Router = Backbone.Router.extend({
	routes: {
		"": "list",
		"contacts":  "list",
		"contacts/add": 'addContact',
		"contacts/:id": "editContact",
	},

	list: function(page) {
		var contacts = new Contacts.Collections.Contacts();
		$("#content").html(new Contacts.Views.ContactList({collection:contacts}).render().el);
		contacts.fetch({reset:true});
	},

	editContact: function(id) {
		var contact = new Contacts.Models.Contact({_id: id});
		contact.fetch({
			success:function(data) {
				$("#content").html(new Contacts.Views.EditContactView({model:contact}).render().el);
			},
			error:function(model, response, options) {
				console.log(response);
			}
		});
	},

	addContact: function() {
		var contact = new Contacts.Models.Contact();
		$("#content").html(new Contacts.Views.EditContactView({model:contact}).render().el);
	}
});

$(document).on("ready", function(){
	router = new Contacts.Router();
	Backbone.history.start();
});