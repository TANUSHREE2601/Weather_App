import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const[weatherInfo, setWeatherInfo] = useState({
        city: "Vidisha",
        feelsLike: 37.91,
        humidity:69,
        temp: 31.23,
        tempMax: 31.23,
        tempMin: 31.23,
        weather: "overcast clouds",
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    let backgroundImage = "";
  if (weatherInfo.humidity > 80) {
    backgroundImage =
      "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW58ZW58MHx8MHx8fDA%3D')";
  } else if (weatherInfo.temp > 15) {
    backgroundImage =
      "url('https://images.unsplash.com/photo-1668035677166-9ab0bf232021?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VubnklMjBkYXklMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D')";
  } else {
    backgroundImage =
      "url('https://images.unsplash.com/photo-1679091490242-7ad6d76177f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
  }

  const appStyle = {
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundImage: backgroundImage,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    color: "black",
};


return (
  <div style={appStyle}>
    <h2>WEATHER APPLICATION</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  </div>
);

}