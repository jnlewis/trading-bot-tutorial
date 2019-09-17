let btnSave = document.getElementById('save-button');

chrome.storage.sync.get(null, function(data) {
    document.getElementById('interval-textbox').value = data.interval;
  });
  
btnSave.onclick = function(element) {
    let intervalValue = document.getElementById('interval-textbox').value;

    chrome.storage.sync.set({ interval: intervalValue }, 
      function() {
        console.log("Settings saved.");
      }
    );
}
