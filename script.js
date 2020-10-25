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
  "?, amici, amico, amicum, amice!, amico<br>amici, amicorum, amicis, amicos, amici!, amicis",
  "amicus, ?, amico, amicum, amice!, amico<br>amici, amicorum, amicis, amicos, amici!, amicis",
  "amicus, amici, ?, amicum, amice!, amico<br>amici, amicorum, amicis, amicos, amici!, amicis",
  "amicus, amici, amico, ?, amice!, amico<br>amici, amicorum, amicis, amicos, amici!, amicis",
  "amicus, amici, amico, amicum, ?, amico<br>amici, amicorum, amicis, amicos, amici!, amicis",
  "amicus, amici, amico, amicum, amice!, ?<br>amici, amicorum, amicis, amicos, amici!, amicis",
  "amicus, amici, amico, amicum, amice!, amico<br>?, amicorum, amicis, amicos, amici!, amicis",
  "amicus, amici, amico, amicum, amice!, amico<br>amici, ?, amicis, amicos, amici!, amicis",
  "amicus, amici, amico, amicum, amice!, amico<br>amici, amicorum, ?, amicos, amici!, amicis",
  "amicus, amici, amico, amicum, amice!, amico<br>amici, amicorum, amicis, ?, amici!, amicis",
  "amicus, amici, amico, amicum, amice!, amico<br>amici, amicorum, amicis, amicos, ?, amicis",
  "amicus, amici, amico, amicum, amice!, amico<br>amici, amicorum, amicis, amicos, amici!, ?",
  "?, magistri, magistro, magistrum, magister!, magistro<br>magistri, magistrorum, magistris, magistros, magistri!, magistris",
  "magister, ?, magistro, magistrum, magister!, magistro<br>magistri, magistrorum, magistris, magistros, magistri!, magistris",
  "magister, magistri, ?, magistrum, magister!, magistro<br>magistri, magistrorum, magistris, magistros, magistri!, magistris",
  "magister, magistri, magistro, ?, magister!, magistro<br>magistri, magistrorum, magistris, magistros, magistri!, magistris",
  "magister, magistri, magistro, magistrum, ?, magistro<br>magistri, magistrorum, magistris, magistros, magistri!, magistris",
  "magister, magistri, magistro, magistrum, magister!, ?<br>magistri, magistrorum, magistris, magistros, magistri!, magistris",
  "magister, magistri, magistro, magistrum, magister!, magistro<br>?, magistrorum, magistris, magistros, magistri!, magistris",
  "magister, magistri, magistro, magistrum, magister!, magistro<br>magistri, ?, magistris, magistros, magistri!, magistris",
  "magister, magistri, magistro, magistrum, magister!, magistro<br>magistri, magistrorum, ?, magistros, magistri!, magistris",
  "magister, magistri, magistro, magistrum, magister!, magistro<br>magistri, magistrorum, magistris, ?, magistri!, magistris",
  "magister, magistri, magistro, magistrum, magister!, magistro<br>magistri, magistrorum, magistris, magistros, ?, magistris",
  "magister, magistri, magistro, magistrum, magister!, magistro<br>magistri, magistrorum, magistris, magistros, magistri!, ?",
  "?, pueri, puero, puerum, puer!, puero<br>pueri, puerorum, pueris, pueros, pueri!, pueris",
  "puer, ?, puero, puerum, puer!, puero<br>pueri, puerorum, pueris, pueros, pueri!, pueris",
  "puer, pueri, ?, puerum, puer!, puero<br>pueri, puerorum, pueris, pueros, pueri!, pueris",
  "puer, pueri, puero, ?, puer!, puero<br>pueri, puerorum, pueris, pueros, pueri!, pueris",
  "puer, pueri, puero, puerum, ?, puero<br>pueri, puerorum, pueris, pueros, pueri!, pueris",
  "puer, pueri, puero, puerum, puer!, ?<br>pueri, puerorum, pueris, pueros, pueri!, pueris",
  "puer, pueri, puero, puerum, puer!, puero<br>?, puerorum, pueris, pueros, pueri!, pueris",
  "puer, pueri, puero, puerum, puer!, puero<br>pueri, ?, pueris, pueros, pueri!, pueris",
  "puer, pueri, puero, puerum, puer!, puero<br>pueri, puerorum, ?, pueros, pueri!, pueris",
  "puer, pueri, puero, puerum, puer!, puero<br>pueri, puerorum, pueris, ?, pueri!, pueris",
  "puer, pueri, puero, puerum, puer!, puero<br>pueri, puerorum, pueris, pueros, ?, pueris",
  "puer, pueri, puero, puerum, puer!, puero<br>pueri, puerorum, pueris, pueros, pueri!, ?",
  "?, templi, templo, templum, templum!, templo<br>templa, templorum, templis, templa, templa!, templis",
  "templum, ?, templo, templum, templum!, templo<br>templa, templorum, templis, templa, templa!, templis",
  "templum, templi, ?, templum, templum!, templo<br>templa, templorum, templis, templa, templa!, templis",
  "templum, templi, templo, ?, templum!, templo<br>templa, templorum, templis, templa, templa!, templis",
  "templum, templi, templo, templum, ?, templo<br>templa, templorum, templis, templa, templa!, templis",
  "templum, templi, templo, templum, templum!, ?<br>templa, templorum, templis, templa, templa!, templis",
  "templum, templi, templo, templum, templum!, templo<br>?, templorum, templis, templa, templa!, templis",
  "templum, templi, templo, templum, templum!, templo<br>templa, ?, templis, templa, templa!, templis",
  "templum, templi, templo, templum, templum!, templo<br>templa, templorum, ?, templa, templa!, templis",
  "templum, templi, templo, templum, templum!, templo<br>templa, templorum, templis, ?, templa!, templis",
  "templum, templi, templo, templum, templum!, templo<br>templa, templorum, templis, templa, ?, templis",
  "templum, templi, templo, templum, templum!, templo<br>templa, templorum, templis, templa, templa!, ?",
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
  "amicus",
  "amici",
  "amico",
  "amicum",
  "amice!",
  "amico",
  "amici",
  "amicorum",
  "amicis",
  "amicos",
  "amici!",
  "amicis",
  "magister",
  "magistri",
  "magistro",
  "magistrum",
  "magister!",
  "magistro",
  "magistri",
  "magistrorum",
  "magistris",
  "magistros",
  "magistri!",
  "magistris",
  "puer",
  "pueri",
  "puero",
  "puerum",
  "puer!",
  "puero",
  "pueri",
  "puerorum",
  "pueris",
  "pueros",
  "pueri!",
  "pueris",
  "templum",
  "templi",
  "templo",
  "templum",
  "templum!",
  "templo",
  "templa",
  "templorum",
  "templis",
  "templa",
  "templa!",
  "templis",
];

var altAnswers1 = [
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
  "sondern",
  "Schüler",
  "schlecht",
  "fröhlich",
  "oft",
  "lacht",
  "warum?",
  "jetzt",
  "nicht",
  "Aufgabe",
  "groß",
  "daher",
  "freut sich",
  "lange",
  "arbeitet",
  "gern",
  "fragt",
  "antwortet",
  "damals",
  "ruft",
  "lobt",
  "was?",
  "unterrichtet",
  "wo?",
  "schon",
  "erwartet",
  "betritt",
  "sei gegrüßt",
  "Lehrer",
  "liebt",
  "nicht nur - sondern auch",
  "sogar",
  "Zunge",
  "lateinisch",
  "Buch",
  "griechisch",
  "wie",
  "hübsch",
  "Wort",
  "bei sich",
  "denkt",
  "Bub",
  "Mädchen",
  "weil",
  "wer?",
  "hat",
  "schaut an",
  "Auge",
  "dein",
  "ermahnt",
  "erzürnt",
  "Rom",
  "durch",
  "Straße",
  "spazieren",
  "viele",
  "viel",
  "Gebäude",
  "sehen",
  "und",
  "hell",
  "zeigen",
  "Schauspiel",
  "dort",
  "Statue",
  "Mann",
  "Fragepartikel",
  "sicherlich",
  "Forum",
  "römisch",
  "Tempel",
  "so",
  "Gott",
  "Göttin",
  "vor",
  "hinter",
  "nur",
  "an",
  "über",
  "mit",
  "ohne",
  "Frau",
  "Freude",
  "erzählen",
  "die Römer",
  "Vorrat",
  "von",
  "Erde",
  "fremd",
  "kämpfen",
  "töten",
  "gefallen",
  "neu",
  "ein anderer",
  "der eine - der andere",
  "Schwert",
  "schließlich",
  "übertreffen",
  "falls",
  "gut",
  "Leben",
  "schenken",
  "für",
  "ihr",
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
  "amicus",
  "amici",
  "amico",
  "amicum",
  "amice!",
  "amico",
  "amici",
  "amicorum",
  "amicis",
  "amicos",
  "amici!",
  "amicis",
  "magister",
  "magistri",
  "magistro",
  "magistrum",
  "magister!",
  "magistro",
  "magistri",
  "magistrorum",
  "magistris",
  "magistros",
  "magistri!",
  "magistris",
  "puer",
  "pueri",
  "puero",
  "puerum",
  "puer!",
  "puero",
  "pueri",
  "puerorum",
  "pueris",
  "pueros",
  "pueri!",
  "pueris",
  "templum",
  "templi",
  "templo",
  "templum",
  "templum!",
  "templo",
  "templa",
  "templorum",
  "templis",
  "templa",
  "templa!",
  "templis",
];

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
  document.getElementById("problems").innerHTML = "Problemwörter";
  for (var i = 0; i < points.length; i++) {
    if (i >= 119) {
      continue;
    }
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
        if (i >= 119) {
          continue;
        }
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
        if (i >= 119) {
          continue;
        }
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
  var ch1 = Math.floor(Math.random() * questions.length);
  var ch2 = Math.floor(Math.random() * questions.length);
  if (points[ch1] < points[ch2]) {
    chosen = ch1;
  } else {
    chosen = ch2;
  }
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
  document.getElementById("message").innerHTML = "<br><br>";
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
  document.getElementById("message").innerHTML = "<br><br>";
  document.getElementById("answer").value = "";
}
