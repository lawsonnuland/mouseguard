function ToggleMouseVisibility()
{
  var button_state = document.getElementById("myBtn");
  var mouse_image = document.getElementById("mouseImg");
  if(button_state.value=="Banish Mouse")
  {
        button_state.value="Summon Mouse";
        mouse_image.style.visibility = "hidden";
  }
  else if(button_state.value=="Summon Mouse")
  {
        button_state.value="Banish Mouse";
        mouse_image.style.visibility = "visible";
  }
}