$( document ).ready(function() {
    console.log( "ready!" );
});

ScrollReveal().reveal('.reveal', { delay: 500 }) ;

ScrollReveal({ reset: true });

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

  $(document).ready(function(){
    $('.modal').modal();
  });

  $(document).ready(function() {
    M.updateTextFields();
  });

  jQuery(document).ready(function(){
   $('h1').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgb(175, 0, 239), '+rYP/8+'px '+rXP/60+'px rgb(255, 198, 240), '+rXP/70+'px '+rYP/12+'px rgb(137, 239, 255)');
   });
});