import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());


app.get('/weather', async (req, res) => {
    
    
    const cityReq = req.query.city; 
    console.log(`Getting weather for: ${cityReq}`);
    
    try{
        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?appid=e6812b5b6f49f004aba9502275864dbf&q=${cityReq}`;
        const data = await fetch(weatherURL);
        const dataJSON = await data.json();
        
        res.json(dataJSON);
    } catch(error) {
        console.log(error)
    }
});


app.listen(3000, function(){
    console.log('CORS Enabled on port 3000')
})