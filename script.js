var accept_cookies = false;

function acceptCookies() {
  accept_cookies = true;
  removeBanner();
}

function removeBanner() {
  document
    .getElementById("cookie-banner")
    .parentNode.removeChild(document.getElementById("cookie-banner"));
}

removeBanner();

var questions = [];
var answers = [];
var altAnswers1 = [];
var points = [];

$.getJSON("questions_z1.json", function (data) {
  questions = data.questions;
  answers = data.answers;
  altAnswers1 = data.altAnswers1;
  //
  for (var i = 0; i < questions.length; i++) {
    points.push(0);
  }

  var points_string = getCookie("points");

  if (points_string != "") {
    points = points_string.split(",");
    document.getElementById("problems").innerHTML = "Problemwörter";
    for (var i = 0; i < points.length; i++) {
      points[i] = parseInt(points[i], 10);
    }
    for (var i = 0; i < points.length; i++) {
      if (points[i] < 0) {
        document.getElementById("problems").innerHTML +=
          "<br>" + questions[i] + " = " + answers[i];
      }
    }
  }

  if (points.length < questions.length) {
    for (var i = points.length; i < questions.length; i++) {
      points.push(0);
    }
  }
  //
  nextQuestion();
}).fail(function () {
  console.log("An error has occurred.");
});

function setCookie(cname, cvalue, exdays) {
  return;
  if (accept_cookies == false) {
    return;
  }
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  return "";
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var chosen = Math.floor(Math.random() * questions.length);
var quest = questions[chosen];
var answ = answers[chosen];
var user_answ = "";

var correct = 0;
var incorrect = 0;

document.getElementById("prefix").innerHTML = "Übersetze:";

document.getElementById("question").innerHTML = quest;

function checkAnswer() {
  user_answ = document.getElementById("answer").value;
  if (
    user_answ.toLowerCase() == answ.toLowerCase() ||
    user_answ.toLowerCase() == altAnswers1[chosen].toLowerCase()
  ) {
    if (document.getElementById("message").innerHTML == "<br><br>") {
      correct++;
      points[chosen] += 1;
      setCookie("points", points.toString(), 365);
      document.getElementById("problems").innerHTML = "Problemwörter";
      for (var i = 0; i < points.length; i++) {
        if (points[i] < 0) {
          document.getElementById("problems").innerHTML +=
            "<br>" + questions[i] + " = " + answers[i];
        }
      }
      if (document.getElementById("problems").innerHTML == "Problemwörter") {
        document.getElementById("problems").innerHTML = "";
      }
    }
    document.getElementById("message").innerHTML = "Richtig!<br><br>";
    if (altAnswers1[chosen] != answ) {
      if (user_answ.toLowerCase() == answ.toLowerCase())
        document.getElementById("message").innerHTML +=
          "Alternative Antwort: " + altAnswers1[chosen];
      else
        document.getElementById("message").innerHTML +=
          "Alternative Antwort: " + answ;
    }
    document.getElementById("question").style =
      "font-weight: normal; color: green";
  } else {
    if (document.getElementById("message").innerHTML == "<br><br>") {
      incorrect++;
      points[chosen] -= 1;
      setCookie("points", points.toString(), 365);
      document.getElementById("problems").innerHTML = "Problemwörter";
      for (var i = 0; i < points.length; i++) {
        if (points[i] < 0) {
          document.getElementById("problems").innerHTML +=
            "<br>" + questions[i] + " = " + answers[i];
        }
      }
      if (document.getElementById("problems").innerHTML == "Problemwörter") {
        document.getElementById("problems").innerHTML = "";
      }
    }
    document.getElementById("message").innerHTML =
      "Richtige Antwort: " + answ + "<br><br>";
    document.getElementById("question").style =
      "font-weight: normal; color: #bd1c1c";
  }
  document.getElementById("stats").innerHTML =
    correct.toString(10) +
    " von " +
    (correct + incorrect).toString(10) +
    " (" +
    Math.round((correct / (correct + incorrect)) * 100).toString(10) +
    "%) richtig (Note " +
    percentToGrade(
      Math.round((correct / (correct + incorrect)) * 100)
    ).toString(10) +
    ")";
}

function percentToGrade(percent) {
  if (percent >= 87) {
    return 1;
  } else if (percent >= 75) {
    return 2;
  } else if (percent >= 63) {
    return 3;
  } else if (percent >= 50) {
    return 4;
  } else {
    return 5;
  }
}

document.getElementById("answer").addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    if (document.getElementById("message").innerHTML == "<br><br>") {
      document.getElementById("check").click();
    } else {
      document.getElementById("next").click();
    }
  }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function nextQuestion() {
  var l = [];
  l[0] = document.getElementById("l1").checked;
  l[1] = document.getElementById("l2").checked;
  l[2] = document.getElementById("l3").checked;
  l[3] = document.getElementById("l4").checked;
  l[4] = document.getElementById("l5").checked;
  l[5] = document.getElementById("l6").checked;
  l[6] = document.getElementById("l7").checked;
  l[7] = document.getElementById("l8").checked;
  l[8] = document.getElementById("l9").checked;
  l[9] = document.getElementById("l10").checked;
  l[10] = document.getElementById("l11").checked;
  l[11] = document.getElementById("l12").checked;
  l[12] = document.getElementById("l13").checked;
  console.log(l);

  var chl = getRandomInt(0, 13);

  var tries = 0;

  while (l[chl] != true) {
    chl = getRandomInt(0, 13);
    tries++;
    if (tries >= 100) {
      chl = 12;
      break;
    }
  }
  chosen = 157;
  //while (answers[chosen] == "") {
  switch (chl) {
    case 0:
      var ch1 = getRandomInt(0, 33);
      var ch2 = getRandomInt(0, 33);
      break;
    case 1:
      var ch1 = getRandomInt(33, 63);
      var ch2 = getRandomInt(33, 63);
      break;
    case 2:
      var ch1 = getRandomInt(63, 90);
      var ch2 = getRandomInt(63, 90);
      break;
    case 3:
      var ch1 = getRandomInt(90, 119);
      var ch2 = getRandomInt(90, 119);
      break;
    case 4:
      var ch1 = getRandomInt(119, 156);
      var ch2 = getRandomInt(119, 156);
      break;
    case 5:
      var ch1 = getRandomInt(156, 183);
      var ch2 = getRandomInt(156, 183);
      break;
    case 6:
      var ch1 = getRandomInt(183, 212);
      var ch2 = getRandomInt(183, 212);
      break;
    case 7:
      var ch1 = getRandomInt(212, 234);
      var ch2 = getRandomInt(212, 234);
      break;
    case 8:
      var ch1 = getRandomInt(234, 262);
      var ch2 = getRandomInt(234, 262);
      break;
    case 9:
      var ch1 = getRandomInt(262, 286);
      var ch2 = getRandomInt(262, 286);
      break;
    case 10:
      var ch1 = getRandomInt(286, 312);
      var ch2 = getRandomInt(286, 312);
      break;
    case 11:
      var ch1 = getRandomInt(312, 336);
      var ch2 = getRandomInt(312, 336);
      break;
    case 12:
      var ch1 = getRandomInt(336, 357);
      var ch2 = getRandomInt(336, 357);
      break;
  }

  if (points[ch1] < points[ch2]) {
    chosen = ch1;
  } else {
    chosen = ch2;
  }
  //}

  quest = questions[chosen];
  answ = answers[chosen];
  user_answ = "";
  document.getElementById("prefix").innerHTML = "Übersetze:";
  document.getElementById("question").innerHTML = quest;
  document.getElementById("question").style =
    "font-weight: normal; color: black";
  document.getElementById("message").innerHTML = "<br><br>";
  document.getElementById("answer").value = "";
}

/*function setQuestion(n) {
  chosen = n;
  quest = questions[chosen];
  answ = answers[chosen];
  user_answ = "";
  document.getElementById("prefix").innerHTML = "Übersetze:";
  document.getElementById("question").innerHTML = quest;
  document.getElementById("question").style =
    "font-weight: normal; color: black";
  document.getElementById("message").innerHTML = "<br><br>";
  document.getElementById("answer").value = "";
}*/
