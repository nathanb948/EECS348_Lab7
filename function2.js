function change_color() {
  var border_r = document.getElementById("border_r").value;
  var border_g = document.getElementById("border_g").value;
  var border_b = document.getElementById("border_b").value;
  var border_width = document.getElementById("border_width").value;
  var back_r = document.getElementById("background_r").value;
  var back_g = document.getElementById("background_g").value;
  var back_b = document.getElementById("background_b").value;

  var select = document.getElementById("paragraph");

  select.style.borderColor = `rgb(${border_r}, ${border_g}, ${border_b})`;
  select.style.borderWidth = `${border_width}px`;
  select.style.backgroundColor = `rgb(${back_r}, ${back_g}, ${back_b})`;
}
