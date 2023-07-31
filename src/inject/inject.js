chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

	console.log(message.greeting); // Output: "Hello from content script"

});;