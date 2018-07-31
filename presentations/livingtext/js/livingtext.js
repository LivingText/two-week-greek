document.addEventListener("click", function(e){ if(e.target.matches("button[data-audio]")){
  new Audio(e.target.dataset.audio).play(); }});
