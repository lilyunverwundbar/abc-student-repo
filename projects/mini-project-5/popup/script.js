let button = document.getElementById("increaseButton");
let valueDisplay = document.getElementById("alllinks");

let urls = [];




chrome.runtime.sendMessage({type:"getCurrentValue"},function(response){
  console.log("response is",response);
  urls = response.value;
  valueDisplay.innerHTML = urls.join("\n\n");
});

button.addEventListener("click",()=>{
  //urls.push(document.URL);
//   chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     console.log(request);
//     if(request.type == "addElement"){
//       // Callback
//       sendResponse({ message: 'yes' });
//   }
// })


  chrome.runtime.sendMessage({type:"increaseValue"},function(response){
  console.log("response is",response);
  urls = response.value;
  valueDisplay.innerHTML = urls.join("\n\n");


});

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // the browser gives as an array "tabs" containing all tabs that fit
    // out search query: {active: true, currentWindow: true}
    // in our case the array only one tab (tabs[0]) because only
    // one window is active and in it only one tab is active at a time.

    // the message can be a simple JS object
    let message = "yes";
    console.log(message);

    // we tell chrome we want to send a message
    // the first argument is the id of the tab we want to contact
    // its the one we were searching for, the active one
    // the second argument is the message
    chrome.tabs.sendMessage(tabs[0].id, message);
  });




})
