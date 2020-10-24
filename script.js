var questions = [
  "schola",
  "hic",
  "sedet",
  "amica",
  "meus/a/um",
  "est",
  "discipula",
  "bonus/a/um",
  "semper",
  "sunt",
  "et",
  "amicus",
  "sed",
  "discipulus",
  "malus/a/um",
  "laetus/a/um",
  "saepe",
  "ridet",
  "cur?",
  "nunc",
  "non",
  "pensum",
  "magnus/a/um",
  "ítaque",
  "gaudet",
  "diu",
  "labórat",
  "libenter",
  "intérrogat",
  "respondet",
  "tum",
  "clamat",
  "laudat",
  "quid?",
  "docet",
  "ubi?",
  "iam",
  "exspectat",
  "intrat",
  "salve!",
  "magister",
  "amat",
  "non solum - sed etiam",
  "etiam",
  "lingua",
  "Latinus/a/um",
  "liber",
  "Graecus/a/um",
  "quam",
  "pulcher/chra/chrum",
  "verbum",
  "secum",
  "cogitat",
  "puer",
  "puella",
  "quod",
  "quis?",
  "habet",
  "spectat",
  "oculus",
  "tuus/a/um",
  "monet",
  "iratus/a/um",
  "Roma",
  "per",
  "via",
  "ambulo, -as",
  "multi/ae/a",
  "multum",
  "aedificium",
  "video, -es",
  "-que",
  "clarus/a/um",
  "monstro, -as",
  "spectaculum",
  "ibi",
  "statua",
  "vir",
  "-ne",
  "certe",
  "forum",
  "Romanus/a/um",
  "templum",
  "tam",
  "deus",
  "dea",
  "ante",
  "post",
  "solum",
  "ad",
  "de",
  "cum",
  "sine",
  "femina",
  "gaudium",
  "narro, -as",
  "Romani",
  "copia",
  "e/ex",
  "terra",
  "alien/a/um",
  "pugno, -as",
  "neco, -as",
  "placeo, -es",
  "novus/a/um",
  "alius/a/ud",
  "alius - alius",
  "gladius",
  "postremo",
  "supero, -as",
  "si",
  "bene",
  "vita",
  "dono, -as",
  "pro",
  "suus/a/um",
  "a/ab",
  "prae",
  "neque",
  "-?, -s, -t, -mus, -tis, -nt",
  "-o, -?, -t, -mus, -tis, -nt",
  "-o, -s, -?, -mus, -tis, -nt",
  "-o, -s, -t, -?, -tis, -nt",
  "-o, -s, -t, -mus, -?, -nt",
  "-o, -s, -t, -mus, -tis, -?",
  "?, amicae, amicae, amicam, amica!, amicā<br>amicae, amicarum, amicis, amicas, amicae!, amicis",
  "amica, ?, amicae, amicam, amica!, amicā<br>amicae, amicarum, amicis, amicas, amicae!, amicis",
  "amica, amicae, ?, amicam, amica!, amicā<br>amicae, amicarum, amicis, amicas, amicae!, amicis",
  "amica, amicae, amicae, ?, amica!, amicā<br>amicae, amicarum, amicis, amicas, amicae!, amicis",
  "amica, amicae, amicae, amicam, ?, amicā<br>amicae, amicarum, amicis, amicas, amicae!, amicis",
  "amica, amicae, amicae, amicam, amica!, ?<br>amicae, amicarum, amicis, amicas, amicae!, amicis",
  "amica, amicae, amicae, amicam, amica!, amicā<br>?, amicarum, amicis, amicas, amicae!, amicis",
  "amica, amicae, amicae, amicam, amica!, amicā<br>amicae, ?, amicis, amicas, amicae!, amicis",
  "amica, amicae, amicae, amicam, amica!, amicā<br>amicae, amicarum, ?, amicas, amicae!, amicis",
  "amica, amicae, amicae, amicam, amica!, amicā<br>amicae, amicarum, amicis, ?, amicae!, amicis",
  "amica, amicae, amicae, amicam, amica!, amicā<br>amicae, amicarum, amicis, amicas, ?, amicis",
  "amica, amicae, amicae, amicam, amica!, amicā<br>amicae, amicarum, amicis, amicas, amicae!, ?",
];
var answers = [
  "Schule",
  "hier",
  "sitzt",
  "Freundin",
  "mein",
  "ist",
  "Schülerin",
  "gut",
  "immer",
  "sind",
  "und",
  "Freund",
  "aber",
  "Schüler",
  "schlecht",
  "froh",
  "oft",
  "lacht",
  "warum?",
  "nun",
  "nicht",
  "Aufgabe",
  "groß",
  "deshalb",
  "freut sich",
  "lange",
  "arbeitet",
  "gern",
  "fragt",
  "antwortet",
  "dann",
  "schreit",
  "lobt",
  "was?",
  "lehrt",
  "wo?",
  "schon",
  "erwartet",
  "tritt ein",
  "sei gegrüßt!",
  "Lehrer",
  "liebt",
  "nicht nur - sondern auch",
  "auch",
  "Sprache",
  "lateinisch",
  "Buch",
  "griechisch",
  "wie",
  "schön",
  "Wort",
  "mit sich",
  "denkt",
  "Bub",
  "Mädchen",
  "weil",
  "wer?",
  "hat",
  "betrachtet",
  "Auge",
  "dein",
  "mahnt",
  "zornig",
  "Rom",
  "durch",
  "Weg",
  "gehen",
  "viele",
  "viel",
  "Gebäude",
  "sehen",
  "und",
  "berühmt",
  "zeigen",
  "Schauspiel",
  "dort",
  "Statue",
  "Mann",
  "Fragepartikel",
  "sicherlich",
  "Marktplatz",
  "römisch",
  "Tempel",
  "so",
  "Gott",
  "Göttin",
  "vor",
  "nach",
  "nur",
  "zu",
  "von",
  "mit",
  "ohne",
  "Frau",
  "Freude",
  "erzählen",
  "die Römer",
  "Menge",
  "aus",
  "Land",
  "fremd",
  "kämpfen",
  "töten",
  "gefallen",
  "neu",
  "ein anderer",
  "der eine - der andere",
  "Schwert",
  "schließlich",
  "besiegen",
  "wenn",
  "gut",
  "Leben",
  "schenken",
  "für",
  "sein",
  "von",
  "vor",
  "und nicht",
  "o",
  "s",
  "t",
  "mus",
  "tis",
  "nt",
  "amica",
  "amicae",
  "amicae",
  "amicam",
  "amica!",
  "amica",
  "amicae",
  "amicarum",
  "amicis",
  "amicas",
  "amicae!",
  "amicis",
];

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
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

var points = [];

for (var i = 0; i < questions.length; i++) {
  points.push(0);
}

var points_string = getCookie("points");

if (points_string != "") {
  points = points_string.split(",");
}

var chosen = Math.floor(Math.random() * questions.length);
var quest = questions[chosen];
var answ = answers[chosen];
var user_answ = "";

var correct = 0;
var incorrect = 0;

if (chosen >= 119) {
  document.getElementById("prefix").innerHTML = "Vervollständige:";
} else {
  document.getElementById("prefix").innerHTML = "Übersetze:";
}

document.getElementById("question").innerHTML = quest;

function checkAnswer() {
  user_answ = document.getElementById("answer").value;
  if (user_answ.toLowerCase() == answ.toLowerCase()) {
    if (document.getElementById("message").innerHTML == "") {
      correct++;
      points[chosen] += 1;
      setCookie("points", points.toString(), 365);
      document.getElementById("problems").innerHTML = "Problemwörter";
      for (var i = 0; i < points.length; i++) {
        if (points[i] < 0) {
          document.getElementById("problems").innerHTML +=
            "<br>" + questions[i];
        }
      }
    }
    document.getElementById("message").innerHTML = "Richtig!";
    document.getElementById("question").style =
      "font-weight: normal; color: green";
  } else {
    if (document.getElementById("message").innerHTML == "") {
      incorrect++;
      points[chosen] -= 1;
      setCookie("points", points.toString(), 365);
      document.getElementById("problems").innerHTML = "Problemwörter";
      for (var i = 0; i < points.length; i++) {
        if (points[i] < 0) {
          document.getElementById("problems").innerHTML +=
            "<br>" + questions[i];
        }
      }
    }
    document.getElementById("message").innerHTML = "Richtige Antwort: " + answ;
    document.getElementById("question").style =
      "font-weight: normal; color: #bd1c1c";
  }
  document.getElementById("stats").innerHTML =
    correct.toString(10) +
    " von " +
    (correct + incorrect).toString(10) +
    " (" +
    Math.round((correct / (correct + incorrect)) * 100).toString(10) +
    "%) richtig";
}

document.getElementById("answer").addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    if (document.getElementById("message").innerHTML == "") {
      document.getElementById("check").click();
    } else {
      document.getElementById("next").click();
    }
  }
});

function nextQuestion() {
  chosen = Math.floor(Math.random() * questions.length);
  quest = questions[chosen];
  answ = answers[chosen];
  user_answ = "";
  if (chosen >= 119) {
    document.getElementById("prefix").innerHTML = "Vervollständige:";
  } else {
    document.getElementById("prefix").innerHTML = "Übersetze:";
  }
  document.getElementById("question").innerHTML = quest;
  document.getElementById("question").style =
    "font-weight: normal; color: black";
  document.getElementById("message").innerHTML = "";
  document.getElementById("answer").value = "";
}
function setQuestion(n) {
  chosen = n;
  quest = questions[chosen];
  answ = answers[chosen];
  user_answ = "";
  if (chosen >= 119) {
    document.getElementById("prefix").innerHTML = "Vervollständige:";
  } else {
    document.getElementById("prefix").innerHTML = "Übersetze:";
  }
  document.getElementById("question").innerHTML = quest;
  document.getElementById("question").style =
    "font-weight: normal; color: black";
  document.getElementById("message").innerHTML = "";
  document.getElementById("answer").value = "";
}
