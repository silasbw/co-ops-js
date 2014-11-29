var co_ops = require('./co_ops.js');

co_ops.get({product: 'currents',
            units: 'english',
            station: 's08010',
            date: 'latest'},
          function(result) {
            console.log('currents', result);
          });

co_ops.get({product: 'water_level',
            units: 'english',
            station: 9414863},
           function(result) {
             console.log('water_level', result);
           });

co_ops.get({product: 'predictions',
            units: 'english',
            station: 9414863,
            begin_date: co_ops.gmtime(),
            range: 1},
          function(result) {
            console.log('predictions', result);
          });
