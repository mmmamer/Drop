
// var urlList = [];
//var i = 0;

document.addEventListener('DOMContentLoaded', function() {
  getUrlListAndRestoreInDom();
  // event listener for the button inside popup window

  // document.getElementById('save').addEventListener('click', addLink);

  // function removeAllUrlsAndSave() {
  //   var removeList = document.getElementsByClassName('listItem');
	 //    while (removeList[0]) {  	    
	 //      	removeList[0].parentNode.removeChild(removeList[0]); 
		// 	urlList.splice(0, 1);
		// 	saveUrlList();
	 //    }
  //   } 

  // function registerElement(callback) {
  //   var element = document.getElementById('remove-all-button');
  //   element.addEventListener('click', callback);
  // }

  // registerElement(removeAllUrlsAndSave);

  // document.body.className = 'fade';
  // document.body.classList.add('fade');

  // document.getElementById("top").addEventListener('click', function() {
  //   let x = document.getElementsByClassName('div-home');

  //   for (let i = 0; i < x.length; i++) {
  //     if (x[i]) { 
  //      x[i].style.display ="none";
  //   } 

  //   let y = document.getElementsByClassName('drop-details');
  //   for (let i = 0; i < y.length; i++) {
  //    if (y[i].style.display === "none") {
  //     y[i].style.display = null;
  //     y[i].style.visibility = 'visible';
  //     }
  //   }
  // }



  });

// })

// });     

function removeUrlAndSave(url) {
	var index = urlList.indexOf(url);
	console.log(urlList);
	if (index != -1) {
	  urlList.splice(index, 1);
	  saveUrlList();
}
	console.log(urlList);
}

// $(function() {
//   // $('#first_form').validate().resetForm();

//   $("#first_form").validate({
//     rules: {
//         url: {
//             required: false,
//             url: true

//         }
//     }

//   });
//   // $('#first_form').validate().resetForm()
// })

  // var validator = $("#first_form").validate();
  // validator.resetForm();

// function addLink() {
//     // validator();
//     if (document.getElementById('saveLink').value != "" ) {
//       var url = document.getElementById('saveLink').value;
//       addUrlToListAndSave(url);
//       addUrlToDom(url);
//   } else {
//       container.innerHTML = '<h1>You didn\'t type anything in!</h1>';                
//       setTimeout(emptyContainer, 4000);              
//   }
// }

// function emptyContainer() {
//   container.innerHTML = "";
// }

function getUrlListAndRestoreInDom() {
  chrome.storage.local.get({
    urlList: []
  }, function(data) {
    urlList = data.urlList;
    urlList.forEach(function(url) {
      addUrlToDom(url);

    });
  });
}

function addUrlToDom(url) {
  // document.getElementById('saved-pages').innerHTML = '<h2>Saved Pages</h2>';
  // document.getElementById('no-drops-yet').style.display = none;
  // if (urlList.length > 0) {

  // var sheet = window.document.styleSheets[0];
  // console.log(sheet);

  // }
  var newEntry = document.createElement('li');
  var file_list = document.createElement('li');
  var newLink = document.createElement('a');
  var newSpan = document.createElement('span');
  file_list.className = "fileList";
  // newLink.addEventListener('click', function() {
  //   chrome.tabs.create({url: url + tabs[0].url })
  // })

  newLink.textContent = url;
  newLink.setAttribute('href', url);
  newLink.setAttribute('target', '_blank');
  newLink.style.visibility = 'visible';

  var textEditBox = document.createElement('input');
  textEditBox.className = "text-edit-box";
  textEditBox.type = 'text';
  textEditBox.style.display = "none";
  textEditBox.placeholder = url; 

  var editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.type = 'button';
  editButton.className = 'edit';
  editButton.style.visibility = 'visible';

  editButton.addEventListener('click', function() {
    var x = this.parentNode.childNodes;
    for (let i = 0; i < x.length; i++) { 
      if (x[i].style.display === "none") {
        let y = x[i];
        y.style.display = null;
        y.style.visibility = 'visible';

      } else if (x[i].style.visibility === "visible") {
        let y = x[i];
        y.style.visibility = null;
        y.style.display = 'none';
      }
  }
});

  //var removeButton = document.createElement('button');

  // button is svg but not visible until hovered over? float above 
  // inside is path 
  // add listener... etc. 
  //var removeButton = document.createElement('svg');
  
  var removeButton = document.createElementNS('http://www.w3.org/2000/svg', "svg");
  removeButton.setAttribute("viewBox", "-1 -1 16 16"); 
  removeButton.setAttribute("class", "remove");
  // removeButton.setAttribute("style", "visibility:hidden;")

  var newElement = document.createElementNS('http://www.w3.org/2000/svg', "path");
  // newElement.setAttribute("style", "visibility:hidden;")
  newElement.setAttribute("class", "path-remove");
  newElement.setAttribute("fill", "#3F9FFF");
  newElement.setAttribute("fill-rule", "evenodd");
  newElement.setAttribute( "d", "M7 5.586L4.738 3.324c-.315-.315-.822-.31-1.136.003l-.186.186c-.315.315-.317.824-.004 1.137l2.262 2.262-2.35 2.35c-.315.315-.31.822.003 1.136l.186.186c.315.315.824.317 1.137.004L7 8.238l2.35 2.35c.315.315.822.31 1.137-.004l.186-.186c.314-.314.316-.823.003-1.136l-2.35-2.35 2.262-2.262c.315-.315.31-.822-.004-1.137l-.186-.186c-.314-.314-.823-.316-1.136-.003L7 5.586z");
  // removeButton.setAttribute("style", "visibility:visible;");
  removeButton.appendChild(newElement);

  removeButton.addEventListener('click', function() {
    var anchor = this.nextSibling.children;
    console.log(anchor);

    removeUrlAndSave(url);
    this.parentNode.remove();
  });

  var cancelButton = document.createElement('button');
  cancelButton.setAttribute('id', "cancel-button");
  cancelButton.textContent = 'Cancel';
  cancelButton.style.display = "none";
  cancelButton.addEventListener('click', function() {
    let x = this.parentNode.childNodes;
    for (let i = 0; i < x.length; i++) { 
      if (x[i].style.display === "none") {
        let y = x[i];
        y.style.display = null;
        y.style.visibility = 'visible';

      } else if (x[i].style.visibility === "visible") {
        let y = x[i];
        y.style.visibility = null;    
        y.style.display = 'none';
      
          }
        };
    })

  var newSave = document.createElement('button');
  newSave.textContent = "Save";
  newSave.setAttribute('id', "save-button");
  newSave.style.display = "none";
  newSave.addEventListener('click', function() {
      let index = urlList.indexOf(url);
      console.log(urlList);
      console.log(index); 

      if (index != -1) {
        urlList.splice(index, 1);
        var editUrl = this.parentNode.querySelector(".text-edit-box").value;
        console.log(editUrl);
        urlList.splice(index, 0, editUrl);
        saveUrlList();
        newLink.textContent = editUrl;
        url = editUrl;

      }
    
    let x = this.parentNode.childNodes;
    for (let i = 0; i < x.length; i++) { 
      if (x[i].style.display === "none") {
        let y = x[i];
        y.style.display = null;
        y.style.visibility = 'visible';

      } else if (x[i].style.visibility === "visible") {
        let y = x[i];
        y.style.visibility = null;    
        y.style.display = 'none';
      
          }
    };
})


  // put the block that needs positioning inside a different list item. 
  // ul is the container
  // li is the list container. 
  // then add another cotaininer that needs to be moved around that wraps
  // to the size of the text. 




  newEntry.appendChild(textEditBox);
  newEntry.appendChild(cancelButton);
  newEntry.appendChild(newSave);

  newEntry.appendChild(newLink);
  // newEntry.appendChild(editButton);

  newEntry.className = 'listItem';
  file_list.appendChild(removeButton);
  // document.getElementById('fileList').appendChild(newEntry)
  var xyz = document.getElementById('list').appendChild(file_list);
  xyz.appendChild(newEntry);
  // xyz.appendChild(removeButton);

  // how do I append a new class item for each 
  
  // var everyListItem = document.getElementsByClassName('fileList');


}

function removeUrlAndSave(url) {
  let index = urlList.indexOf(url);
  //console.log(index);
  //console.log(urlList);
  if (index != -1) {
    urlList.splice(index, 1);
    saveUrlList();
  }
  console.log(urlList);
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

// $(document).keypress(function(evt) {
//   if (evt.which == '13') {
//     addLink();
//     evt.stopPropagation();
//     evt.preventDefault();
//   }
// });



