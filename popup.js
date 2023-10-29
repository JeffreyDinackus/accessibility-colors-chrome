// popup.js

// Get the select element
var colorSelect = document.getElementById("color-select");

// Listen for changes to the select element
colorSelect.addEventListener("submit", function () {
  // Get the selected color
  // var color = colorSelect.value;

  // Save the selected color in storage
  // chrome.storage.sync.set({ selectedColor: color });
  console.log("test")


  document.body.style.backgroundColor = 'red';
  // Send a message to the content script to change the background color
  // chrome.tabs.query({}, function (tabs) {
  //   tabs.forEach(function (tab) {
  //     chrome.tabs.sendMessage(tab.id, { action: "changeColor", color: color });
  //   });
  // });
});
