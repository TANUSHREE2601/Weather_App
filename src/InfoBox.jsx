import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';

import "./InfoBox.css"

export default function InfoBox({info}){
    const INIT_URL = 
    "https://images.unsplash.com/photo-1443466025693-9f6c5d2e8a22?q=80&w=1119&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = 
    "https://plus.unsplash.com/premium_photo-1673515786778-56a732133119?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = 
    "https://images.unsplash.com/photo-1641607745477-4e0b7b46b400?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = 
    "https://images.unsplash.com/photo-1434118489318-42a0e62c6235?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW55JTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww";
    return(
        <div className="InfoBox">
    <div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL:info.temp > 15 ? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity > 80 ? <CloudySnowingIcon/>:info.temp > 15 ? <SunnyIcon/>: <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'black' }} component={"span"}>
          <p> Temperature: {info.temp}&deg;C</p>
          <p> Humidity: {info.humidity}%</p>
          <p> Minimum Temperature: {info.tempMin}&deg;C</p>
          <p> Maximum Temperature: {info.tempMax}&deg;C</p>
          <p> Weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}