setInterval(function clock() {
  let myDate = new Date();
  let houer = myDate.getHours();
  let minute = myDate.getMinutes();
  let second = myDate.getSeconds();
  let showTime = document.querySelector(".time");
  let dayTime = document.querySelector(".dayTime");
  if (houer > 12) {
    houer -= 12;
    dayTime.innerHTML="PM"
  }else{
    dayTime.innerHTML="AM"
  }
  if (second < 10) {
    second = "0" + second;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }
  if (houer < 10) {
    houer = "0" + houer;
  }

  showTime.innerHTML = `${houer} : ${minute} : ${second}`;
}, 1000);
