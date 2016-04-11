//HTML objects
var prompt = document.querySelector("#prompt"); //Prompting header
var input = document.querySelector("#response"); //Input form
var submit = document.querySelector("input[type='submit']"); //Submit button
var paragraph = document.querySelector("p"); //Paragraph containing random string
var error = document.querySelector("#error");
var letters = []; //Array of spans containing the letters of the randomized string
for( var i = 1; i <= 12; i++ ) {
  letters.push(document.querySelector("#letter" + i));
}

//Global variables
var response = ""; //User's response
var answer = []; //Randomized string of characters
var score = 0;
var state = 0;
var kArray = [];
var k = Math.abs(Math.log(0.85)/5);;
var interval;
var ready = true;
var noOfIntervals = 0;

//Function for changing state
function moveState() {
  state = (state + 1) % 5;
  if( state == 0 ) {
    input.value = "";
    prompt.innerHTML = "Input the given series of characters (case does not matter) and press Submit.";
    for( i = 0; i < 12; i++ ) {
      letters[i].style.backgroundColor = "white";
    }
  } else if( state == 1 ) {
    input.value = "";
    prompt.innerHTML = "Please re-type the given series of characters and press Submit.";
  } else if( state == 2 ) {
    input.value = "";
    input.readOnly = true;
    submit.disabled = true;
    paragraph.style.visibility = "hidden";
    prompt.innerHTML = "Please wait for the next recall attempt...";
    noOfIntervals = 0;
    interval = setInterval(function(){
      noOfIntervals++;
      if( getComp() <= 0.85 ) {
        moveState();
      }
    }, 5000);
  } else if( state == 3 ) {
    clearInterval(interval);
    input.readOnly = false;
    submit.disabled = false;
    prompt.innerHTML = "Enter the series of characters from memory. Partial credit is given for including a correct character in the incorrect order.";
  } else {
    ready = false;
    score = calcScore();
    prompt.innerHTML = "Your score was " + Math.round(score * 100) + "%. Press Submit to continue.";
    if( score < 0.1 ) {
      score = 0.1;
    } else if( score > 0.9 ) {
      score = 0.9;
    }
    paragraph.style.visibility = "visible";
    kArray.push(deriveK());
    k = calcNewK();
    ready = true;
  }
}

//Returns the Comp(x) function = e^(-kx)
function getComp() {
  return Math.exp(-1 * k * noOfIntervals * 5);
}

function calcScore() {
  var partials = [];
  var result = 0;
  for( var j = 0; j < 12; j++ ) {
    letters[j].style.backgroundColor = "rgba(255,0,0,0.3)";
  }
  for( j = 0; j < 12; j++ ) {
    for( var l = 0; l < 12; l++ ) {
      if( response.charAt(j).toUpperCase() == answer[l] && partials.indexOf(l) == -1 ) {
        partials.push(l);
        result += 0.25;
        letters[l].style.backgroundColor = "rgba(0,0,255,0.3)";
        break;
      }
    }
  }
  for( j = 0; j < 12; j++ ) {
    if( response.charAt(j).toUpperCase() == answer[j] ) {
      result += 0.75;
      letters[j].style.backgroundColor = "rgba(0,255,0,0.3)";
    }
  }
  result /= 12;
  
  return result;
}

function deriveK() {
  return Math.abs(Math.log(score) / ( noOfIntervals * 5 ));
}

function calcNewK() {
  if( kArray.length == 1 ) {
    return kArray[0] / 2;
  }
  var n;
  var yArray;
  var meanX;
  var meanY;
  var SDX;
  var SDY;
  var residX;
  var residY;
  var residXSquared;
  var residYSquared;
  var residXTimesY;
  var sumResidXSquared;
  var sumResidYSquared;
  var sumResidXTimesY;
  var r;
  var m;
  var b;
  
  yArray = kArray.map(function(k0) {
    return Math.log(k0);
  });
  n = kArray.length;
  meanX = n / 2 - 0.5;
  meanY = yArray.reduce(function(y1, y2) {
    return y1 + y2;
  }) / n;
  
  //Calculate relevant residual arrays
  residX = kArray.map(function(k0, index) {
    return index - meanX;
  });
  residY = yArray.map(function(y0) {
    return y0 - meanY;
  });
  residXSquared = residX.map(function(x) {
    return x * x;
  });
  residYSquared = residY.map(function(y) {
    return y * y;
  });
  residXTimesY = residX.map(function(x, index) {
    return x * residY[index];
  });
  
  //Calculate Pearson correlation coefficient, r
  sumResidXSquared = residXSquared.reduce(function(r0, r1) {
    return r0 + r1;
  });
  sumResidYSquared = residYSquared.reduce(function(r0, r1) {
    return r0 + r1;
  });
  sumResidXTimesY = residXTimesY.reduce(function(r0,r1) {
    return r0 + r1;
  });
  
  r = sumResidXTimesY / Math.sqrt(sumResidXSquared * sumResidYSquared);
  
  //Calculate standard deviation
  SDX = Math.sqrt(sumResidXSquared / n);
  SDY = Math.sqrt(sumResidYSquared / n);
  
  //Calculate components of log-linear regression line
  m = r * SDY / SDX;
  b = meanY - m * meanX;

  console.log('m = ' + m + ', b = ' + b);
  
  //Return new k value
  return Math.exp(m * n + b);
}

//Initialize exercise
for( i = 0; i < 12; i++ ) {
  //Random integer converted into a unicode alphanumeric character
  if( Math.random() < 5/12 ) {
    answer.push(String.fromCharCode((Math.floor(Math.random() * 10)) + 48));
  } else {
    answer.push(String.fromCharCode((Math.floor(Math.random() * 26)) + 65));
  }
}

for( i = 0; i < 12; i++ ) {
  letters[i].innerHTML = answer[i];
}

submit.addEventListener("click", function(evt){
  evt.preventDefault();
  response = input.value;
  if( state == 0 || state == 1 ) {
    for( var j = 0; j < 12; j++ ) {
      if( answer[j] != response.charAt(j).toUpperCase() ) {
        error.innerHTML = "One or more characters typed are incorrect";
        return;
      }
    }
    error.innerHTML = "";
    moveState();
  } else if( state == 2 ) {
    //Do nothing
  } else if( state == 3 ) {
    if( response.length != 12 ) {
      error.innerHTML = "Input must be 12 characters long.";
    } else {
      error.innerHTML = "";
      moveState();
    }
  } else if( ready ) {
    moveState();
  }
});

//Stops form from submitting when <Enter> key is pressed
input.addEventListener("onkeydown", function(evt) {
  if( evt.keyCode == 13 ) {
    evt.preventDefault();
  }
});