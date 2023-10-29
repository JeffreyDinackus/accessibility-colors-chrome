//Listen for messages from the popup
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    //Check if the message is to change the background color
    if (request.color) {
      // Change the background color of the page
      document.body.style.backgroundColor = request.color;
    }
  });