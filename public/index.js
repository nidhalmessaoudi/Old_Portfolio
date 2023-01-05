$('.navbar-collapse a').click(function(){
    $('.navbar-collapse').collapse('hide');
});

window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('.navbar');
    if(window.pageYOffset>0){
      nav.classList.add("navbar-effect");
    }else{
      nav.classList.remove("navbar-effect");
    }
});

$(window).on("scroll", function() {
    var currentPos = $(window).scrollTop();
  
    $('.navbar-collapse li a').each(function() {
      var sectionLink = $(this);
      // capture the height of the navbar
      var navHeight = $('#navbarNav').outerHeight() + 1;
      var section = $(sectionLink.attr('href'));
  
      // subtract the navbar height from the top of the section
      if(section.position().top - navHeight  <= currentPos && sectionLink.offset().top + section.height()> currentPos) {
        $('.navbar-collapse li').removeClass('active');
        sectionLink.parent().addClass('active');
      } else {
        sectionLink.parent().removeClass('active');
      }
    });        
});

