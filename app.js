const express = require ('express');
const app = express();
const path = require('path');
const router = express.Router();



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/website/index.html'));
    console.log(req.socket.remoteAddress|| null);
});

app.get('/store',function(req,res){
    res.sendFile(path.join(__dirname+'/website/store.html'));
});

app.get('/img/:img',(req,res)=> {
    res.sendFile(path.join(__dirname+'/website/img/'+req.params.img));
});
app.get('/:fileDir',(req,res) => {
    res.sendFile(path.join(__dirname+'/website/'+ req.params.fileDir));
});
app.get('/css/:fileDir', (req,res) => {
    res.sendFile(path.join(__dirname +'/website/css/'+req.params.fileDir));
});
app.get('/js/:fileDir', (res,req)=> {
    res.sendFile(path.join(__dirname +'/website/js/'+ req.params.fileDir));
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('Listening on port 3000'));