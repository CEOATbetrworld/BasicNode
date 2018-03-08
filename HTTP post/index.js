const http = require('http')
const postData = JSON.stringify({ name: 'Dhruv' })

const options = {
    hostname: 'mockbin.com',
    post: 80,
    path: '/request?name=dhruv&lastName=kumar',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
}

const req = http.request(options, (res) => {
    res.on('data', (chunk) => {
        console.log(`Body: ${chunk}`)
    })
    res.on('end', () => {
        console.log('No more data in response.')
    })
})

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`)
})

req.write(postData)
req.end()