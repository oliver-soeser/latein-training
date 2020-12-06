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

$.getJSON("questions.json", function (data) {
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

function nextQuestion() {
  var ch1 =
    Math.floor(Math.random() * (118 - questions.length)) + questions.length;
  var ch2 =
    Math.floor(Math.random() * (118 - questions.length)) + questions.length;
  if (points[ch1] < points[ch2]) {
    chosen = ch1;
  } else {
    chosen = ch2;
  }
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
function setQuestion(n) {
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
}
