var Job = require('./job.js')

var job = new Job()

job.on('done', function (details) {
    console.log('the job defined in job module is completed at', details.completedOn)
    
})

job.emit('start')