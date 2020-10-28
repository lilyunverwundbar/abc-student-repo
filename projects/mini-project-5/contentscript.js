console.log("content");
// chrome.runtime.sendMessage({type:"addElement"},function(response){
//   console.log("response is",response);
// });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    // Callback
    if (request == "yes"){

      document.body.style.backgroundColor = "orange";
      var img = document.createElement("img");
      img.src = "https://www.freeiconspng.com/uploads/bookmarks-icon-27.png";
      img.style.left = "80%";
      img.style.top = "0%";
      img.style.position = "absolute";
      document.body.appendChild(img);
    }
})
