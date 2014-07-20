Contacts.Router = Backbone.Router.extend({
	routes: {
		"": "contacts",
	},

	contacts: function() {
		var contacts = new Contacts.Collections.Contacts();
		$("#content").html(new Contacts.Views.ContactList({collection:contacts}).render().el);
		contacts.fetch({reset:true});
	},
});

$(document).on("ready", function(){
	router = new Contacts.Router();
	Backbone.history.start();
});