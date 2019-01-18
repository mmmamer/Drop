 
// chrome.storage.local.get(null, getLocalBytes);
// chrome.storage.local.get(null, function(object) {
//  if (object.keys === "undefined") {
//     var urlList = [];
//     chrome.storage.local.set({
//       urlList
//     })
//  }

// })  


// let gettingItem = chrome.storage.local.get(null, function() {
//   console.log(gettingItem); 
//   if (gettingItem === "undefined") {
//     var urlList = [];
//     chrome.storage.local.set(urlList);
//   }
// })
  // null, string, object or array of strings, function


// console.log(gettingItem);
// var urlList;

// I need to keep going until it makes sense. 
// hw may of our systems are fragmented and working very poorly? 

// var inStorage;

// chrome.storage.local.get('urlList', function() {
//   // urlList is not going to exists so this is going to be an error. 
// })




// var userCharacters;


// chrome.storage.local.get(          , function(data) {


// })

// chrome.storage.local.get('userInput', function(userText) {
//   userCharacters = userText.userInput;
// });

// // window.onkeyup = function(e){
//   // userCharacters.push(e.key);

//   chrome.storage.local.set({'userInput':userCharacters})
//   // if(e.key == "Shift")
//     chrome.storage.local.get('userInput',function(userText){
//       alert(userText.userInput);
//     });





var urlList = [];


document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('saving-button').addEventListener('click', addLink);

});

function addLink() {
    // validator();
    if (document.getElementById('saveLink').value != "") {
      var url = document.getElementById('saveLink').value;
      addUrlToListAndSave(url);
      // addUrlToDom(url);
//   } else {
//       container.innerHTML = '<h1>You didn\'t type anything in!</h1>';                
//       setTimeout(emptyContainer, 4000);              
   }
 }

function emptyContainer() {
  container.innerHTML = "";
}

function removeUrlAndSave(url) {
  let index = urlList.indexOf(url);
  //console.log(index);
  //console.log(urlList);
  if (index != -1) {
    urlList.splice(index, 1);
    saveUrlList();
  }
  // console.log(urlList);
}

function addUrlToListAndSave(url) {
  urlList.push(url);
  saveUrlList();
}

function saveUrlList(callback) {
	chrome.storage.local.set({
   		urlList
   });
}