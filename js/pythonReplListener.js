let sentence = "";
const expectedSentence = "python";

document.addEventListener("keypress", function onEvent(event) {
  let wordMatch = false;

  if (inputFieldIsSelected()) {
    sentence = "";
    return;
  }

  if (event.key === expectedSentence.charAt(sentence.length)) {
    sentence += event.key;
    wordMatch = sentence === expectedSentence ? true : false;
  } else if (event.key === expectedSentence.charAt(0)) {
    sentence = event.key;
  } else {
    sentence = "";
  }

  if (wordMatch) {
    togglePythonWindow();
  }
});

function inputFieldIsSelected() {
  let fieldIsSelected = false;

  let inputFields = document.getElementsByTagName("input");
  let textAreas = document.getElementsByTagName("textarea");
  let pyRepls = document.getElementsByClassName("cm-content");

  let fields = [...inputFields, ...textAreas, ...pyRepls];

  for (let field of fields) {
    if (document.activeElement === field) {
      fieldIsSelected = true;
      break;
    }
  }

  return fieldIsSelected;
}

function togglePythonWindow() {
  document.getElementById("python-repl").classList.toggle("hide-element");
  document.getElementById("dim-background").classList.toggle("hide-element");
  document.getElementsByTagName("body")[0].classList.toggle("overflow-hidden");
}

function maximisePythonWindow() {
  document
    .getElementById("python-repl-window")
    .classList.toggle("my-python-repl-full-screen");
  document
    .getElementById("python-repl")
    .classList.toggle("python-repl-container-full-screen");
}

function addCloseClickListener() {
  document.getElementById("repl-close-button").onclick = () => {
    togglePythonWindow();
  };
}

function addMaximiseClickListener() {
  document.getElementById("repl-maximise-button").onclick = () => {
    maximisePythonWindow();
  };
}

addCloseClickListener();
addMaximiseClickListener();
