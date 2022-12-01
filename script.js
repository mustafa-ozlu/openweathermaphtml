city = "uskudar";
apikey = "YOUR_OPENWEATHERAPIKEY";
lang = "tr";
units = "metric";
link =
  "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
  city +
  "&appid=" +
  apikey +
  "&lang=" +
  lang +
  "&units=" +
  units;
var request = new XMLHttpRequest();
request.open("GET", link, true);
request.onload = function () {
  var data = JSON.parse(this.response);
  const options = { weekday: "short", month: "numeric", day: "numeric" };
  // DAY 1
  var day1 = new Date(data.list[0].dt * 1000).toLocaleDateString(
    "tr-TR",
    options
  );

  document.getElementById("day1").innerHTML = day1;

  document.getElementById("name").innerHTML = data.city.name;
  let sunriset = data.list[0].sunrise;
  var sunrisett = new Date(sunriset * 1000).toLocaleTimeString("tr-TR");
  document.getElementById("sunrise").innerHTML = sunrisett;
  let sunsett = data.list[0].sunset;
  var sunsettt = new Date(sunsett * 1000).toLocaleTimeString("tr-TR");
  document.getElementById("sunset").innerHTML = sunsettt;
  document.getElementById("main").innerHTML =
    data.list[0].weather[0].description;
  document.getElementById("temp").innerHTML =
    Math.round(data.list[0].temp.day) +
    " / " +
    Math.round(data.list[0].temp.night);
  document.getElementById("feels_like").innerHTML = Math.round(
    data.list[0].feels_like.day
  );
  document.getElementById("temp_min").innerHTML = Math.round(
    data.list[0].temp.min
  );
  document.getElementById("temp_max").innerHTML = Math.round(
    data.list[0].temp.max
  );
  document.getElementById("pressure").innerHTML = data.list[0].pressure;
  document.getElementById("humidity").innerHTML = data.list[0].humidity;
  document.getElementById("speed").innerHTML =
    data.list[0].deg + " / " + Math.round(data.list[0].speed * 3.6) + " km";
  icon = data.list[0].weather[0].icon;
  let iconurl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  icourl.src = iconurl;
  document.getElementById("icourl").innerHTML = iconurl;
  //DAY 1 END

  // DAY 2
  var day2 = new Date(data.list[1].dt * 1000).toLocaleDateString(
    "tr-TR",
    options
  );
  document.getElementById("day2").innerHTML = day2;

  let sunriset2 = data.list[1].sunrise;
  var sunriset22 = new Date(sunriset2 * 1000).toLocaleTimeString("tr-TR");
  document.getElementById("sunrise2").innerHTML = sunriset22;
  let sunset2 = data.list[1].sunset;
  var sunset22 = new Date(sunset2 * 1000).toLocaleTimeString("tr-TR");
  document.getElementById("sunset2").innerHTML = sunset22;
  document.getElementById("main2").innerHTML =
    data.list[1].weather[0].description;
  document.getElementById("temp2").innerHTML =
    Math.round(data.list[1].temp.day) +
    " / " +
    Math.round(data.list[1].temp.night);
  document.getElementById("feels_like2").innerHTML = Math.round(
    data.list[1].feels_like.day
  );
  document.getElementById("temp_min2").innerHTML = Math.round(
    data.list[1].temp.min
  );
  document.getElementById("temp_max2").innerHTML = Math.round(
    data.list[1].temp.max
  );
  document.getElementById("pressure2").innerHTML = data.list[1].pressure;
  document.getElementById("humidity2").innerHTML = data.list[1].humidity;
  document.getElementById("speed2").innerHTML =
    data.list[1].deg + " / " + Math.round(data.list[1].speed * 3.6) + " km";
  icon2 = data.list[1].weather[0].icon;
  let iconurl2 = "https://openweathermap.org/img/wn/" + icon2 + "@2x.png";
  icourl2.src = iconurl2;
  document.getElementById("icourl2").innerHTML = iconurl2;
  //DAY 2 END

  // DAY 3
  var day3 = new Date(data.list[2].dt * 1000).toLocaleDateString(
    "tr-TR",
    options
  );
  document.getElementById("day3").innerHTML = day3;

  let sunriset3 = data.list[2].sunrise;
  var sunriset33 = new Date(sunriset3 * 1000).toLocaleTimeString("tr-TR");
  document.getElementById("sunrise3").innerHTML = sunriset33;
  let sunset3 = data.list[2].sunset;
  var sunset33 = new Date(sunset3 * 1000).toLocaleTimeString("tr-TR");
  document.getElementById("sunset3").innerHTML = sunset33;
  document.getElementById("main3").innerHTML =
    data.list[2].weather[0].description;
  document.getElementById("temp3").innerHTML =
    Math.round(data.list[2].temp.day) +
    " / " +
    Math.round(data.list[2].temp.night);
  document.getElementById("feels_like3").innerHTML = Math.round(
    data.list[2].feels_like.day
  );
  document.getElementById("temp_min3").innerHTML = Math.round(
    data.list[2].temp.min
  );
  document.getElementById("temp_max3").innerHTML = Math.round(
    data.list[2].temp.max
  );
  document.getElementById("pressure3").innerHTML = data.list[2].pressure;
  document.getElementById("humidity3").innerHTML = data.list[2].humidity;
  document.getElementById("speed3").innerHTML =
    data.list[2].deg + " / " + Math.round(data.list[2].speed * 3.6) + " km";
  icon3 = data.list[2].weather[0].icon;
  let iconurl3 = "https://openweathermap.org/img/wn/" + icon3 + "@2x.png";
  icourl3.src = iconurl3;
  document.getElementById("icourl3").innerHTML = iconurl3;
  //DAY 3 END

  // DAY 4
  var day4 = new Date(data.list[3].dt * 1000).toLocaleDateString(
    "tr-TR",
    options
  );

  document.getElementById("day4").innerHTML = day4;
  let sunriset4 = data.list[3].sunrise;
  var sunriset44 = new Date(sunriset4 * 1000).toLocaleTimeString("tr-TR");
  document.getElementById("sunrise4").innerHTML = sunriset44;
  let sunset4 = data.list[3].sunset;
  var sunset44 = new Date(sunset4 * 1000).toLocaleTimeString("tr-TR");
  document.getElementById("sunset4").innerHTML = sunset44;
  document.getElementById("main4").innerHTML =
    data.list[3].weather[0].description;
  document.getElementById("temp4").innerHTML =
    Math.round(data.list[3].temp.day) +
    " / " +
    Math.round(data.list[3].temp.night);
  document.getElementById("feels_like4").innerHTML = Math.round(
    data.list[3].feels_like.day
  );
  document.getElementById("temp_min4").innerHTML = Math.round(
    data.list[3].temp.min
  );
  document.getElementById("temp_max4").innerHTML = Math.round(
    data.list[3].temp.max
  );
  document.getElementById("pressure4").innerHTML = data.list[3].pressure;
  document.getElementById("humidity4").innerHTML = data.list[3].humidity;
  document.getElementById("speed4").innerHTML =
    data.list[3].deg + " / " + Math.round(data.list[3].speed * 3.6) + " km";
  icon4 = data.list[3].weather[0].icon;
  let iconurl4 = "https://openweathermap.org/img/wn/" + icon4 + "@2x.png";
  icourl4.src = iconurl4;
  document.getElementById("icourl4").innerHTML = iconurl4;
  //DAY 4 END

  // DAY 5
  var day5 = new Date(data.list[4].dt * 1000).toLocaleDateString(
    "tr-TR",
    options
  );

  document.getElementById("day5").innerHTML = day5;

  var sunriset5 = new Date(data.list[4].sunrise * 1000).toLocaleTimeString(
    "tr-TR"
  );
  document.getElementById("sunrise5").innerHTML = sunriset5;

  var sunset5 = new Date(data.list[4].sunset * 1000).toLocaleTimeString(
    "tr-TR"
  );
  document.getElementById("sunset5").innerHTML = sunset5;
  document.getElementById("main5").innerHTML =
    data.list[4].weather[0].description;
  document.getElementById("temp5").innerHTML =
    Math.round(data.list[4].temp.day) +
    " / " +
    Math.round(data.list[4].temp.night);
  document.getElementById("feels_like5").innerHTML = Math.round(
    data.list[4].feels_like.day
  );
  document.getElementById("temp_min5").innerHTML = Math.round(
    data.list[4].temp.min
  );
  document.getElementById("temp_max5").innerHTML = Math.round(
    data.list[4].temp.max
  );
  document.getElementById("pressure5").innerHTML = data.list[4].pressure;
  document.getElementById("humidity5").innerHTML = data.list[4].humidity;
  document.getElementById("speed5").innerHTML =
    data.list[4].deg + " / " + Math.round(data.list[4].speed * 3.6) + " km";

  let iconurl5 =
    "https://openweathermap.org/img/wn/" +
    data.list[4].weather[0].icon +
    "@2x.png";
  icourl5.src = iconurl5;
  document.getElementById("icourl5").innerHTML = iconurl5;
  //DAY 5 END

  // DAY 6
  var day6 = new Date(data.list[5].dt * 1000).toLocaleDateString(
    "tr-TR",
    options
  );

  document.getElementById("day6").innerHTML = day6;

  var sunriset6 = new Date(data.list[5].sunrise * 1000).toLocaleTimeString(
    "tr-TR"
  );
  document.getElementById("sunrise6").innerHTML = sunriset6;

  var sunset6 = new Date(data.list[5].sunset * 1000).toLocaleTimeString(
    "tr-TR"
  );
  document.getElementById("sunset6").innerHTML = sunset6;
  document.getElementById("main6").innerHTML =
    data.list[5].weather[0].description;
  document.getElementById("temp6").innerHTML =
    Math.round(data.list[5].temp.day) +
    " / " +
    Math.round(data.list[5].temp.night);
  document.getElementById("feels_like6").innerHTML = Math.round(
    data.list[5].feels_like.day
  );
  document.getElementById("temp_min6").innerHTML = Math.round(
    data.list[5].temp.min
  );
  document.getElementById("temp_max6").innerHTML = Math.round(
    data.list[5].temp.max
  );
  document.getElementById("pressure6").innerHTML = data.list[5].pressure;
  document.getElementById("humidity6").innerHTML = data.list[5].humidity;
  document.getElementById("speed6").innerHTML =
    data.list[5].deg + " / " + Math.round(data.list[5].speed * 3.6) + " km";

  let iconurl6 =
    "https://openweathermap.org/img/wn/" +
    data.list[5].weather[0].icon +
    "@2x.png";
  icourl6.src = iconurl6;
  document.getElementById("icourl6").innerHTML = iconurl6;
  //DAY 6 END

  // DAY 7
  var day7 = new Date(data.list[6].dt * 1000).toLocaleDateString(
    "tr-TR",
    options
  );

  document.getElementById("day7").innerHTML = day7;

  var sunriset7 = new Date(data.list[6].sunrise * 1000).toLocaleTimeString(
    "tr-TR"
  );
  document.getElementById("sunrise7").innerHTML = sunriset7;

  var sunset7 = new Date(data.list[6].sunset * 1000).toLocaleTimeString(
    "tr-TR"
  );
  document.getElementById("sunset7").innerHTML = sunset7;
  document.getElementById("main7").innerHTML =
    data.list[6].weather[0].description;
  document.getElementById("temp7").innerHTML =
    Math.round(data.list[6].temp.day) +
    " / " +
    Math.round(data.list[6].temp.night);
  document.getElementById("feels_like7").innerHTML = Math.round(
    data.list[6].feels_like.day
  );
  document.getElementById("temp_min7").innerHTML = Math.round(
    data.list[6].temp.min
  );
  document.getElementById("temp_max7").innerHTML = Math.round(
    data.list[6].temp.max
  );
  document.getElementById("pressure7").innerHTML = data.list[6].pressure;
  document.getElementById("humidity7").innerHTML = data.list[6].humidity;
  document.getElementById("speed7").innerHTML =
    data.list[6].deg + " / " + Math.round(data.list[6].speed * 3.6) + " km";

  let iconurl7 =
    "https://openweathermap.org/img/wn/" +
    data.list[6].weather[0].icon +
    "@2x.png";
  icourl7.src = iconurl7;
  document.getElementById("icourl7").innerHTML = iconurl7;
  //DAY 7 END
};
request.send();
