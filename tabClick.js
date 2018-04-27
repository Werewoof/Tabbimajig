/*WHAT THIS PAGE IS FOR:

Quite a bit of stuff right now that ought to be broken up into several files.

-Generating random IDs
-Assigns random IDs to groups of divs
-Deals with sending and receiving IPC messages when something gets clicked
-Deals with editing divs, deleting divs
*/



const {ipcRenderer} = require('electron');



// I wanted proof that the IPC communication voodoo was working
/*
ipcRenderer.send('hey');
ipcRenderer.send('my-msg', 'hi');
ipcRenderer.on('good', function(event, arg){
  //$('*').remove();
  //  console.log('HURRAY')
})
*/

var master = []; //THE MASTER ARRAY

var master_tabs = [];
var master_urls = [];
var master_set = [master_tabs, master_urls];

function Day() {
  this.tabs = [];
  this.Urls = [];
}
//master_set[0].push('great news');
console.log(master[0]);


  for (var index = 0; index < 7; index++){
    var newDay = new Day();
    master.push(newDay);
    ipcRenderer.send('callForTabsAndURLs', index);
  }

ipcRenderer.on('deliverTab', function(event, tab, index){
    master[index][0].push(tab);
    console.log(`PUSHED --${master[index][0]}--, which is --${tab}-- at tabs, ${index}.`);
})
ipcRenderer.on('deliverURL', function(event, url, index){
    master[index][1].push(url);
    console.log(`PUSHED --${master[index][1]}--, which is --${url}-- at URLs, ${index}.`);
})




function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 7; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}



//Get number of IDs to generate
var numberOfTabs = $('div.savedTab').length;

//Generate list of IDs based on amount of tabs
var IDs = [];
var URLs = [];

for (i = 0; i < numberOfTabs; i++){
  IDs.push(makeid());
  URLs.push(`www.wow${i}.com`); //Placeholder, will read from data file
}




//Here, we are assigning groups of divs by ID.
//Each group contains one "saved" tab, and edit tab, and a delete tab.

//savedTab holds the user title of the "saved" URl
$('.savedTab').each(function(i) {
    $(this).addClass(IDs[i]);
    console.log(IDs[i]);
    console.log(URLs[i]);
});

//editTab is the edit
$('.editTab').each(function(i) {
    $(this).addClass(IDs[i]);
    $(this).addClass(URLs[i]);
});

//Bet you can't guess what deleteTab is
$('.deleteTab').each(function(i) {
    $(this).addClass(IDs[i]);
    $(this).addClass(URLs[i]);
});






//Again, more testing below
//Verify that linked divs work by changing text to their shared ID when clicked
$('.savedTab').each(function(i) {
  $(this).on('mouseup', function() {

    $('.savedTab').each(function() {
        if ($(this).hasClass(IDs[i])){
          console.log(`${IDs[i]}, yo!`);
          $(this).text(IDs[i]);
        }
    });


    $('.editTab').each(function() {
        if ($(this).hasClass(IDs[i])){
          $(this).text(IDs[i]);
        }
    });

    $('.deleteTab').each(function() {
        if ($(this).hasClass(IDs[i])){
          $(this).text(IDs[i]);
        }
    });
  });
});



//Delete tab
$('.deleteTab').each(function(i) {

  var index;
  var deleteID;
  console.log('click! ' + i);
  $(this).on('mouseup', function() {

    $('.deleteTab').each(function() {
      if ($(this).hasClass(IDs[i])){
        index = IDs.indexOf(IDs[i]);
        deleteID = IDs[i];
        console.log('index: ' + index);
        console.log('deleteID: ' + deleteID);
      }
    });



    $('.deleteTab').each(function() {
        if ($(this).hasClass(deleteID)){
          $(this).remove()
        }
    });

    $('.editTab').each(function() {
          if ($(this).hasClass(deleteID)){
            $(this).remove()
          }
    });

    $('.savedTab').each(function() {
          if ($(this).hasClass(deleteID)){
            $(this).remove()

            //Here, we're removing the ID from the array of IDs.
            IDs.splice(index, 0);
            URLs.splice(index, 0);

            //Then we print out which ones remain.
            for (i = 0; i < URLs.length; i++){
              console.log(i + ": " + URLs[i]);
            }

            for (i = 0; i < IDs.length; i++){
              console.log(i + ": " + IDs[i]);
            }
          }
    });
  });
});







//Edit tab
$('.editTab').each(function(i) {
  $(this).on('mouseup', function() {

    $('.editTab').each(function() {
        if ($(this).hasClass(IDs[i])){
          ipcRenderer.send('editAnUrl', URLs[i], IDs[i]);
        }
    });
  });

});


ipcRenderer.on('saveAnUrl', function(e, newURL, oldURL, theID) {
    console.log("saved it!!! " + newURL + "_" + theID);

    console.log(`old URL: ${oldURL} != ${newURL}`)



   if (newURL != oldURL) {

        var index = IDs.indexOf(theID);

         $('.putItIn').val(newURL);
         $('.saveIt').val(oldURL);

         console.log("index! " + IDs.indexOf(theID));

        $('.editTab').each(function() {
            if ($(this).hasClass(theID)){
              $(this).text(newURL);
              URLs[index] = newURL;
            }
        });

        $('.savedTab').each(function() {
            if ($(this).hasClass(theID)){
              $(this).text(newURL);
            }
        });

        $('.deleteTab').each(function() {
            if ($(this).hasClass(theID)){
              $(this).text(newURL);
            }
        });

        console.log(`new URL: ${newURL} = ${URLs[i]}`);


            for (i = 0; i < URLs.length; i++){
              console.log(i + ": " + URLs[i]);
            }
    }
    else
    {
      console.log("NOOOOO.");

          for (i = 0; i < URLs.length; i++){
            console.log(i + ": " + URLs[i]);
          }
    }

});







/*

*/
