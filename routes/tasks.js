var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Task = mongoose.model('Task');


//checking whether the user is authenticated or not to use these routes
/*var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    	return next();
  res.send({state: 'failure', message: 'permission denied'});
}*/

//router.use('/tasks', isAuthenticated);


router.get('/tasks', function(req, res){
	Task.find(function(err, data){
		if (err){
			res.send(err, 500);
		}
		return res.send(data);
	});
});


router.post('/tasks', function(req, res){
	var task = new Task();
	if (!req.body.title || !req.body.isDone){
		res.status(400);
		res.json({"error": "Bad Data"});
	} else{
		task.title = req.body.title;
		task.isDone = req.body.isDone;
		task.save(function(err, task){
			if (err){
				res.send(err, 500);
			}
			return res.json(task);
		});
	}

});

//get by id
router.get('/tasks/:id', function(req, res){
	Task.findById(req.params.id, function(err, data){
		if (err){
			res.send(err, 500);
		}
		return res.json(data);
	});
});



//updating the tasks
router.put('/tasks/:id', function(req, res) {
	Task.findOne({_id: req.params.id}, function(err, task) {
		if (err){
			res.send(err);
		}

		if (!req.body.title || !req.body.isDone){
			res.status(400);
			res.json({"error": "Bad Data"});

		}

		task.title = req.body.title;
		task.isDone = req.body.isDone;

		task.save(function(err, task) {
			if (err){
				res.send(err);
			}

			res.json(task);
		});
	});
});


//deleting the task
router.delete('/tasks/:id', function(req, res){
	Task.remove({_id: req.params.id}, function(err){
		if (err){
			res.send(err, 500);
		}
		res.json('deleted');
	});
});




module.exports = router;