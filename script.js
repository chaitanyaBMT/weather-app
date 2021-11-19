const box = document.querySelector(".box");
const icon = document.querySelector(".weather img");

let requestData = () => {
  const inputCity = document.querySelector(".input-city");
  const city = inputCity.value;
  
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8b3f0078ab2b0f974d93e12550b1f8e2`;
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      weatherDetails(data);
    });
};

let weatherDetails = (info) => {
  console.log(info);
  const temp = info.main.temp;
  const weather = info.weather[0].main;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let time = new Date();
  const day = days[time.getDay()];
  const month = months[time.getMonth()];
  const date = time.getDate();

  const id = info.weather[0].id;

  if (id == 800) {
    icon.src = "clear.svg";
  } else if (id >= 200 && id <= 232) {
    s.src = "storm.svg";
  } else if (id >= 600 && id <= 622) {
    icon.src = "snow.svg";
  } else if (id >= 701 && id <= 781) {
    icon.src = "haze.svg";
  } else if (id >= 801 && id <= 804) {
    icon.src = "cloud.svg";
  } else if ((id >= 300 && id <= 321) || (id >= 500 && id <= 531)) {
    icon.src = "rain.svg";
  }

  box.querySelector(".temp .num").innerHTML = Math.floor(temp);
  box.querySelector(".weather-status .status").innerHTML = weather;
  box.querySelector(".date-part .day").innerHTML = day;
  box.querySelector(".date-part .month").innerHTML = month;
  box.querySelector(".date-part .date").innerHTML = date;
};




