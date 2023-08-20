var typedText = document.getElementById("style-header");
var text = "RAWAN";
var i = 0;

function type() {
  if (i < text.length) {
    typedText.innerHTML += text[i];
    i++;
    setTimeout(type, 200);
  }
}
type();
//
