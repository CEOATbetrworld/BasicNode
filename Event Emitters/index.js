const EventEmmiter = require('events')

class Job extends EventEmmiter { }

job = new Job()

job.on('jobOneDone', function (timeDone) {
    console.log('Job one was pronounced done at ', timeDone)
})

job.on('jobOneDone', function (timeDone) {
    console.log('Job one was pronounced done at once again at', timeDone)
})

job.emit('jobOneDone', new Date())
job.removeAllListeners()
job.emit('jobOneDone', new Date())
