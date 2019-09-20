/** noteName = "C#5" */
function drawNote(noteName) {
  let el = document.createElement("div");
  el.classList.add("full-note");
  let noteElement = document.createElement("div");
  noteElement.classList.add("note");
  const note = clefs[currentClef].find(t => t.name == noteName);
  if (!note) {
    alert("error");
    return;
  }
  el.style.top = note.top;
  //let tone = note.tone;
  //if (noteName.includes("#")) tone = "#";
  //else if (noteName.includes("b")) tone = "b";
  let toneElement = createToneElement(note.tone);
  let lineThroughElement = createLineThroughElement(note.lineThrough);
  el.append(toneElement);
  el.append(noteElement);
  el.append(lineThroughElement);
  currentFullNote = el;
  staff.append(el);
}

let notesTrebelclef = [
  { name: "Fb5", tone: "b", lineThrough: "", top: "10px" },
  { name: "F5", tone: "", lineThrough: "", top: "10px" },
  { name: "F#5", tone: "#", lineThrough: "", top: "10px" },
  { name: "Eb5", tone: "b", lineThrough: "", top: "20px" },
  { name: "E5", tone: "", lineThrough: "", top: "20px" },
  { name: "E#5", tone: "#", lineThrough: "", top: "20px" },
  { name: "Db5", tone: "b", lineThrough: "", top: "30px" },
  { name: "D5", tone: "", lineThrough: "", top: "30px" },
  { name: "D#5", tone: "#", lineThrough: "", top: "30px" },
  { name: "Cb5", tone: "b", lineThrough: "", top: "40px" },
  { name: "C5", tone: "", lineThrough: "", top: "40px" },
  { name: "C#5", tone: "#", lineThrough: "", top: "40px" },
  { name: "Bb5", tone: "b", lineThrough: "", top: "50px" },
  { name: "B5", tone: "", lineThrough: "", top: "50px" },
  { name: "B#5", tone: "#", lineThrough: "", top: "50px" },
  { name: "Ab5", tone: "b", lineThrough: "", top: "60px" },
  { name: "A5", tone: "", lineThrough: "", top: "60px" },
  { name: "A#5", tone: "#", lineThrough: "", top: "60px" },
  { name: "Gb4", tone: "b", lineThrough: "", top: "70px" },
  { name: "G4", tone: "", lineThrough: "", top: "70px" },
  { name: "G#4", tone: "#", lineThrough: "", top: "70px" },
  { name: "Fb4", tone: "b", lineThrough: "", top: "80px" },
  { name: "F4", tone: "", lineThrough: "", top: "80px" },
  { name: "F#4", tone: "#", lineThrough: "", top: "80px" },
  { name: "Eb4", tone: "b", lineThrough: "", top: "90px" },
  { name: "E4", tone: "", lineThrough: "", top: "90px" },
  { name: "E#4", tone: "#", lineThrough: "", top: "90px" },
  { name: "D4b", tone: "b", lineThrough: "", top: "100px" },
  { name: "D4", tone: "", lineThrough: "", top: "100px" },
  { name: "D4#", tone: "#", lineThrough: "", top: "100px" },
  { name: "C4b", tone: "b", lineThrough: "___", top: "110px" },
  { name: "C4", tone: "", lineThrough: "___", top: "110px" },
  { name: "C4#", tone: "#", lineThrough: "___", top: "110px" }
];
let notesBassclef = [
  { name: "Ab4", tone: "b", lineThrough: "", top: "10px" },
  { name: "A4", tone: "", lineThrough: "", top: "10px" },
  { name: "A#4", tone: "#", lineThrough: "", top: "10px" },
  { name: "Gb4", tone: "b", lineThrough: "", top: "20px" },
  { name: "G4", tone: "", lineThrough: "", top: "20px" },
  { name: "G#4", tone: "#", lineThrough: "", top: "20px" },
  { name: "Fb4", tone: "b", lineThrough: "", top: "30px" },
  { name: "F4", tone: "", lineThrough: "", top: "30px" },
  { name: "F#4", tone: "#", lineThrough: "", top: "30px" },
  { name: "Eb4", tone: "b", lineThrough: "", top: "40px" },
  { name: "E4", tone: "", lineThrough: "", top: "40px" },
  { name: "E#4", tone: "#", lineThrough: "", top: "40px" },
  { name: "Db4", tone: "b", lineThrough: "", top: "50px" },
  { name: "D4", tone: "", lineThrough: "", top: "50px" },
  { name: "D#4", tone: "#", lineThrough: "", top: "50px" },
  { name: "Cb4", tone: "b", lineThrough: "", top: "60px" },
  { name: "C4", tone: "", lineThrough: "", top: "60px" },
  { name: "C#4", tone: "#", lineThrough: "", top: "60px" },
  { name: "Bb4", tone: "b", lineThrough: "", top: "70px" },
  { name: "B4", tone: "", lineThrough: "", top: "70px" },
  { name: "B#4", tone: "#", lineThrough: "", top: "70px" },
  { name: "Ab5", tone: "b", lineThrough: "", top: "80px" },
  { name: "A5", tone: "", lineThrough: "", top: "80px" },
  { name: "A#5", tone: "#", lineThrough: "", top: "80px" },
  { name: "Gb5", tone: "b", lineThrough: "", top: "90px" },
  { name: "G5", tone: "", lineThrough: "", top: "90px" },
  { name: "G#5", tone: "#", lineThrough: "", top: "90px" }
];
let clefs = [];
clefs[0] = notesTrebelclef;
clefs[1] = notesBassclef;

let clefImages = [];
const trebleClefImage = new Image();
trebleClefImage.src = "treble-clef.svg";
trebleClefImage.classList.add("treble-clef");
const bassClefImage = new Image();
bassClefImage.src = "bass-clef.svg";
bassClefImage.classList.add("bass-clef");
clefImages[0] = trebleClefImage;
clefImages[1] = bassClefImage;

let staff = document.querySelector(".staff");
let currentFullNote;
let currentNoteName;
let currentClef;
let points = 0;
let result = document.querySelector("#result");
let score = document.querySelector("#score");
// getClef(); to be removed form here once this is set in Settngs and no need to call it onload...
getClef();
function play() {
  if (currentFullNote) {
    deleteNote(currentFullNote);
  }
  displayRandomNote();
}
function getClef() {
  if (currentClef) {
    staff.removeChild(clefImages[currentClef]);
  }
  let clef = document.querySelector("#selectClef").value;
  staff.append(clefImages[clef]);
  currentClef = clef;
  play();
}
function deleteNote(currentFullNote) {
  staff.removeChild(currentFullNote);
}
/** tone = "#"|"b" */
function createToneElement(tone) {
  let toneElement = document.createElement("div");
  toneElement.innerText = tone;
  toneElement.classList.add("tone");
  return toneElement;
}
function createLineThroughElement(lineThrough) {
  let lineThroughElement = document.createElement("div");
  lineThroughElement.innerText = lineThrough;
  lineThroughElement.classList.add("line-through");
  return lineThroughElement;
}
function displayRandomNote() {
  let c = clefs[currentClef];
  let number = Math.floor(Math.random() * c.length);
  currentNoteName = c[number].name;
  //currentNoteName = "C4b";

  drawNote(currentNoteName);
}
function validate(e) {
  //let answer = e.currentTarget.attributes.name.nodeValue;
  //let answer = document.querySelector("#answer");
  let answer = e.target.getAttribute("data-key");
  if (!answer) return;
  if (isEquivalentNote(answer, currentNoteName)) {
    e.target.classList.add("correct-answer");
    result.innerHTML = "Well Done";
    points++;
    play();
  } else {
    e.target.classList.add("wrong-answer");
    result.innerHTML = "Try Again";
  }
  score.innerHTML = points;
  //answer.value = "";
  //answer.focus();
}

function isEquivalentNote(x, y) {
  const x2 = x.replace(/[0-9]/, "");
  const y2 = y.replace(/[0-9]/, "");
  if (x2 == y2) return true;
  return getNoteIndex(x2) == getNoteIndex(y2);
}

function getNoteIndex(x) {
  const lists = [
    ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
    ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"],
    ["A", "Bb", "Cb", "B#", "Db", "D", "Eb", "Fb", "E#", "Gb", "G", "Ab"]
  ];
  for (const list of lists) {
    const index = list.indexOf(x);
    if (index >= 0) return index;
  }
  return null;
}
function removeClass(e) {
  e.target.classList.remove("correct-answer", "wrong-answer");
}
