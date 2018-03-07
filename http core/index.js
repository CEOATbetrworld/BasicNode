const http = require('http')

const url = 'http://www.nodeprogram.com/'

http.get(url, (response) => {
    let c = 0
    let buffer = ''
    response.on('data', (chunk) => {
        c++
       // console.log(chunk.toString('utf-8'))
       buffer += chunk
    })
    response.on('end', () => {
        console.log(`response has ended with ${c} chunk(s)`)
        console.log(`Data stored in buffer = ${buffer}`)
    })
}).on('error', (error) => {
    console.error(`Got error : ${error.message} `)
})
