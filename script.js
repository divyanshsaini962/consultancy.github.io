$('.portfolio-item').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });
      $('.portfolio-manu ul li').click(function(){
      $('.portfolio-manu ul li').removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      $('.portfolio-item').isotope({
        filter:selector
      })
      return false;
        })

        
  AOS.init();
