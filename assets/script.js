const date = new Date();

function submitDate() {
  const dateBirth = document.querySelector("#date");
  const values = dateBirth.value.split("-");
  const dates = values.map((valor) => {
    return Number(valor);
  });

  if (dateBirth.value === "") {
    addDateToSite(0, 0, 0, 0);
    alert("POR FAVOR DIGITE UMA DATA!");
    clearInterval(interval);
    dateBirth.value = "";
    return;
  }

  if (
    /*Condição para o ano*/ dates[0] > date.getFullYear() ||
    /*Condição para o mês*/ (dates[1] > date.getMonth() + 1 &&
      dates[0] === date.getFullYear()) ||
    /*Condição para o dia*/ (dates[2] > date.getDate() &&
      dates[1] === date.getMonth() + 1 &&
      dates[0] == date.getFullYear())
  ) {
    addDateToSite(0, 0, 0, 0);
    alert(
      `POR FAVOR DIGITE UMA DATA QUE JÁ TENHA SE PASSADO OU A DATA DE HOJE: ${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`
    );
    clearInterval(interval);
    dateBirth.value = "";
    return;
  } else {
    const dateBirthday = new Date(
      `${dates[1]} ${dates[2]} ${dates[0]} 00:00:00`
    );
    clearInterval(interval);
    interval = setInterval(() => {
      calculateDates(dateBirthday);
    }, 1000);
  }
}

function calculateDates(dateBirthday) {
  const date = new Date();
  const pastTime = date - dateBirthday;
  const days = Math.floor(pastTime / 1000 / 60 / 60 / 24);
  const hours = Math.floor(pastTime / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(pastTime / 1000 / 60) % 60;
  const seconds = Math.floor(pastTime / 1000) % 60;
  addDateToSite(days, hours, minutes, seconds);
}

function addDateToSite(days, hours, minutes, seconds) {
  const h1 = document.getElementsByTagName("h1");

  h1[0].innerHTML = days < 10 ? `0${days}` : days;
  h1[1].innerHTML = hours < 10 ? `0${hours}` : hours;
  h1[2].innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  h1[3].innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

let interval = setInterval(() => {
  calculateDates(new Date());
}, 1000);
setTimeout(() => {
  clearInterval(interval);
}, 3000);
