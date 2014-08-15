var Contact = require('../models/contact');
var express = require('express');
var router = express.Router();

router.route('/contacts')
	.get(function(req, res){
		Contact.find(function(err, contacts){
			if(err) {
				return res.send(err);
			}

			res.json(contacts);
		});
	})
	.post(function(req, res){
		var contact = new Contact(req.body);

		contact.save(function(err){
			if(err){
				return res.send(err);
			}
			res.send(contact);
		});
	});

router.route('/contacts/:id')
	.get(function(req, res){
		Contact.findOne({_id:req.params.id}, function(err, contact){
			if(err) {
				return res.send(err);
			}
			res.json(contact);
		});
	})
	.put(function(req, res){
		Contact.findByIdAndUpdate(req.params.id, req.body, function(err, contact){
			if(err) {
				return res.send(err);
			}
			
			res.json(contact);
		});
	})
	.delete(function(req, res){
		Contact.remove({
			_id: req.params.id
		}, function(err, contact){
			if(err) {
				res.send(err);
			}

			res.json({message: 'Successfully deleted'});
		});
	});


module.exports = router;