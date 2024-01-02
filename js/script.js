

// Jquery part examples


// jquery example 1
$(document).ready(function(){
// jQuery first() Method
$("#f_filter,#s_filter,#t_filter").first().css("background-color", "yellow");
// change color and text
$(".btn-c-changer").click(function(){
    $(".color1,.color2,.color3").css({"background-color": "pink", "font-size": "200%"});
  });
// jq empty
$(".btn_text_empty").click(function(){
    $("#text_empty").empty();
  });
//jq remove
$(".btn_remove").click(function(){
    $("#remove_item").remove();
  }); 
// Query addClass() Method  
$("button").click(function(){
    $("#heading1,#heading2").addClass("red");
    $(".class_text_ad").toggleClass("important");
  });   
//append items and append lists
$("#append_text").click(function(){
    $(".ca_para").prepend(" <b>Appended text</b>.");
  });

  $("#append_list").click(function(){
    $(".ca_list").append("<li>Appended item</li>");
  }); 
// jquery method chaining
$(".btn_chain").click(function(){
    $("#chain").css("color", "red").slideUp(2000).slideDown(2000);
  });
// calling back 
$(".btn_callback").click(function(){
    $(".c_hidden_para").toggle(3000);
});    
//animation box and text
$(".btn-animation_text").click(function(){
    var box_text = $(".box_animation_text");  
    box_text.animate({left: '100px'}, "slow");
    box_text.animate({fontSize: '3em'}, "slow");
  }); 
//animation of box toggle
$(".btn-animation_toggle").click(function(){
    $(".box_animation_toggle").animate({
        height:'toggle',
    });
});
//animation of box 
$(".btn-animation").click(function(){
    $(".box_animation").animate({left: '250px'});
});
// fade in /fade out /fade toggle start
// fade in
$('#fade_in').on('click', function(){
   $('#fh_h3').fadeIn(); 
});
// fade out
$('#fade_out').on('click', function(){
    $('#fh_h3').fadeOut(); 
 });  
//  fade toggle
$('#fade_togg').on('click', function(){
    $('#fh_h3').fadeToggle(3000); 
 }); 
 
// show/hide/toggle
// hide
$('#hide').on('click',function(){
    $('#sh_h3').hide();
});
// show
$('#show').on('click',function(){
   $('sh_h3').show(); 
});
// toggle
$('#togg').on('click',function(){
    $('#sh_h3').toggle();
});
// show alert
$('.btn').on('click', function(){
    alert("Welcome");
});
// slide
$('#quest').on('click', function(){
    $('#answ').slideToggle();
})
});

// jquery ui 
$(document).ready(function(){
    // draggable
    $( "#draggable" ).draggable();
    // accordian
    $( "#accordion" ).accordion();
    // accordian colaps
    $( "#accordion_collaps" ).accordion({
        collapsible: true
    });
    // autocomplete
    var data= ["HTML","CSS","BOOTSTRAP","JAVASCRIPT","JQUERY"];
    $( "#c_name" ).autocomplete({
        source: data
      });
      // sortable
      $( function() {
        $( "#sortable" ).sortable();
      } );
      // date picker
      $( function() {
        $( "#datepicker" ).datepicker();
      } );
      // tooltip form
      $( function() {
        var tooltips = $( "[title]" ).tooltip({
          position: {
            my: "left top",
            at: "right+5 top-5",
            collision: "none"
          }
        });
        $( "<button>" )
          .text( "Show help" )
          .button()
          .on( "click", function() {
            tooltips.tooltip( "open" );
          })
          .insertAfter( "form" );
      } );
      // tooltip for fake medai player
      $( function() {
        function notify( input ) {
          var msg = "Selected " +
              String.prototype.trim.call(
                input.data( "tooltip-title" ) || input.text() );
          $( "<div>" )
            .appendTo( document.body )
            .text( msg )
            .addClass( "notification ui-state-default ui-corner-bottom" )
            .position({
              my: "center top",
              at: "center top",
              of: window
            })
            .show({
              effect: "blind"
            })
            .delay( 1000 )
            .hide({
              effect: "blind",
              duration: "slow"
            }, function() {
              $( this ).remove();
            });
        }
     
        $( "button" ).each(function() {
          var button = $( this ).button({
            icons: {
              primary: $( this ).data( "icon" )
            },
            text: !!$( this ).attr( "title" )
          });
          button.not( ".menu" ).on( "click", function() {
            notify( button );
          });
        });
        $( ".set" ).controlgroup({
          items: {
            "button" : "button"
          }
        });
     
        $( "button.menu" )
          .on( "click", function() {
            $( document ).tooltip( "close", { currentTarget: this });
            var menu = $( this ).next().show().position({
              my: "left top",
              at: "left bottom",
              of: this
            });
            $( document ).one( "click", function() {
              menu.hide();
            });
            return false;
          })
          .next()
            .hide()
            .menu({
              selected: function( event, ui ) {
                notify( ui.item );
              }
            });
     
        $( document ).tooltip({
          position: {
            my: "center top",
            at: "center bottom+5",
          },
          show: {
            duration: "fast"
          },
          hide: {
            effect: "hide"
          }
        });
      } );
      // color animation
      $( function() {
        var state = true;
        $( "#button" ).on( "click", function() {
          if ( state ) {
            $( "#effect" ).animate({
              backgroundColor: "#380000",
              color: "#fff",
              width: 500
            }, 1000 );
          } else {
            $( "#effect" ).animate({
              backgroundColor: "#93C47D",
              color: "#000",
              width: 240
            }, 1000 );
          }
          state = !state;
        });
      } );
      // default tabs
      $( function() {
        $( "#tabs" ).tabs();
      });
      // open on mouseover tabs
      $( function() {
        $( "#tabs_mouse" ).tabs({
          event: "mouseover"
        });
      } );
      // select menu
        $( function() {
          $( "#speed" ).selectmenu();

          $( "#files" ).selectmenu();

          $( "#number" )
            .selectmenu()
            .selectmenu( "menuWidget" )
              .addClass( "overflow" );

          $( "#salutation" ).selectmenu();
  } );
        
});

// juery and js plug-in
// js plug-in
// wow js plug-in
wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();
$(document).ready(function(){
  // counter-up
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
})
// aos
AOS.init({
  offset: 120,
  delay: 0,
  duration:500,
  easing: 'liner'
});