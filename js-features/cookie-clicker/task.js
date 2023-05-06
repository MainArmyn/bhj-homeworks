function Clicker() {
    let timer = {
    time: 0,
    plusTime: function() {
      this.time+=1;
    },
    reset: function() {
      this.time=0;
    }
  };
  function Wrapper() {
    timer.plusTime.call(timer); 
  }
  function start() {
    let id = setInterval(Wrapper,1);
    return id;
  }
  function stop(id) {
    clearInterval(id);
    timer.reset();
  }
    let cookie = document.querySelector("#cookie");
    cookie.style.cursor="pointer";
    let counter = document.querySelector("#clicker__counter");
    let middle = document.querySelector("#middle__counter");
    let book={"0":"height","1":"width"};
    let idx;
    let Magick;
    cookie.addEventListener("click", function() {
      let choice=Math.round(Math.random());
      Magick= d => {d[book[String(choice)]]-=50};
      cookie[book[String(choice)]]+=50;
      setTimeout(Magick,100,cookie);
      if (Number(counter.textContent)===0) {
        counter.textContent=Number(counter.textContent)+1;
        middle.textContent="0";
        idx=start();
        return;
      }
      counter.textContent=Number(counter.textContent)+1;
      middle.textContent=(1/(timer.time/1000)).toFixed(2);
      stop(idx);
      idx=start();
    });
  }
  Clicker();