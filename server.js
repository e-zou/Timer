var axios = require('axios');

var express = require('express');
// Import the library:
var cors = require('cors');

var app = express();

// Then use it before your routes are set up:
app.use(cors());

const port = 9000

//thank you to https://aws.random.cat/meow for providing our application with awesome cat photos

app.get('/picture', function(req, res) {

    axios.get("https://aws.random.cat/meow").then(respond => {
       console.dir(respond.data)
       res.send(respond.data)
    
    })
  
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))