let btnStart = document.getElementById('start-button');
let btnStop = document.getElementById('stop-button');
let lblStatus = document.getElementById('status-label');

btnStart.onclick = function(element) {
  lblStatus.innerHTML = "Started";
  chrome.runtime.sendMessage({action: "start"}, function(response) {});
}

btnStop.onclick = function(element) {
  lblStatus.innerHTML = "Stopped";
  chrome.runtime.sendMessage({action: "stop"}, function(response) {});
}
