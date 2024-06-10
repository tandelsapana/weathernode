let getInfo =  async () => {
    console.log("hello!");
    // let response = await fetch("https://reqres.in/api/users/2");
    // let dat = await response.json();
    // console.log(dat);
    // console.log(response.text())
    // let city = "bhilai";
    let city = document.getElementById('cityname').value;
    let key = 'd72729578543cfc435344f99b226b1c9';
    let wurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    let resp = await fetch(wurl);
    console.log(resp);
    let data = await resp.json();
    console.log(data);
    let maxtemp = data.main.temp_max
    let mintemp =  data.main.temp_min
    console.log(maxtemp);
    console.log(mintemp);
    let weather = data.weather[0].main;
   
    let weatherDesc = data.weather[0].description;
    let windSpeed = data.wind.speed;
    console.log(data.name);  
    let wicon = data.weather[0].icon
    let wimagesrc = "http://www.openweathermap.org/img/w/"+wicon+".png"


    document.getElementById("mydiv").innerHTML =
    `Weather today in <b> ${city} </b> is
        <br> Max Temp ${maxtemp}
        <br> Min Temp ${mintemp}
        <br> Weather  ${weather}
        <br> Weather description ${weatherDesc}
        <br> Wind speed ${windSpeed}
        <img src='${wimagesrc}' alt='weather image here'/>
        `


}


