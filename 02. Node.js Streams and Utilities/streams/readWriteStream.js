const fs = require('fs')


// const readWriteStream =fs.readWriteStream()

const readStream = fs.createReadStream('./data/input.txt', { encoding: 'utf-8', highWaterMark: 1000 })
const writeStream = fs.createWriteStream('./data/copy.txt', 'utf-8')


readStream.on('data', (chunk) => {
    writeStream.write('----------------------NEW CHUNK------------------------------\n')
    writeStream.write(chunk)
})

readStream.on('close', () => {
    writeStream.end()
})