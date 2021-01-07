//if time is add/drop period and am not on the website
chrome.tabs.update({
    url: "https://prod.banner.wm.edu/ssb8/twbkwbis.P_WWWLogin"
});
chrome.storage.sync.get(function (items) {
    //usernameBox
    //passwordBox
    //submit.Click()
});

chrome.storage.sync.get(function (items) {
  	//console.log(items.Ccrn1);
  	// var x = document.activeElement.id;
  	// console.log(x);
  	//document.getElementById("crn3").value = 5;
	 document.getElementById("crn_id1").value = items.Ccrn1;
     document.getElementById("crn_id2").value = items.Ccrn2;
     document.getElementById("crn_id3").value = items.Ccrn3;
     document.getElementById("crn_id4").value = items.Ccrn4;
     document.getElementById("crn_id5").value = items.Ccrn5;
     document.getElementById("crn_id6").value = items.Ccrn6;
     document.getElementById("crn_id7").value = items.Ccrn7;
     document.getElementById("crn_id8").value = items.Ccrn8;
     document.getElementById("crn_id9").value = items.Ccrn9;
     document.getElementById("crn_id10").value = items.Ccrn10;

    var buttons = document.getElementsByTagName('input');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].type == 'submit' && buttons[i].value == 'Submit Changes') {
            //console.log("lol");
            buttons[i].click();
            break;
        }
    }
  });