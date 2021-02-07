chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.storage.sync.get(function(items) {
  	// console.log("fuk");
  	//console.log(items.Ccrn1);
  	// var x = document.activeElement.id;
  	// console.log(x);
  	//document.getElementById("crn3").value = 5;
	chrome.tabs.executeScript( {file: "script.js"}, function(){
	            //all injected
	        });
  	
  });
});


// chrome.browserAction.tab.addListener(function (url)){
//     chrome.storage.sync.get(function (items) {
//         if (isBanner(url)) {
//             console.log("LETS GOOOOO");
//         }
//             // chrome.tabs.executeScript({ file: "script.js" }, function () {
//             });
//     });
// });

function isBanner(url) {
    // regex based on https://stackoverflow.com/a/32730577
    return url.match(/(https?:\/\/?prod?\.?banner?\.wm?\.edu(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/);
    // checking https://prod.banner.wm.edu/ssb8/twbkwbis.P_WWWLogin
}
