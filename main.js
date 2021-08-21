jQuery(function () {
  $('.main-nav-item').children("li").hover
      (function() {
          $(this).children("ul").stop().slideToggle("");
    });
});

jQuery( function( $ ) {   

  $( ".p-hamburger" ).on( "click", function() {         
  $( '.p-hamburger,.main-nav' ).toggleClass( "open" ); 
  $( "li" ).stop().slideDown( "" );   
  $( this ).on( "click", function() { 
    $( "ul" ).stop().slideToggle( "" );

  } );
  } ); 
  } );

  
  $(function(){
    $(".btn-a").on("click", function() {
        $(this).toggleClass('btn-b');
        $( "li" ).stop().slideDown( "" );
        $( this ).on( "click", function() { 
          $( '.submenu li').stop().slideToggle( "" );
        });
    });
});



  
