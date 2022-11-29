const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const fs = require('fs');
const cors = require('cors');

//allow all origins
app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/images', (req, res) => {
    const images = []
    const images1 = fs.readdirSync('./images1');
    const images2 = fs.readdirSync('./images2');
    const images3 = fs.readdirSync('./images3');
    //make array of absolute paths
    images1.forEach(image => {
        images.push({ 
            src: `https://yp-website-api.herokuapp.com/image/images1/${image}`, 
        original: `https://yp-website-api.herokuapp.com/image/images1/${image}`,
            tags: [{ value: "Activity 1", title: "Activity 1" }], })
    });
    images2.forEach(image => {
        images.push({
            src: `https://yp-website-api.herokuapp.com/image/images2/${image}`,
            original: `https://yp-website-api.herokuapp.com/image/images2/${image}`,
            tags: [{ value: "Activity 2", title: "Activity 2" }],
        })
    });
    images3.forEach(image => {
        images.push({
            src: `https://yp-website-api.herokuapp.com/image/images3/${image}`,
            original: `https://yp-website-api.herokuapp.com/image/images3/${image}`,
            tags: [{ value: "Activity 3", title: "Activity 3" }],
        })
    });

    res.send(images);
})

app.get('/image/:id/:id1', (req, res) => {
    const {id, id1} = req.params;
    const image = fs.readFileSync(`${id}/${id1}`);

    //send image
    res.writeHead(200, {'Content-Type': 'image/jpg' });
    res.end(image, 'binary');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.