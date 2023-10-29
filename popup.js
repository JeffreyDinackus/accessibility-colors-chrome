//Get the select element
var colorSelect = document.getElementById("color-select");

//Listen for changes to the select element
colorSelect.addEventListener("change", function () {
  //Get the selected color
  var color = colorSelect.value;
  //Send a message to the content script to change the background color
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { color: color });
  });
});