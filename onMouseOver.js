/*WHAT THIS PAGE IS FOR:

Pretty animations. :D

*/


$("#logo").mouseover(function() {
    $( this ).animate({
        width: "30%",
        top: "-8",
        left: "-10"
    }, 100);
})

$("#logo").mouseleave(function() {
  $( this ).animate({
      width: "25%",
      top: "0",
      left: "0"
  }, 100);
})







$("#btn-BACK").mouseover(function() {
  if (!$(this).hasClass("deactivated")) {
    $( this ).animate({
       backgroundColor: '#980631',
        top: "5"
    }, 50);
  }
})

$("#btn-BACK").mouseleave(function() {
    if (!$(this).hasClass("deactivated")) {
      $( this ).animate({
         backgroundColor: '#FE0148',
          top: "0"
      }, 50);
    }
})

if ($("#btn-BACK").hasClass("deactivated")) {
  $( "#btn-BACK" ).css({
     backgroundColor: '#980631',
      top: "5"
  });
}




$("#btn-SAVE").mouseover(function() {
    $( this ).animate({
       backgroundColor: '#BA5C00',
        top: "5"
    }, 50);
})

$("#btn-SAVE").mouseleave(function() {
    $( this ).animate({
       backgroundColor: '#FF6D00',
        top: "0"
    }, 50);
})





$("#btn-LOAD").mouseover(function() {
    $( this ).animate({
       backgroundColor: '#A68800',
        top: "5"
    }, 50);
})

$("#btn-LOAD").mouseleave(function() {
    $( this ).animate({
       backgroundColor: '#FFD100',
        top: "0"
    }, 50);
})





$("#btn-7DAYS").mouseover(function() {
    $( this ).animate({
       backgroundColor: '#1C0E4A',
        top: "5"
    }, 50);
})

$("#btn-7DAYS").mouseleave(function() {
    $( this ).animate({
       backgroundColor: '#48164F',
        top: "0"
    }, 50);
})





$("#btn-XDAYS").mouseover(function() {
    $( this ).animate({
       backgroundColor: '#980631',
        top: "5"
    }, 50);
})

$("#btn-XDAYS").mouseleave(function() {
    $( this ).animate({
       backgroundColor: '#FE0148',
        top: "0"
    }, 50);
})




var days = [];
var backgrounds = [];

days.push("SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY");

for (i in days)
{
  var textDefault = $("#btn-" + days[i]).css('color');

  $("#btn-" + days[i]).mouseover(function() {
      $( this ).animate({
         backgroundColor: '#D2F2FF',
         color: '#110419',
         top: "-3",
         left: "-5"
      }, 100);
  })

}




$("#btn-SUNDAY").mouseleave(function() {
    $( this ).animate({
       backgroundColor: '#0F80FF',
       color: textDefault,
       top: "0",
       left: "0"
    }, 50);
})


$("#btn-MONDAY").mouseleave(function() {
    $( this ).animate({
       backgroundColor: '#1876FD',
       color: textDefault,
       top: "0",
       left: "0"
    }, 50);
})

$("#btn-TUESDAY").mouseleave(function() {
    $( this ).animate({
       backgroundColor: '#216BFA',
       color: textDefault,
       top: "0",
       left: "0"
    }, 50);
})


$("#btn-WEDNESDAY").mouseleave(function() {
    $( this ).animate({
       backgroundColor: '#3356F6',
       color: textDefault,
       top: "0",
       left: "0"
    }, 50);
})


$("#btn-THURSDAY").mouseleave(function() {
    $( this ).animate({
       backgroundColor: '#4541F2',
       color: textDefault,
       top: "0",
       left: "0"
    }, 50);
})

$("#btn-FRIDAY").mouseleave(function() {
    $( this ).animate({
       backgroundColor: '#4E36F0',
       color: textDefault,
       top: "0",
       left: "0"
    }, 50);
})

$("#btn-SATURDAY").mouseleave(function() {
    $( this ).animate({
       backgroundColor: '#6F0EE8',
       color: textDefault,
       top: "0",
       left: "0"
    }, 50);
})





$("#btn-go").mousedown(function() {
    $( this ).css({
       backgroundImage: 'url("images/TAB_go_click.png")',
       height: '75%',
       width: '75%',
       left: '10%',
       top: '2%'
    });
})

$("#btn-go").mouseup(function() {
    $( this ).css({
      backgroundImage: 'url("images/TAB_go_hover.png")',
      height: '85%',
      width: '85%',
      left: '4%',
      top: '-2%'
    });
})

$("#btn-go").mouseover(function() {
    $( this ).css({
       backgroundImage: 'url("images/TAB_go_hover.png")',
       height: '85%',
       width: '85%',
       left: '4%',
       top: '-2%'
    });
})

$("#btn-go").mouseleave(function() {
    $( this ).css({
       backgroundImage: 'url("images/TAB_go.png")',
       height: '80%',
       width: '80%',
       left: '7%',
       top: '0%'
    });
})
