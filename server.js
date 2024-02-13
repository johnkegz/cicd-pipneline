const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.json({
        status: 200,
        message: "Hello world:edited"
    })
});

app.listen(8080, () => {console.log("app running on port 8080")})