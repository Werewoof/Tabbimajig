/*WHAT THIS PAGE (WILL BE) FOR:

This page will be used to read in saved data from a file which will populate
arrays upon loading. These arrays will be used to initialize the URls in the
options area.


This function of the program is not implemented or properly working yet.
I started working on it but never got it off the ground before my break ended.

*/


const {ipcRenderer} = require('electron');
const fs = require('fs');


////////////////////READLINE//////////////////////////
var readline = require('readline');
done = 0;

var filename = process.argv[2];

//  for(done = 0; done < 5 ; done++){
ipcRenderer.on('getTabsAndURLs', function(event, index) {
    console.log("HI!!I!!I!!");
    var tab = '';
    var url = '';

    readline.createInterface({
      input: fs.createReadStream(`./7days/day_${index}_TABS.txt`),
      terminal: false
    }).on('line', function(line) {
            //console.log('Line to tabs: ' + line);
            tab = line;
            console.log(`day ${index} tab: ${tab}`);
            ipcRenderer.send('sendTab', tab, index);
    });

    readline.createInterface({
      input: fs.createReadStream(`./7days/day_${day}_URLS.txt`),
      terminal: false
    }).on('line', function(line) {
            //console.log('Line to urls: ' + line);
            url = line;
            console.log(`day ${index} url: ${url}`);
            ipcRenderer.send('sendTab', url, index);
    });

  //console.log(`${tab} AND ${url}`);

})

//}
/////////////////////////////////////////////////////
