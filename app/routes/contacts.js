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
			res.json(contact);
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
		Contact.findById(req.params.id, function(err, contact){
			if(err) {
				console.log(err);
				return res.send(err);
			}
			
			delete req.body._id;
			
			for(var prop in req.body) {
				contact[prop] = req.body[prop];
			}
			
			contact.save(function(err){
				if(err) {
					console.log(err);
					return res.send(err);
				}	
				res.json(contact);
			});
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