var now = new Date(); //constant
var testDay = new Date();

var nextStream;//here for scope
var dayNumber = now.getUTCDay(); //Made a var for easy faking for debugging.
var dateNumber = now.getUTCDate();// ditto

//Faking tommorow
// dayNumber = now.getUTCDay()+1;
// dateNumber = now.getUTCDate()+1;

function sOrNah(input, unit){
  if (input == 1){
    document.getElementById("time").innerHTML += "1 "+unit+" ";
  } else if (input > 1) {
    document.getElementById("time").innerHTML += input + " "+unit+"s ";  
  }
}


window.onload = function() {
  console.log("£sdftg");
  
  
  while (true){
    if (dayNumber == 2 || dayNumber == 4 || dayNumber == 5){ //If there's gonna be a stream today
      var nextStream = new Date(testDay.getFullYear(), testDay.getMonth(), dateNumber, 24);
      break; //We've found the next stream.
    } else{
      //There's no stream today
      //Next we'll check tommorow
      testDay.setDate(testDay.getDate()+1);
    }  
  }

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;


  function showRemaining() {
    var now = new Date();
    var distance = nextStream - now;
    if (distance < 0) {
      
      clearInterval(timer);
      document.getElementById("time").innerHTML = "EXPIRED!";
      
      return;
    }
    
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById("time").innerHTML = "";  
    sOrNah(days,"day");
    sOrNah(hours,"hour");
    sOrNah(minutes, "min");
    sOrNah(seconds, "second");
  }



  var maymays = ["Next magic show in",
  "The rumble will begin in"]
  //Set the random splurge
  document.getElementById("splurge").innerHTML = maymays[Math.floor(Math.random() * maymays.length)];
  showRemaining()
  window.setInterval(function(){showRemaining()}, 1000);//Update timer once a second
};
