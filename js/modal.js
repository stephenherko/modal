/* Modal */

$(document).ready(function(){

  $('.modal-cover').hide();

  $('.cta').click(function(){
    $('.modal-cover').fadeIn(500);
  });

  $('.modal-close').click(function(){
    $('.modal-cover').fadeOut(500);
  });

});