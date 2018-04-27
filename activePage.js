/*WHAT THIS PAGE IS FOR:

This page is used to define which page is active.

If 0, then the home page.
If 1, then the options page.
If 2, then the URL page within the options page.

*/


$( document ).ready(function() {

  var whichPage = 0;



  $("#head-btn-go").mouseup(function() {
      whichPage = 0;

      $(".ITEM_home").css({
         visibility: 'visible'
      });

      $(".ITEM_options").css({
         visibility: 'hidden'
      });

      $("#side-button-area").css({
         visibility: 'hidden'
      });

      $(".ITEM_dayEdit").css({
         visibility: 'hidden'
      });


      $("#head-btn-go").css({
         backgroundImage: 'url("images/TAB_header_go_on.png")'
      });
      $("#head-btn-options").css({
         backgroundImage: 'url("images/TAB_header_options_off.png")'
      });

  })




  $(".goToOptions").mouseup(function() {
      whichPage = 1;

        $(".ITEM_home").css({
           visibility: 'hidden'
        });

        $(".ITEM_options").css({
           visibility: 'visible'
        });

        $("#side-button-area").css({
           visibility: 'visible'
        });

        $(".ITEM_dayEdit").css({
           visibility: 'hidden'
        });




        $("#head-btn-go").css({
           backgroundImage: 'url("images/TAB_header_go_off.png")'
        });
        $("#head-btn-options").css({
           backgroundImage: 'url("images/TAB_header_options_on.png")'
        });

        $("#btn-BACK").addClass("deactivated");
        $( "#btn-BACK" ).animate({
           backgroundColor: '#980631',
            top: "5"
        }, 50);
  })






  var days = [];
  days.push('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY');


  $.each(days, function(i, day) {
    $("#btn-" + day).on('mouseup', function() {
      $("#day").text(day.toLowerCase());

      whichPage = 2;

      $(".ITEM_home").css({
         visibility: 'hidden'
      });
      $(".ITEM_options").css({
         visibility: 'hidden'
      });

      $("#side-button-area").css({
         visibility: 'visible'
      });

      $(".ITEM_dayEdit").css({
         visibility: 'visible'
      });


      $("#btn-BACK").removeClass("deactivated");
      $( "#btn-BACK" ).animate({
            backgroundColor: '#FE0148',
             top: "0"
        }, 50);
    });
  });



//Don't remember what this was for, but I think I was saving in case a new idea
//didn't work out


/*
  $.each(days, function(i, day) {
    $("#btn-" + day).on('mouseup', function() {
      $("#day").text(day + ', and ' + i);
      getDay = day;

      whichPage = 2;

      $(".ITEM_home").css({
         visibility: 'hidden'
      });
      $(".ITEM_options").css({
         visibility: 'hidden'
      });
      $(".ITEM_dayEdit").css({
         visibility: 'visible'
      });
    });
  });

  */






  if (whichPage = 0){

    $(".ITEM_home").css({
       visibility: 'visible'
    });

    $(".ITEM_options").css({
       visibility: 'hidden'
    });

    $("#side-button-area").css({
       visibility: 'hidden'
    });

    $(".ITEM_dayEdit").css({
       visibility: 'hidden'
    });

    $("#head-btn-go").css({
       backgroundImage: 'url("images/TAB_header_go_on.png")'
    });
    $("#head-btn-options").css({
       backgroundImage: 'url("images/TAB_header_options_off.png")'
    });

  }

  else if (whichPage = 1){
    $(".ITEM_home").css({
       visibility: 'hidden'
    });

    $(".ITEM_options").css({
       visibility: 'visible'
    });

    $("#side-button-area").css({
       visibility: 'visible'
    });

    $(".ITEM_dayEdit").css({
       visibility: 'hidden'
    });

    $("#head-btn-go").css({
       backgroundImage: 'url("images/TAB_header_go_off.png")'
    });
    $("#head-btn-options").css({
       backgroundImage: 'url("images/TAB_header_options_on.png")'
    });


    $("#btn-BACK").addClass("deactivated");
    $( "#btn-BACK" ).animate({
       backgroundColor: '#980631',
        top: "5"
    }, 50);
  }

  else if (whichPage = 2){
      $(".ITEM_home").css({
         visibility: 'hidden'
      });

      $(".ITEM_options").css({
         visibility: 'hidden'
      });

      $("#side-button-area").css({
         visibility: 'visible'
      });

      $(".ITEM_dayEdit").css({
         visibility: 'visible'
      });

      $("#head-btn-go").css({
         backgroundImage: 'url("images/TAB_header_go_off.png")'
      });
      $("#head-btn-options").css({
         backgroundImage: 'url("images/TAB_header_options_on.png")'
      });

      $("#btn-BACK").removeClass("deactivated");
      $( "#btn-BACK" ).animate({
            backgroundColor: '#FE0148',
             top: "0"
        }, 50);
    }
  });
