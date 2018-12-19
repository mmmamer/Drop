
	var urlList = [];
	var i = 0;

	document.addEventListener('DOMContentLoaded', function() {
	  getUrlListAndRestoreInDom();
	  // event listener for the button inside popup window
	  document.getElementById('save').addEventListener('click', addLink);
	});

	function addLink() {
	  var url = document.getElementById("saveLink").value;
	  addUrlToListAndSave(url);
	  addUrlToDom(url);
	}

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
	  // change the text message
	  document.getElementById("saved-pages").innerHTML = "<h2>Saved pages</h2>";
	  var newEntry = document.createElement('li');
	  var newLink = document.createElement('a');
	  var removeButton = document.createElement('button');

	  removeButton.textContent = "Remove";
	  //removeButton.createElement('button');
	  removeButton.type = "button";
	  removeButton.className = "remove";


	  newLink.textContent = url;
	  newLink.setAttribute('href', url);
	  newLink.setAttribute('target', '_blank');

	  newEntry.appendChild(newLink)
	  newEntry.appendChild(removeButton);

	  newEntry.className = "listItem";

	  document.getElementById("list").appendChild(newEntry);

	}

	function addUrlToListAndSave(url) {
	  urlList.push(url);
	  saveUrlList();
	  //}
	}

	function saveUrlList(callback) {
	  chrome.storage.local.set({
	    urlList
	  }, function() {
	    if (typeof callback === 'function') {
	      //If there was no callback provided, don't try to call it.
	      callback();
	    }
	  });
	}

	// remove a single bookmark item
	document.addEventListener('DOMContentLoaded', function() {
	  restore();
	  var allButtons = document.getElementsByClassName('remove');

	  function listenI(i) {
	    allButtons[i].addEventListener('click', () => removeMe(i));
	  }
	  for (var i = 0; i < allButtons.length; i++) {
	    listenI(i);
	  }
	});

	function removeMe(i) {
	  var fullList = documents.getElementsByClassName('listItem');
	  listItem[i].parentNode.removeChild(listItem[i]);
	}

	function restore() {
	  // get the tab link and title
	  chrome.storage.local.get({
	    urlList: []
	  }, function(data) {
	    urlList = data.urlList;
	    //titleList = data.titleList;

	    // add the titles and url's to the DOM
	    for (var i = 0, n = urlList.length; i < n; i++) {
	      addUrlToDom(urlList[i]);
	    }
	  });

	}

	//remove all button
	document.addEventListener('DOMContentLoaded', function() {

		document.getElementById("remove-all").addEventListener('click', function() {
			var removeList = document.getElementsByClassName("listItem");
			while(removeList[0]) {
				removeList[0].parentNode.removeChild(removeList[0]);
			}
		})
	});
	
