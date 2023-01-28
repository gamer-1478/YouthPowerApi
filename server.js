const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();

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
    const images4 = fs.readdirSync('./images4');
    const images5 = fs.readdirSync('./images5');
    const images6 = fs.readdirSync('./images6');
    const images7 = fs.readdirSync('./images7');

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
    images4.forEach(image => {
        images.push({
            src: `https://yp-website-api.herokuapp.com/image/images4/${image}`,
            original: `https://yp-website-api.herokuapp.com/image/images4/${image}`,
            tags: [{ value: "Activity 4", title: "Activity 4" }],
        })
    });
    images5.forEach(image => {
        images.push({
            src: `https://yp-website-api.herokuapp.com/image/images5/${image}`,
            original: `https://yp-website-api.herokuapp.com/image/images5/${image}`,
            tags: [{ value: "Activity 5", title: "Activity 5" }],
        })
    });
    images6.forEach(image => {
        images.push({
            src: `https://yp-website-api.herokuapp.com/image/images6/${image}`,
            original: `https://yp-website-api.herokuapp.com/image/images6/${image}`,
            tags: [{ value: "Activity 6", title: "Activity 6" }],
        })
    });
    images7.forEach(image => {
        images.push({ 
            src: `https://yp-website-api.herokuapp.com/image/images7/${image}`, 
        original: `https://yp-website-api.herokuapp.com/image/images7/${image}`,
            tags: [{ value: "Activity 7", title: "Activity 7" }], })
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

// app.get('/imgur-test', async (req, res) => {
//     //upload all images to imgur using api and then get the links
//     //then log the links to the console

//     console.log(process.env.CLIENT_ID)
//     fs.writeFileSync('./test.txt', fs.readFileSync('./images1/1.jpg', 'base64'))

//     var data = new FormData();
//     data.append('image', 'https://yp-website-api.herokuapp.com/image/images1/IMG_4824-min.JPG');
//     data.append('type', 'url');

//     fetch('https://api.imgur.com/3/upload', {
//         method: 'POST',
//         headers: {
//             "Authorization": `Client-ID ${process.env.CLIENT_ID}`,
//         },
//         body: data
//     }).then(async res => {
//         console.log(await res)
//         return res.json()}).then(json => {
//         res.send(json)
//     });
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.