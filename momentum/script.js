const time = document.querySelector('.time');
const focus = document.querySelector('.focus');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const date = document.querySelector('.date');

//weather
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const air = document.querySelector('.air');
const wind = document.querySelector('.wind');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=8e60446652d969eb705138337668aa6c&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  
  
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  air.textContent = `${data.main.humidity.toFixed(0)}%`;
  wind.textContent = `${data.wind.speed.toFixed(0)}км/ч`;
  weatherDescription.textContent = data.weather[0].description;
}

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

//const amPm = hour >= 12 ? 'PM' : 'AM';

//hour = hour % 12 || 12;

time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

setTimeout(showTime, 1000);

}

function showDate() {
    let today = new Date(),
    month = today.getMonth(),
    day = today.getDate(),
    weekday  = today.getDay();

    let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    let monthName = ["Января", "Февраля", "Марта", "Апреля", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

date.innerHTML = `${days[weekday]}<span>, </span>${day}<span> </span>${monthName[month]}`;

setTimeout(showTime, 1000);

}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if (hour < 12 && hour > 6) {
        document.body.style.backgroundImage = "url('assets/images/morning/12.jpg')";
        greeting.textContent = 'Доброе утро, ';
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('assets/images/day/12.jpg')";
        greeting.textContent = 'Добрый день, ';       
    } else if (hour < 24) {
        document.body.style.backgroundImage = "url('assets/images/evening/03.jpg')";
        greeting.textContent = 'Добрый вечер, ';   
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundImage = "url('assets/images/night/14.jpg')";
        greeting.textContent = 'Доброй ночи, ';   
        document.body.style.color = 'white';
    }
}

function getName() {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '' || localStorage.getItem('name') === 'Введите имя' ) {
        name.textContent = 'Введите имя';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    
    if (e.type === 'keypress') {
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
      }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '' || localStorage.getItem('focus') === 'Введите цель' ) {
        focus.textContent = 'Введите цель';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
showDate();

//

const baseDay = 'assets/images/day/';
const imagesDay = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];

const baseEvening = 'assets/images/evening/';
const imagesEvening = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];

const baseMor = 'assets/images/morning/';
const imagesMor = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];

const baseNight = 'assets/images/night/';
const imagesNight = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];


let i = 0;

function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {      
    body.style.backgroundImage = `url(${src})`;
  }; 
}
function getImage() {
    let today = new Date();
    let hour = today.getHours();
  const indexD = i % imagesDay.length;
  const indexM = i % imagesMor.length;
  const indexE = i % imagesEvening.length;
  const indexN = i % imagesNight.length;

  const imageSrcDay = baseDay + imagesDay[indexD];
  const imageMor = baseMor + imagesMor[indexM];
  const imageSrcE = baseEvening + imagesEvening[indexE];
  const imageSrcN = baseNight + imagesNight[indexN];

  if (hour < 12 && hour > 6) {
    viewBgImage(imageMor);
    i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
  } else if (hour < 18) {
    viewBgImage(imageSrcDay);
    i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
  } else if (hour < 24) {
    viewBgImage(imageSrcE);
    i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
  } else {
    viewBgImage(imageSrcN);
    i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
  }
  
  
} 
const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);

//quote

const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');



async function getQuote() {  
  const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en;`;
  const res = await fetch(url);
  const data = await res.json(); 
  blockquote.textContent = data.quoteText;
  figcaption.textContent = data.quoteAuthor;
}
document.addEventListener('DOMContentLoaded', getQuote);
