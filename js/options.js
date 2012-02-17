function getRadioValue(name){
	for(i in document.options[name]){
		if(document.options[name][i].checked){
			return document.options[name][i].value;
		}
	}
}
function setRadioValue(name, value){
	for(i in document.options[name]){
		if(document.options[name][i].value == value){
			return document.options[name][i].checked = true;
		}
	}
}

function hideLogin(){
	const hidden = "visibility: hidden; display: none;";
	const visible = "visibility: visible; display: block;";
	var hideStyle = hidden;
	var unhideStyle = visible;	
	if (document.options.subscriber_checkbox.checked){ 
		hideStyle =  visible;
		unhideStyle = hidden;
	};
	toHide = ['liUser','liPwd','liVersion'];
	for(i in toHide){
		obj = document.getElementById(toHide[i]) 
		obj.style.cssText = obj.style.cssText + hideStyle;
	}
	toUnhide = ['calltoaction'];
	for(i in toUnhide){
		obj = document.getElementById(toUnhide[i]) 
		obj.style.cssText = obj.style.cssText + unhideStyle;
	}
	
	localStorage['subscriber'] = document.options.subscriber_checkbox.checked;
	
}

function storeThis(obj){
	if(obj.value != null){ localStorage[obj.name] = obj.value; }
	if(obj.name == 'password'){ alert('Password modificata');}
	
	// tracking most popular options, except private details
	if((obj.name != 'password') && (obj.name != 'username')){
		_gaq.push(['_trackEvent', 'Opzioni', obj.name, obj.value]);
	}
}

function trackSubs(obj){
	var action = obj.firstChild.nodeValue;
	var value = 20;
	if(action == "PDF - 10 numeri"){ value = 10; };
	if(action == "PDF - annuale"){ value = 130; };
	if(action == "PDF - trimestrale"){ value = 45; };
	if(action == "PDF - mensile"){ value = 20; };
	if(action == "PDF+HTML - annuale"){ value = 220; };
	if(action == "PDF+HTML - trimestrale"){ value = 70; };
	if(action == "PDF+HTML - mensile"){ value = 30; };	
	_gaq.push(['_trackEvent', 'Abbonamenti', action , action, value ]);    
}

