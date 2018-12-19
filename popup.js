//Pull text from user inputbox
//var data = document.getElementById("this_input").value;
//Save it to the localStorage variable which will always remember what you store in it
//localStorage["inputText"] = data; 

/*window.onload = function() {

	document.getElementById('save').onclick = function() {
		chrome.storage.sync.get(function(url) {

		var link = document.getElementById('saveLine').value;

		  if(typeof(url["myText"]) !== 'undefined' && url["myText"] instanceof Array) { 
		    url["myText"].push(link);
		  } else {
		    url["myText"] = [link];
		  }
		  chrome.storage.sync.set(url, function() {
		  	alert("Success!");
		  }); 
		});
		};

		//chrome.storage.sync.set({'myText': value}, function() {
			//alert("Success!");
		//});
		
	// this is what I believe I'll be using to display the saved items. 
	document.getElementById('get').onclick = function() {
		chrome.storage.sync.get('myText', function(data) {
			alert(data.myText);
+
	document.write(					




	///chrome.runtime.sendMessage({method: "getStatus"}, function(response) {
	 //console.log(response.myText);
	//});

		});

	
		//chrome.storage.sync.get('myText' function() {

		//})

	};

	// 

};

*/



	//document.getElementById('save').onclick = function addLink() {
	/*		
            // Container <div> where dynamic content will be placed
            var container = document.getElementById("container");
            // Clear previous contents of the container
            var url = document.getElementById("saveLink").value;

            var list = document.createElement("li");
            list.type = "text";
            list.id = "member"+ i;
            list.innerHTML = url;

            container.appendChild(url)
            container.appendChild(document.createElement("br"));

	*/

//var i = 1;

//window.onload = function() {
//global variable
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
	

	/*document.addEventListener('DOMContentLoaded', function () {
	   
	    var allButtons = document.getElementsByClassName('buttons');
	    function listenI(i) {
	        allButtons[i].addEventListener('click', () => removeMe(i));
	    }
	    for (var i = 0; i < allButtons.length; i++) {
	        listenI(i);
	    }
	});*/


	/*})
	document.getElementById("remove-all").addEventListener('click', function() {

		var removeList = document.getElementsByClassName("listItem");
    	while(removeList[0]) {
    		removeList[0].parentNode.removeChild(removeList[0]);
    	}
	});*/

	


	/*document.addEventListener('DOMContentLoaded', function () {
	    var allButtons = document.getElementsByClassName("remove");
	    var fullList = document.getElementsByClassName("listItem");

    	//function listenI(i) {
	        //allButtons[i].addEventListener('click', () => removeMe(i));
	    //}
	    for (var i = allButtons.length; i> 0; i--) {
	    //for (var i = 0; i < allButtons.length ; i++) {
		    allButtons[i].addEventListener('click', function() {				    	 
		    		fullList[i].parentNode.removeChild(fullList[i]);
		    });

	    };

        
   		});*/


   		//});
	    /*function removeMe(i) {	
	    	var fullList = document.getElementsByClassName("listItem");
		
	    }*/

	    // this works to remove all the appended links
	
	   
// Maybe I should just. 
	    // this accepts the parameter i and runs it through the code. 
	    // it should work to iterate through that array and select the element corresponding to the button


	    // I believe this code should work. Getting the rest to work is the issue. 


	    //});











	//});










	// I can make a remove all button so let's try that first and come back to the other code. 
	// I'm not stopping until I can remove indiviual buttons. 

	/*function clear() {

	    var elems = document.getElementsByClassName("box");
	    for (var k = elems.length - 1; k >= 0; k--) {
	        var parent = elems[k].parentNode;
	        parent.removeChild(elems[k]);
    }
}*/
	// I'm back at the beginning. A little bit stuck. I can see many different methods of working through the problem. 

	// first I must return a list of elements using getelementsbyclassname... 
	// then 
	// it needs to listen for each click... and it needs to removed that particular button's parent. 
	// 
	// I think I almost have the code that I need. 

	// first one is going to be elements.parentNode.removeChild(elements) although I know there are much more efficient ways 
	// of doing that particular action

	// I need to run that inside of a loop


/*
	document.addEventListener('DOMContentLoaded', function () {

		var allButtons = document.getElementsByClassName('remove')





	}*/

	//Array.from(document.getElementsByClassName("post-text"))
    //	.forEach(element => element.remove());


	    //document.getElementById('removalbutton').addEventListener('click', function() {
	// remove logic here
		//var elem = document.getElementById("testremove");

		//elem.parentNode.removeChild(elem);
	//});

	//function removeMe() {
		//var fullList = document.getElementsByClassName("listItem");
	//var listItems = document.getElementsByClassName("listItem")[i];
		//fullList[i].parentNode.removeChild(fullList[i]);

	//};

	//function removeButton() {
	
	//}
//}




	

		
	//}











			
			//for (i = 0; i < fullList.length; i++) {
			/*	document.getElementsByClassName("remove")[0].addEventListener('click', function() {


					var fullList = document.getElementsByClassName("listItem");
					//var listItems = document.getElementsByClassName("listItem")[i];
					fullList[0].parentNode.removeChild(fullList[0]);
					//listItems.parentNode.removeChild(listItems);



				});
			}*/




			/*function listenIn(i) {
		        allButtons[i].addEventListener('click', () => removeMe(i));
		    }
		    for (var i = 0; i < allButtons.length; i++) {
		        listenIn(i);
		    }

		    // allButtons[i]*/



		    // the () => removeMe(i) function is basically 
		    // run this code but in a shorter formati.... 
		    // I think it works the same as 

		    // removeMe() {
		    // var full list etc. 
		    // function listen(i)
		    // 



		    //} 




			// function to remove the first element works. 
			// now just need to run a loop that iterates through i. 	
			// that should work. 
			// where to put the loop? S
				//var elem = document.getElementsByClassName("listItem")[i];
				//elem.parentNode.removeChild(elem);

			//
	// };

	//};
//}

	// removing by class seems to be the hard part. 


	
//5

// call button via listener
// run remove function- remove parent. 

// that's all. Can I remove it even temporarily? 



	

/*

	function restore() {
    // get the tab link and title
	    chrome.storage.local.get({urlList:[]}, function (data) {
	        urlList = data.urlList;
	        //titleList = data.titleList;

	        // add the titles and url's to the DOM
	        for (var i = 0, n = urlList.length; i < n; i++) {
	            addUrlToDom(urlList[i]);
	        }
	    });
	}*/


	//function removeMe(e) {
		//var btn = document.getElementsByClassName('remove');
		//alert(btn[5]);
		
		//for (var i = 0; i < btn.length; i++) {
		  //btn[i].addEventListener('click', function(e) {
		//e.currentTarget.parentNode.remove();
		    //this.closest('.single').remove() // in modern browsers in complex dom structure
		    //this.parentNode.remove(); //this refers to the current target element 
		    //e.target.parentNode.parentNode.removeChild(e.target.parentNode);
		  //}, false);
		//};
	//};

	// remove button is bound by class and not id so all buttons can be affected at once
	// there are no unique identifiers except the proposed solution assigns values by adding them to an array
	// that makes sense. 

	// first I need to create the remove function
	// if removeButton is clicked... 
	// call the function which deletes the parent value? Which is actually going to be the right list item. 
	// remove parent node

	// remove function. 
	// get elements by class Remove
	// run a loop for the length of the class button i add eventlistener click function e 
	// current target parent node remove that node
	// 
	// thats the remove function sorted. 
	// 
	// then we need to figure out the rest.
	// so I guess the rest is just loading everything back into memory minus the unecessary entry 

	//}
