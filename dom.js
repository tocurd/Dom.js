var Dom = (function(){
	var demoBin = function(){};

	demoBin.prototype.get = function(demoName , params){
		var demoText = $('script[type="text/demo"]').html() + 'var';
		if(demoText.indexOf('var ' + demoName + '=') == -1 && demoText.indexOf('var ' + demoName + ' =') == -1) return false;
		
		demoText = demoText.match(new RegExp("var " + demoName + "(.*)=[\\s\\S]*var"));
		if(typeof demoText[0] == 'undefined') return false;

		paramsName = demoText[0].match(new RegExp("var " + demoName + "(.*)="));
		if(typeof paramsName[0] == 'undefined') return false;

		demoText = $.trim(demoText[0].substring(demoText[0].indexOf(paramsName[0]) + paramsName[0].length, demoText[0].lastIndexOf("var")));
		$.each(params , function(key, value) {
			if(demoText.indexOf("{%" + key + "%}") != false){
				demoText = demoText.replace("{%" + key + "%}" , value);
				console.log(demoText)
			}
		});

		return demoText
	}






	return demoBin;
})(jQuery);


