$(document).ready(function(){
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close')

  button.on('click', function(){
    modal.addClass('modal_active')
  });

  close.on('click', function(){
    modal.removeClass('modal_active')
  });
});




$(document).ready(function(){
  
  $(window).scroll(function(){
      if ($(this).scrollTop() > 10) {
          $('.scrollup').fadeIn();
      } else {
          $('.scrollup').fadeOut();
      }
      });
        
      $('.scrollup').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });

});