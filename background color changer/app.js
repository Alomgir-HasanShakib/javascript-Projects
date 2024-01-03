const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
// in this button peramiter received indivisual button (every single button)
buttons.forEach(function (button) {
  // n this event peramiter received event ( click event)
  button.addEventListener("click", function (event) {
    // in this colorPeeker variable can store the event id. i'm use this event id to change bgColor
    const colorPeeker = event.target.id;
    switch (colorPeeker) {
      case "yellow":
        body.style.backgroundColor = colorPeeker;
        break;
      case "blue":
        body.style.backgroundColor = colorPeeker;
        break;
      case "orange":
        body.style.backgroundColor = colorPeeker;
        break;
      case "grey":
        body.style.backgroundColor = colorPeeker;
        break;
      default:
        break;
    }
  });
});
