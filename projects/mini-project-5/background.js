let urls = [];

chrome.storage.local.get(["counterValue"],function(result){
  //console.log("Value currently is "+result.counterValue);
  if(result.counterValue == undefined){
    urls = [];

    //store the
    chrome.storage.local.set({counterValue:urls},function(){
      //console.log("value is set to " + urls);
    });
  }else{
    urls = result.counterValue;
  }
  urls = result.counterValue;
})

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  console.log(message);
  if(message.type == "getCurrentValue"){
    sendResponse({type:"currentValue",value:urls});

    // if(message.type=="addElement"){
    //   sendResponse({type:"yesorno",value:"no"});
    //
    // }
  }else if(message.type == "increaseValue"){
    chrome.tabs.query({
      active: true,
      currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        var url = tab.url;
        //console.log("This is our"+url);
        urls.push(url);
      });

    //console.log(urls);

    sendResponse({type:"currentValue",value:urls});

    // if(message.type == "addElement"){
    //   sendResponse({type:"yesorno",value:"yes"});
    // }




  //store the
  chrome.storage.local.set({counterValue:urls},function(){
    //console.log("value is set to " + urls);
  });
}
});//whenever there is a message coming in
