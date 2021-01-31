$(document).ready(function() {
  clockUpdate();
  setInterval(clockUpdate, 1000);
})

var ival = 0;

function clockUpdate() {
  var date = new Date();
  $('.digital-clock').css({'color': '#fff', 'text-shadow': '0 0 6px #ff0'});

  function addZero(x) {
    if (x < 10) {
      return x = '0' + x;
    } else {
      return x;
    }
  }

  function twelveHour(x, y=0) {
    var z = ((12-y)+x) % 12;
    if (z == 0) {
      return 12;
    }
    return z;
  }

  $('#dbg1').text(ival);
  $('#dbg2').text(date.getUTCHours());
  $('#dbg3').text(twelveHour(date.getUTCHours()));
  $('#dbg4').text(twelveHour(date.getUTCHours() - 8));
  $('#dbg5').text(twelveHour(ival));
  $('#dbg6').text(twelveHour(ival - 8));

  var hp = addZero(twelveHour(date.getUTCHours() - 8));
  var hc = addZero(twelveHour(date.getUTCHours() - 6));
  var he = addZero(twelveHour(date.getUTCHours() - 5));
  var m = addZero(date.getMinutes());
  var s = addZero(date.getSeconds());

  $('#pstclock').text(hp + ':' + m + ':' + s);
  $('#cstclock').text(hc + ':' + m + ':' + s);
  $('#estclock').text(he + ':' + m + ':' + s);

  ival++;
}
