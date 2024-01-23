const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.header({
        'content-type': 'text/plain'
    });

    res.status(200).send('<h1>hello world</h1>')
});

app.get('/cats', (req, res) => {
    res.send('cats page')
})

app.get('/cats/download', (req, res) => {
    const imagePath = path.join(__dirname, 'images', 'cuteCat.png')

    res.download(imagePath)
    // res.sendFile(imagePath)
    // res.attachment(imagePath)
    // res.end()

})

app.get('/cats/:catName', (req, res) => {
    const currentCatName = req.params.catName

    res.send(`Cat individual page- ${currentCatName}`)

})
app.get('/test', (req, res) => {
    res.end()
})

app.post('/cats', (req, res, next) => {
    console.log('Creating new cat!');

    if (Math.random() < 0.5) {
        return res.send('You don`t have luck :)');
    }

    next()
}, (req, res) => {

    res.redirect('/cats')
    // res.send('New cat created')
})


app.all('/dogs', (req, res) => {
    res.send('This is a cat application')
})
app.all('*', (req, res) => {
    res.status(404).send('Page not found - 404 ')
})


app.listen(5000)
console.log('server is lessening on port 5000...');