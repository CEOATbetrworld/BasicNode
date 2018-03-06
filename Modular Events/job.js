const EventEmitter = require('events')
let timer = 3;
class Job extends EventEmitter {
    constructor(ops) {
        super(ops)
        this.on('start', () => {
            this.process()
        })
    }
    process() {
        setInterval(() => {
            if (timer !== 0) {
                console.log('wait : ' + timer + 's')
                --timer
            }
        }, 950)
        setTimeout(() => {
            this.emit('done', { completedOn: new Date() })
        }, 3000)
    }
}

module.exports = Job