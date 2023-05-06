function V2Timer() {
    let el=document.querySelector("#timer");
    let [hours,minutes,seconds] = el.textContent.split(':');
    hours=Number(hours);
    let check = a => {if (String(a).length===1){ return "0"+a} return a;};
    minutes=Number(minutes);
    seconds=Number(seconds);
    seconds-=1;
    el.textContent=[check(hours),check(minutes),check(seconds)].join(":");
    if (seconds===0 && minutes>0) {
      minutes-=1;
      el.textContent=[check(hours),check(minutes),check(seconds)].join(":");
      seconds=60;
      el.textContent=[check(hours),check(minutes),check(seconds)].join(":");
    } else if (minutes<=0 && hours>0 && seconds===0){
      hours-=1;
      el.textContent=[check(hours),check(minutes),check(seconds)].join(":");
      minutes=60;
      seconds=60;
      el.textContent=[check(hours),check(minutes),check(seconds)].join(":");
    } else if (minutes===0 && hours===0 && seconds===0) {
      alert("Вы выиграли в конкурсе!");
      clearInterval(id);
      location.assign(go.href);
    } 
  }
  let id = setInterval(V2Timer,1000);
  
  