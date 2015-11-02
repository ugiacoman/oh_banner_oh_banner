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