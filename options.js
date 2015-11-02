function save_options() {
 
  var crn1 = document.getElementById('crn1').value;
  var crn2 = document.getElementById('crn2').value;
  var crn3 = document.getElementById('crn3').value;
  var crn4 = document.getElementById('crn4').value;
  var crn5 = document.getElementById('crn5').value;
  var crn6 = document.getElementById('crn6').value;
  var crn7 = document.getElementById('crn7').value;
  var crn8 = document.getElementById('crn8').value;
  var crn9 = document.getElementById('crn9').value;
  var crn10 = document.getElementById('crn10').value;

  chrome.storage.sync.set({
    
    Ccrn1:crn1,
    Ccrn2:crn2,
    Ccrn3:crn3,
    Ccrn4:crn4,
    Ccrn5:crn5,
    Ccrn6:crn6,
    Ccrn7:crn7,
    Ccrn8:crn8,
    Ccrn9:crn9,
	Ccrn10:crn10,
    
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    
    Ccrn1:'',
    Ccrn2:'',
    Ccrn3:'',
    Ccrn4:'',
    Ccrn5:'',
    Ccrn6:'',
    Ccrn7:'',
    Ccrn8:'',
    Ccrn9:'',
    Ccrn10:'',
  }, function(items) {
  	document.getElementById('crn1').value = items.Ccrn1;
  	document.getElementById('crn2').value = items.Ccrn2;
  	document.getElementById('crn3').value = items.Ccrn3;
  	document.getElementById('crn4').value = items.Ccrn4;
  	document.getElementById('crn5').value = items.Ccrn5;
  	document.getElementById('crn6').value = items.Ccrn6;
  	document.getElementById('crn7').value = items.Ccrn7;
  	document.getElementById('crn8').value = items.Ccrn8;
  	document.getElementById('crn9').value = items.Ccrn9;
  	document.getElementById('crn10').value = items.Ccrn10;

    
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);