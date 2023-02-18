var a = document.getElementById("day");
var b = document.getElementById("date");
var c = document.getElementById("moth");
var d = document.getElementById("sumbtn");
// button
var e = document.getElementById("cityname");
// input box
var f = document.getElementById("city-name");
// out put box
var g = document.getElementById("tempher");
var h = document.getElementById("tem-sta");

var getinfo = async (event) => {
  event.preventDefault();
  let cityval = e.value;
  if (cityval === "") {
    f.innerText = "Plz write the name befor search";
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=339d40bb76c4f3ef608929c90c2a372e`;
      var respod = await fetch(url);
      var data = await respod.json();
      var arrydata = [data];
      g.innerText = `${arrydata[0].main.temp}*C`;
      //
      f.innerText = `${arrydata[0].name},${arrydata[0].sys.country}`;
      const tempmood = (h.innerText = arrydata[0].weather[0].main);
      //   console.log(tempmood);
      if (tempmood == "Clear") {
        h.innerHTML = "<i class='fa-solid fa-sun'></i>";
      } else if (tempmood == "Smoke") {
        h.innerHTML = '<i class="fa-solid fa-smog"></i>';
      } else if (tempmood == "Clouds") {
        h.innerHTML = '<i class="fa-solid fa-cloud"></i>';
      } else if (tempmood == "Rain") {
        h.innerHTML = '<i class="fa-solid fa-cloud-showers-heavy"></i>';
      } else {
        h.innerHTML = "<i class='fa-solid fa-sun'></i>";
      }
    } catch (error) {
      f.innerText = "Plz enter the city name properly";
    }
  }
};

d.addEventListener("click", getinfo);
function abc() {
  var day = new Date();
  var getday = day.getDay();
  var arry = new Array();
  arry[0] = "Sun";
  arry[1] = "Mon";
  arry[2] = "Tar";
  arry[3] = "Wed";
  arry[4] = "Thu";
  arry[5] = "Fri";
  arry[7] = "Sat";
  var gett = arry[getday];
  return gett;
}
function xyz() {
  var date = new Date();
  var getdate = date.getDate();
  return getdate;
}
function moth() {
  var moth = new Date();
  var getmoth = moth.getMonth();
  var motharry = new Array();
  motharry[0] = "Jan";
  motharry[1] = "Feb";
  motharry[2] = "Mar";
  motharry[3] = "Apri";
  motharry[4] = "May";
  motharry[5] = "June";
  motharry[6] = "July";
  motharry[7] = "Aug";
  motharry[8] = "Set";
  motharry[9] = "Oct";
  motharry[10] = "Nav";
  motharry[11] = "Dem";
  var gettt = motharry[getmoth];
  return gettt;
}

a.innerHTML = abc();
b.innerHTML = xyz();
c.innerHTML = moth();
