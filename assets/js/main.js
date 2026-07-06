(function () {
  var weddingDate = new Date("2026-09-02T10:30:00");

  var els = {
    days: document.getElementById("cd-days"),
    hours: document.getElementById("cd-hours"),
    min: document.getElementById("cd-min"),
    sec: document.getElementById("cd-sec"),
  };

  if (!els.days) return;

  function tick() {
    var diff = weddingDate - new Date();
    if (diff <= 0) {
      els.days.textContent = "0";
      els.hours.textContent = "0";
      els.min.textContent = "0";
      els.sec.textContent = "0";
      return;
    }
    var day = Math.floor(diff / 86400000);
    var hr = Math.floor((diff % 86400000) / 3600000);
    var mn = Math.floor((diff % 3600000) / 60000);
    var sc = Math.floor((diff % 60000) / 1000);

    els.days.textContent = day;
    els.hours.textContent = hr;
    els.min.textContent = mn;
    els.sec.textContent = sc;
  }

  tick();
  setInterval(tick, 1000);
})();
