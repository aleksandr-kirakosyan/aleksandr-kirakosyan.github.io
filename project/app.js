$(document).ready(function () {
    $("body").removeClass("hidden").hide().fadeIn(400);
    
    $(window).scroll( function(){
    
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},500);
                  
          }
          
      }); 
  
    });

    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".container *").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
      const $img = $(".container img");
    $("#search").on("keyup",function() {
      const val = this.value.trim().toLowerCase();  
      if (val === "") return; 
      $img.filter(function() { return this.alt.toLowerCase().includes(val)  }).show()
    });

});