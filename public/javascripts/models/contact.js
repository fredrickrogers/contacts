Contacts.Models.Contact = Backbone.Model.extend({
	urlRoot:"/api/contacts/",

	initialize:function() {
		this.url = this.urlRoot + this.id;
		this.set({'fullname': this._fullName()});
	},

	_fullName: function() {
		return this.get('firstName') + ' ' + this.get('lastName');
	}
});
